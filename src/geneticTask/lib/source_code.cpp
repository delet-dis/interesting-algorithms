#include <stdio.h>
#include "matrix.h"
#include "words.h"
#include "gentic_coefficients.h"
#include "utils.h"
#include "source_code.h"

SourceCode::SourceCode() {
    code.push_back(new Line);
    placeToDeclareVars = code.begin();
    code.push_back(new Line);
    placeToDeclareFuncs = code.begin();
    placeToDeclareFuncs++;
}


SourceCode::~SourceCode() {
    for(auto line : code) {
        if(!line->used)
            delete line;
        else
            line->used--;
    }
}

    
int SourceCode::edit_distance(const SourceCode &other) const {
    int i, j;
    Matrix<int> t(this->code.size(), other.code.size());
    t[0][0] = this->code.front() == other.code.front();
    
    for (i = 1; i < this->code.size(); i++)
        t[0][i] = 4 * i;

    for (j = 1; j < other.code.size(); j++)
        t[j][0] = 4 * j;
    
    
    i = 1;
    for (auto iter1 = ++this->code.begin(); iter1 != this->code.end(); ++iter1, ++i) {
        j = 1;
        for (auto iter2 = ++other.code.begin(); iter2 != other.code.end(); ++iter2, ++j) {
            t[i][j] = std::min(t[i-1][j], t[j-1][i]) + 4;
            t[i][j] = std::min(t[i][j], t[i-1][j-1] + (*iter1)->difference(**iter2));
        }
    }
    
    return t[i][j];
}


void SourceCode::copy_code(const SourceCode &src) {
    LinePtrConst line;
    
    for (line = src.code.begin(); line != src.placeToDeclareVars; ++line) {
        this->code.insert(this->placeToDeclareVars, *line);
        (*line)->used++;
    }
    
    for (++line; line != src.placeToDeclareFuncs; ++line) {
        this->code.insert(this->placeToDeclareFuncs, *line);
        (*line)->used++;
    }
    
    for (++line; line != src.code.end(); ++line) {
        this->code.push_back(*line);
        (*line)->used++;
    }
        
    
}


void SourceCode::fill_template(Line* line, u_int8_t curScope) {
    deps.scopes[curScope]++;
    if(line->content.word0 <= 2)
        curScope = scope.new_scope(curScope, line->content.word0 <= 1); 

    line->scope = curScope;
    
    u_int8_t var, func, local;
    
    if (line->content.word0 == word0::DEF) {
        func = scope.new_func();
        local = scope.get_local(curScope);
        var = scope.get_rand_var(curScope, true);
        deps.vars[var]++;
        
        line->content.word1 |= func;
        line->content.word2 |= local;
        line->content.word3 |= var;
        return;
    }
    
    if (line->content.word0 == word0::NEW_VAR) {
        line->content.word1 |= scope.new_global_var();
        line->content.word2 |= randint(0, 31);
        return;
    }
    
    
    if (line->content.word0 == word0::FOR) {
        local = scope.get_local(curScope);
        if((line->content.word2 & prefixes::prefixMask) == prefixes::EX_VAR_EXCEPT_LOCAL) {
            var = scope.get_rand_var(curScope, true);
            deps.vars[var]++;
        }
        else
            var = randint(0, 31);
        
        line->content.word1 |= local;
        line->content.word2 |= var;
        return;
    }
    
    for (int i = 1; i < 4; i++) {
        u_int8_t prefix = line->words[i] & prefixes::prefixMask;
        switch (prefix) {
            case prefixes::EX_VAR:
                var = scope.get_rand_var(curScope);
                deps.vars[var]++;
                line->words[i] |= var;
                break;
            case prefixes::FUNC:
                func = scope.get_rand_func();
                deps.funcs[func]++;
                line->words[i] |= func;
                break;
            case prefixes::CONST:
                line->words[i] |= randint(0, 31);
                break;
            case prefixes::OPERATOR:
                line->words[i] |= randint(0, operators::last);
                break;
            case prefixes::COMP_OPERATOR:
                line->words[i] |= randint(0, compare_operators::last);
                break;
            case prefixes::NOTHING:
                return;
                
        }
    }
    
}


void SourceCode::mutate_line(Line *line, u_int8_t wordsMask) {
    for (int i = 1; i < 4; i++) {
        
        if(!(wordsMask >> i & 1))
            continue;
        
        u_int8_t prefix = line->words[i] & prefixes::prefixMask;
        if(prefix == prefixes::IMMUTABLE)
            continue;
        
        u_int8_t value = line->words[i] & prefixes::valueMask;
        line->words[i] &= prefixes::prefixMask; //clear value
        
        switch(prefix) {
            case prefixes::EX_VAR:
                deps.vars[value]--;
                value = scope.get_rand_var(line->scope);
                deps.vars[value]++;
                line->words[i] |= value;
                break;
            case prefixes::EX_VAR_EXCEPT_LOCAL:
                deps.vars[value]--;
                value = scope.get_rand_var(line->scope, true);
                deps.vars[value]++;
                line->words[i] |= value;
                break;
            case prefixes::FUNC:
                deps.funcs[value]--;
                value = scope.get_rand_func();
                deps.funcs[value]++;
                line->words[i] |= value;
                break;
            case prefixes::CONST:
                line->words[i] |= randint(0, 32);
                break;
            case prefixes::OPERATOR:
                line->words[i] |= randint(0, operators::last);
                break;
            case prefixes::COMP_OPERATOR:
                line->words[i] |= randint(0, compare_operators::last);
                break;
            case prefixes::NOTHING:
                return;
        }        
    }
}


void SourceCode::copy_code_and_delete_some_lines(const SourceCode &parent) {
    LinePtr placeToInsert = placeToDeclareVars;
    u_int8_t curScope;
    
    for (LinePtrConst line = parent.code.begin(); line != parent.code.end(); ++line){
        
        if(line == parent.placeToDeclareVars) {
            placeToInsert = placeToDeclareFuncs;
            continue;
        }
        if(line == parent.placeToDeclareFuncs) {
            placeToInsert = code.end();
            continue;
        }
            
        if (!deps.get_deps(*line) && randint(0, 1)) { //TODO: skip coeff
            curScope = (*line)->scope;
            if((*line)->content.word0 <= 3) //lines that affect scope
                curScope = scope.free(*line);

            deps.free(*line, curScope);
        } 
        
        else {
            code.insert(placeToInsert, *line);
            (*line)->used++;
        }
    }
}


void SourceCode::add_some_lines() {
    
    //declare new vars
    int quantity = randint(1, 3);//TODO: coeff IF there is no vars yet, MAKE new by all means
    for (int i = 0; i < quantity; i++) {
        Line *newLine = new Line();
        newLine->contentPile = prefixes::get_template(word0::NEW_VAR);
        fill_template(newLine, 0); 
        code.insert(placeToDeclareVars, newLine);
    } 
    
    //declare new funcs
    quantity = randint(0, 3);//TODO: coeff
    for (int i = 0; i < quantity; i++) {
        Line *newLine = new Line();
        newLine->contentPile = prefixes::get_template(word0::DEF);
        fill_template(newLine, 0); 
        code.insert(placeToDeclareFuncs, newLine);
    } 
    
    //TODO: insert into functions
    LinePtr curLine = placeToDeclareFuncs;
    u_int8_t curScope;
    u_int8_t availabelWords[6] = {
        word0::FOR,
        word0::IF,
        word0::ARITHMETIC,
        word0::ASSIGN,
        word0::PRINT,
        word0::INPUT
    };
        
    
    do  {
        curScope = (*curLine)->scope;
        ++curLine;

        if(randint(0, 1)) //TODO: skip coeff
            continue;
        
        //TODO: scope termination coeff
        if ((curLine == code.end() || (*curLine)->scope != curScope) && randint(0, 1))
            curScope = scope.get_prev_scope(curScope); //TODO:get_rand_prev_scope()
        
        
        u_int8_t word0 = availabelWords[randint(0, 5)];
        Line *newLine = new Line();
        newLine->contentPile = prefixes::get_template(word0, scope.func_available());
        fill_template(newLine, curScope);
        
        code.insert(curLine, newLine);
        
    } while (curLine != code.end());
}


void SourceCode::edit_some_lines() {
    for (LinePtr curLine = code.begin(); curLine != code.end(); ++curLine) {
        
        if(randint(0, 1)) //TODO: skip coeff
            continue;
        
        u_int8_t mutationMask = randint(0, 15);
        mutate_line(*curLine, mutationMask);
    }
    
    
}


SourceCode* SourceCode::give_birth() {
    SourceCode *child = new SourceCode();
    child->deps = this->deps;
    child->scope = this->scope;
    
    int choise = randint(0, 7);
    bool codeCopied = false;


    if (choise & 1) {
        codeCopied = true;
        child->copy_code_and_delete_some_lines(*this);
    }
    
    if(!codeCopied)
        child->copy_code(*this);
    
    // add
    if (choise & 2) {
        child->add_some_lines();
    }
    // edit
    if (choise & 4) {
        child->edit_some_lines();
    }
        
    return child;
}


char* SourceCode::render_text() {
    using namespace prefixes;
    
    char *codeTXT = new char[32 * code.size()];
    int c = 0;
    int indents = 0;
    int prevScope = 0, curScope;
    char return_str[10] = "return ab";
    int funcScopeID = 0;
    char buf[4][12];
    const char *args[3];
    
    u_int8_t prefix, value;
    
    for (Line *line : code) {
        
        if (line == *placeToDeclareVars)
            continue;
        if (line == *placeToDeclareFuncs)
            continue;
        
        //TODO: scopes and indentation;
        curScope = line->scope;
        if (curScope != prevScope) {
            if(line->content.word0 <= 2) 
                indents++;
            else
                indents--;
        }
        
        
        for (int i = 0; i < indents; i++)
            codeTXT[c++] = '\t';
        
        int j = 0;
        if(line->content.word0 == word0::DEF) {
            value = line->content.word1 & valueMask;
            sprintf(buf[0], "func_");
            buf[0][5] = 97 + value / 26;
            buf[0][6] = 97 + value % 26;
            buf[0][7] = 0;
            
            value = line->content.word2 & valueMask;
            buf[1][0] = 97 + value / 26;
            buf[1][1] = 97 + value % 26;
            buf[1][2] = 0;
            
            args[0] = buf[0];
            args[1] = buf[1];
            j = 3; //skip next cycle
        }
        
        for (; j < 3; j++) {
            prefix = line->words[j+1] & prefixMask;
            value = line->words[j+1] & valueMask;
            

            if (prefix == EX_VAR || prefix == EX_VAR_EXCEPT_LOCAL || prefix == IMMUTABLE) {
                buf[j][0] = 97 + value / 26;
                buf[j][1] = 97 + value % 26;
                buf[j][2] = 0;
                args[j] = buf[j];
            }
                
            else if (prefix == CONST) {
                sprintf(buf[j], "%d", value);
                args[j] = buf[j];
            }
            
            else if (prefix == OPERATOR) 
                args[j] = operators::str[value];
            
            else if (prefix == COMP_OPERATOR)
                args[j] = compare_operators::str[value];
            
            else if (prefix == FUNC) {
                buf[j+1][0] = 97 + value / 26;
                buf[j+1][1] = 97 + value % 26;
                buf[j+1][2] = 0;
                
                value = line->words[j+2] & valueMask;
                buf[j+2][0] = 97 + value / 26;
                buf[j+2][1] = 97 + value % 26;
                buf[j+2][2] = 0;
                
                sprintf(buf[j], "func_%s(%s)", buf[j+1], buf[j+2]);
                
                args[j] = buf[j];                
                break;
            }
        }

        
        c += sprintf(&codeTXT[c], word0::str[line->content.word0], args[0], args[1], args[2]);
        codeTXT[c++] = '\n';
        prevScope = curScope;
    }
    
    codeTXT[c] = 0;
    
    return codeTXT;    
}


