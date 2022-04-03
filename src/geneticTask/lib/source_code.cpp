#include <stdio.h>
#include <algorithm>
#include "matrix.h"
#include "words.h"
#include "gentic_coefficients.h"
#include "utils.h"
#include "source_code.h"

SourceCode::SourceCode() {
    deps.zero_init();
    code.emplace_back();
    code.emplace_back();
    placeToDeclareVars = code.begin();
    placeToDeclareFuncs = ++code.begin();
}

void SourceCode::set_const_code(int* begin, int* end) {
    bool inVarSegment = true, inFuncSegment = false;
    LinePtr placeToInsert = placeToDeclareVars;
    
    for (int *line = begin; line != end; ++line) {
        
        if (inFuncSegment && *line == 0) {
            placeToInsert = code.end();
            continue;
        }
        
        if(inVarSegment && *line == 0) {
            inFuncSegment = true;
            placeToInsert = placeToDeclareFuncs;
            continue;
        }
        
        LinePtr newLine = code.emplace(placeToInsert);
        newLine->contentPile = *line;
    }
}

    
int SourceCode::edit_distance(const SourceCode &other) const {
    int i, j;
    Matrix<int> t(this->code.size(), other.code.size());
    t[0][0] = this->code.front() == other.code.front();
    
    for (i = 1; i < this->code.size(); i++)
        t[i][0] = 4 * i;

    for (j = 1; j < other.code.size(); j++)
        t[0][j] = 4 * j;
    
    
    i = 1;
    for (auto iter1 = ++this->code.begin(); iter1 != this->code.end(); ++iter1, ++i) {
        j = 1;
        for (auto iter2 = ++other.code.begin(); iter2 != other.code.end(); ++iter2, ++j) {
            t[i][j] = std::min(t[i-1][j], t[i][j-1]) + 4;
            t[i][j] = std::min(t[i][j], t[i-1][j-1] + iter1->difference(*iter2));
        }
    }
    
    return t[i-1][j-1];
}


void SourceCode::copy_code(const SourceCode &src) {
    LinePtrConst line;
    for (line = src.code.begin(); line != src.placeToDeclareVars; ++line) 
        this->code.insert(this->placeToDeclareVars, *line);
    
    for (++line; line != src.placeToDeclareFuncs; ++line) 
        this->code.insert(this->placeToDeclareFuncs, *line);
    
    for (++line; line != src.code.end(); ++line)
        this->code.push_back(*line);
}


void SourceCode::fill_template(Line &line, u_int8_t curScope) {
    deps.scopes[curScope]++;
    if(line.content.word0 <= 2)
        curScope = scope.new_scope(curScope, line.content.word0 <= 1); 

    line.scope = curScope;
    
    u_int8_t var, func, local;
    
    if (line.content.word0 == word0::DEF) {
        func = scope.new_func();
        local = scope.get_local(curScope);
        var = scope.get_rand_var(curScope);
        deps.vars[var]++;
        
        line.content.word1 |= func;
        line.content.word2 |= local;
        line.content.word3 |= var;
        return;
    }
    
    if (line.content.word0 == word0::NEW_VAR) {
        line.content.word1 |= scope.new_global_var();
        line.content.word2 |= randint(0, 31);
        return;
    }
    
    
    if (line.content.word0 == word0::FOR) {
        local = scope.get_local(curScope);
        if((line.content.word2 & prefixes::prefixMask) == prefixes::EX_VAR_EXCEPT_LOCAL) {
            var = scope.get_rand_var(curScope, true);
            deps.vars[var]++;
        }
        else
            var = randint(0, 31);
        
        line.content.word1 |= local;
        line.content.word2 |= var;
        return;
    }
    
    for (int i = 1; i < 4; i++) {
        u_int8_t prefix = line.words[i] & prefixes::prefixMask;
        switch (prefix) {
            case prefixes::EX_VAR:
                var = scope.get_rand_var(curScope);
                deps.vars[var]++;
                line.words[i] |= var;
                break;
            case prefixes::FUNC:
                func = scope.get_rand_func();
                deps.funcs[func]++;
                line.words[i] |= func;
                break;
            case prefixes::CONST:
                line.words[i] |= randint(0, 31);
                break;
            case prefixes::OPERATOR:
                line.words[i] |= randint(0, operators::last);
                break;
            case prefixes::COMP_OPERATOR:
                line.words[i] |= randint(0, compare_operators::last);
                break;
            case prefixes::NOTHING:
                return;
                
        }
    }
    
}


void SourceCode::mutate_line(Line &line, u_int8_t wordsMask) {
    for (int i = 1; i < 4; i++) {
        
        if(!(wordsMask >> i & 1))
            continue;
        
        u_int8_t prefix = line.words[i] & prefixes::prefixMask;
        if(prefix == prefixes::IMMUTABLE)
            continue;
        
        u_int8_t value = line.words[i] & prefixes::valueMask;
        line.words[i] &= prefixes::prefixMask; //clear value
        
        switch(prefix) {
            case prefixes::EX_VAR:
                deps.vars[value]--;
                value = scope.get_rand_var(line.scope);
                deps.vars[value]++;
                line.words[i] |= value;
                break;
            case prefixes::EX_VAR_EXCEPT_LOCAL:
                deps.vars[value]--;
                value = scope.get_rand_var(line.scope, true);
                deps.vars[value]++;
                line.words[i] |= value;
                break;
            case prefixes::FUNC:
                deps.funcs[value]--;
                value = scope.get_rand_func();
                deps.funcs[value]++;
                line.words[i] |= value;
                break;
            case prefixes::CONST:
                line.words[i] |= randint(0, 32);
                break;
            case prefixes::OPERATOR:
                line.words[i] |= randint(0, operators::last);
                break;
            case prefixes::COMP_OPERATOR:
                line.words[i] |= randint(0, compare_operators::last);
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
            
            
        if (!deps.get_deps(*line) && randint(0, 2)) { //TODO: skip coeff
            curScope = line->scope;
            if(line->content.word0 <= 3) //lines that affect scope
                curScope = scope.free(*line);

            deps.free(*line, curScope);
        } 
        
        else 
            code.insert(placeToInsert, *line);
    }
}


void SourceCode::add_some_lines() {
    
    //declare new vars
    int threshold = scope.free_vars_available();
    int needVar = !scope.global_var_available();
    int quantity = randint(needVar, threshold / 3);
    
    for (int i = 0; i < quantity; i++) {
        LinePtr newLine = code.emplace(placeToDeclareVars);
        newLine->contentPile = prefixes::get_template(word0::NEW_VAR);
        fill_template(*newLine, 0); 
    } 
    
    //declare new funcs
    threshold = std::min(scope.free_funcs_available(), scope.free_scopes_available());
    threshold = std::min(threshold, scope.free_vars_available());
    quantity = randint(0, threshold / 3);
    
    for (int i = 0; i < quantity; i++) {
        LinePtr newLine = code.emplace(placeToDeclareFuncs);
        newLine->contentPile = prefixes::get_template(word0::DEF);
        fill_template(*newLine, 0); 
    } 
    
    
    //TODO: insert into functions
    LinePtr curLine = placeToDeclareVars;
    curLine++;
    u_int8_t curScope, lastScope;
    bool inFunctionSegment = true;
    
    int firstAvailableWord;
    u_int8_t availableWords[6] = {
        word0::FOR,
        word0::IF,
        word0::ARITHMETIC,
        word0::ASSIGN,
        word0::PRINT,
        word0::INPUT
    };
        
    
    do  {
        
        curScope = curLine->scope;
        ++curLine;
        
        if(curLine == placeToDeclareFuncs)
            continue;
        

        if(randint(0, 3) / 3) //TODO: skip coeff
            continue;
        
        //TODO: scope termination coeff
       /* if ((curLine == code.end() || curLine->scope != curScope) && randint(0, 1) && !inFunctionSegment)
            curScope = scope.get_prev_scope(curScope); //TODO:get_rand_prev_scope()
        */
        if(curLine == code.end())
            lastScope = 0;
        else if(curLine->words[0] == word0::IF || curLine->words[0] == word0::FOR)
            lastScope = scope.get_prev_scope(curLine->scope);
        else
            lastScope = curLine->scope;
        
        curScope = scope.get_rand_prev_scope(curScope, lastScope);
       
        firstAvailableWord = 0;
        if(!scope.free_vars_available())
            firstAvailableWord = 1;   //FOR is impossible
        if(!scope.free_scopes_available())
            firstAvailableWord = 2; //IF and FOR is impossible
        
        
        u_int8_t word0 = availableWords[randint(firstAvailableWord, 5)];
        
        LinePtr newLine = code.emplace(curLine);
        newLine->contentPile = prefixes::get_template(word0, scope.func_available());
        fill_template(*newLine, curScope);
        
        
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
    int curScope;
    char return_str[10] = "return ab";
    int lastFuncIndent = 0;
    bool inFunc = false;
    char buf[4][12];
    const char *args[3];
    
    u_int8_t prefix, value;
    
    for (Line &line : code) {
        
        if (&line == &*placeToDeclareVars)
            continue;
        if (&line == &*placeToDeclareFuncs)
            continue;
        
        curScope = line.scope;
        indents = scope.get_indent(curScope);
        if (line.content.word0 <= 2)
            indents--;
        
        //write return 
        if(inFunc && indents <= lastFuncIndent) {
            for (int i = 0; i <= indents; i++)
                codeTXT[c++] = '\t';
            for (int i = 0; i < 9; i++)
                codeTXT[c++] = return_str[i];
            codeTXT[c++] = '\n';
            
            inFunc = false;
        }
        
        for (int i = 0; i < indents; i++)
            codeTXT[c++] = '\t';
        
        
        if(line.content.word0 == word0::DEF) {
            value = line.content.word1 & valueMask;
            sprintf(buf[0], "func_");
            buf[0][5] = 97 + value / 26;
            buf[0][6] = 97 + value % 26;
            buf[0][7] = 0;
            
            value = line.content.word2 & valueMask;
            buf[1][0] = 97 + value / 26;
            buf[1][1] = 97 + value % 26;
            buf[1][2] = 0;
            
            value = line.content.word3 & valueMask;
            return_str[7] = 97 + value / 26;
            return_str[8] = 97 + value % 26;
            
            args[0] = buf[0];
            args[1] = buf[1];
            inFunc = true;
            goto FLUSH_BUFER;
        }
        
        for (int i = 0; i < 3; i++) {
            prefix = line.words[i+1] & prefixMask;
            value = line.words[i+1] & valueMask;
            

            if (prefix == EX_VAR || prefix == EX_VAR_EXCEPT_LOCAL || prefix == IMMUTABLE) {
                buf[i][0] = 97 + value / 26;
                buf[i][1] = 97 + value % 26;
                buf[i][2] = 0;
                args[i] = buf[i];
            }
                
            else if (prefix == CONST) {
                sprintf(buf[i], "%d", value);
                args[i] = buf[i];
            }
            
            else if (prefix == OPERATOR) 
                args[i] = operators::str[value];
            
            else if (prefix == COMP_OPERATOR)
                args[i] = compare_operators::str[value];
            
            else if (prefix == FUNC) {
                buf[i+1][0] = 97 + value / 26;
                buf[i+1][1] = 97 + value % 26;
                buf[i+1][2] = 0;
                
                value = line.words[i+2] & valueMask;
                buf[i+2][0] = 97 + value / 26;
                buf[i+2][1] = 97 + value % 26;
                buf[i+2][2] = 0;
                
                sprintf(buf[i], "func_%s(%s)", buf[i+1], buf[i+2]);
                
                args[i] = buf[i];                
                break;
            }
        }

    FLUSH_BUFER:
        c += sprintf(&codeTXT[c], word0::str[line.content.word0], args[0], args[1], args[2]);
        codeTXT[c++] = '\n';
    }
    
    codeTXT[c] = 0;
    
    return codeTXT;    
}


