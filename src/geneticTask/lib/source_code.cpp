#include <cstdio>
#include <algorithm>
#include "matrix.h"
#include "words.h"
#include "gentic_coefficients.h"
#include "utils.h"
#include "source_code.h"

SourceCode::SourceCode() {
    deps.zero_init();
    Line& newLine = code.emplace_back();
    newLine.words[0] = word0::SPECIAL;
    Line& newLine2 = code.emplace_back();
    newLine2.words[0] = word0::SPECIAL;
    placeToDeclareVars = code.begin();
    placeToDeclareFuncs = ++code.begin();
}

void SourceCode::set_const_code(const_line *begin, const_line *end) {
    bool inVarSegment = true, inFuncSegment = false;
    auto placeToInsert = placeToDeclareVars;
    int globalVars = 0;
    int funcs = 0;
    
    const_line *iter;
    
    for (iter = begin; iter != end; ++iter) {
        
        if (inFuncSegment && iter->words[0] == word0::SPECIAL) {
            placeToInsert = code.end();
            inFuncSegment = false;
            continue;
        }
        
        if(inVarSegment && iter->words[0] == word0::SPECIAL) {
            inFuncSegment = true;
            inVarSegment = false;
            placeToInsert = placeToDeclareFuncs;
            continue;
        }
        
        if(inVarSegment)
            globalVars++;
        if(inFuncSegment && iter->words[0] == word0::DEF)
            funcs++;
        
        auto newLine = code.emplace(placeToInsert);
        newLine->indents = iter->indents;
        newLine->contentPile = iter->contentPile;
    }
    scope.set_const(globalVars, funcs);
}


int SourceCode::edit_distance(const SourceCode &other) const {
    
    int diff = 5 * std::abs(scope.globalBank.size - other.scope.globalBank.size);
    diff += 5 * std::abs(scope.funcBank.size - other.scope.funcBank.size);
    Matrix<int> t(this->code.size()+1, other.code.size()+1);
    auto thisStart = this->code.begin();
    auto otherStart = other.code.begin();
    return recursive_edit_distance(other, thisStart, otherStart, t, 0, 0, 0).replace_i_j + diff;
}

SourceCode::edit_distance_result
    SourceCode::recursive_edit_distance(const SourceCode &other, LinePtrConst& prevIter1, LinePtrConst& prevIter2,
                                        Matrix<int> &t, int matrixFreeSpace, int indentsLevel1, int indentsLevel2) const {
    
    SourceCode::edit_distance_result res = {0, 0, 0};
    
    auto iter1 = prevIter1;
    auto iter2 = prevIter2;
    

    int offset_i = matrixFreeSpace / t.rows;
    int offset_j = matrixFreeSpace % t.rows;
    
    t[offset_i][offset_j] = 0;//iter1->difference(*prevIter2);
    
    int j = 1 + offset_j;
    int i = 1 + offset_i;
    LinePtrConst tmp;
    
    for (iter2 = prevIter2; iter2 != other.code.end() && iter2->indents == indentsLevel2; ++j) {
        res.add_j += 4 * count_current_scope_lines(iter2, other.code.end());
        t[offset_i][j] = res.add_j;
    }

    for (; iter1 != this->code.end() && iter1->indents == indentsLevel1; ++i) {
        
        tmp = iter1;
        
        res.remove_i += 4 * count_current_scope_lines(iter1, this->code.end());
        t[i][offset_j] = res.remove_i;
        
        j = offset_j + 1;
        
        for (iter2 = prevIter2; iter2 != other.code.end() && iter2->indents == indentsLevel2; ++j) {
            iter1 = tmp;
            
            SourceCode::edit_distance_result costs{};
            u_int16_t diff = iter1->difference(*iter2);
            if(iter1->words[0] > 2 && iter2->words[0] > 2) {
                costs.remove_i = 4;
                costs.add_j = 4;
                costs.replace_i_j = diff;
                ++iter2;
                ++iter1;
            }
            else if (diff >= 8) {
                costs.remove_i = 4 * count_current_scope_lines(iter1, this->code.end());
                costs.add_j = 4 * count_current_scope_lines(iter2, other.code.end());
                costs.replace_i_j = costs.add_j + costs.remove_i;
            }
            else {
                int indents1 = iter1->indents + 1;
                int indents2 = iter2->indents + 1;
                ++iter1;
                ++iter2;
                costs = recursive_edit_distance(other, iter1, iter2, t, i*t.rows+j, indents1, indents2);
                costs.remove_i += 4;
                costs.add_j += 4;
                costs.replace_i_j += diff;
            }
            
            
            t[i][j] = std::min(t[i-1][j] + costs.remove_i, t[i][j-1] + costs.add_j);
            t[i][j] = std::min(t[i][j], t[i-1][j-1] + costs.replace_i_j);
        }
    }
    
    prevIter1 = iter1;
    prevIter2 = iter2;
    res.replace_i_j = t[i-1][j-1];
    
    return res;
}

int SourceCode::count_current_scope_lines(LinePtrConst& iter, LinePtrConst end) {
    int indentsLevel = iter->indents;
    int lines = 1;
    ++iter;
    while (iter != end && iter->indents > indentsLevel) {
        iter++;
        lines++;
    }
    
    return lines;
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
    int indents = 0;
    if(line.content.word0 <= 2) {
        curScope = scope.new_scope(curScope, line.content.word0 <= 1); 
        indents--;
    }
    indents += scope.get_indent(curScope);
    line.scope = curScope;
    line.indents = indents;
    
    u_int8_t var, func, local;
    
    if (line.content.word0 == word0::DEF) {
        func = scope.new_func();
        local = scope.get_local(curScope);
        var = scope.get_rand_var(curScope, true);
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
    using namespace prefixes;
    
    union {
        int32_t contentReplacement;
        u_int8_t wordsReplacement[4];
    };
    
    contentReplacement = get_template(line.words[0]);
    
    for (int i = 1; i < 4; i++) {
        
        if(!(wordsMask >> i & 1))
            continue;
        
        u_int8_t prefix = line.words[i] & prefixMask;
        if (prefix == IMMUTABLE)
            continue;
        
        
        u_int8_t value = line.words[i] & valueMask;
        line.words[i] &= prefixMask; //clear value
        
        //remove dependencies
        if (prefix == EX_VAR || prefix == EX_VAR_EXCEPT_LOCAL)
            deps.vars[value]--;
        else if (prefix == FUNC)
            deps.funcs[value]--;
        
        if (CHANGE_PREFIX) {
            prefix = wordsReplacement[i];
            line.words[i] = prefix;
        }
        
        switch(prefix) {
            case EX_VAR:
                value = scope.get_rand_var(line.scope);
                deps.vars[value]++;
                line.words[i] |= value;
                break;
            case EX_VAR_EXCEPT_LOCAL:
                value = scope.get_rand_var(line.scope, true);
                deps.vars[value]++;
                line.words[i] |= value;
                break;
            case FUNC:
                value = scope.get_rand_func();
                deps.funcs[value]++;
                line.words[i] |= value;
                break;
            case CONST:
                line.words[i] |= randint(0, 32);
                break;
            case OPERATOR:
                line.words[i] |= randint(0, operators::last);
                break;
            case COMP_OPERATOR:
                line.words[i] |= randint(0, compare_operators::last);
                break;
            case NOTHING:
                return;
        }        
    }
}


void SourceCode::copy_code_and_delete_some_lines(const SourceCode &parent) {
    auto placeToInsert = placeToDeclareVars;
    u_int8_t curScope;
    
    for (auto line = parent.code.begin(); line != parent.code.end(); ++line){
        
        if(line == parent.placeToDeclareVars) {
            placeToInsert = placeToDeclareFuncs;
            continue;
        }
        if(line == parent.placeToDeclareFuncs) {
            placeToInsert = code.end();
            continue;
        }
            
            
        if (!deps.get_deps(*line) && DELETE_LINE) {
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
    int needVar = !scope.global_vars_available();
    int quantity;
    if(needVar || NEW_VAR_CHANCE)
        quantity = randint(needVar, threshold / 3);
    else
        quantity = 0;
    for (int i = 0; i < quantity; i++) {
        auto newLine = code.emplace(placeToDeclareVars);
        newLine->contentPile = prefixes::get_template(word0::NEW_VAR);
        fill_template(*newLine, 0); 
    } 
    
    //declare new funcs
    threshold = std::min(scope.free_funcs_available(), scope.free_scopes_available());
    threshold = std::min(threshold, scope.free_vars_available());
    if(NEW_FUNC_CHANCE)
        quantity = randint(0, threshold / 3);
    else
        quantity = 0;
    
    for (int i = 0; i < quantity; i++) {
        auto newLine = code.emplace(placeToDeclareFuncs);
        newLine->contentPile = prefixes::get_template(word0::DEF);
        fill_template(*newLine, 0); 
    } 
    
    
    auto curLine = placeToDeclareVars;
    curLine++;
    u_int8_t curScope, lastScope;
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


        if(SKIP_ADDING_NEW_LINE)
            continue;
        

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
        
        auto newLine = code.emplace(curLine);
        newLine->contentPile = prefixes::get_template(word0, scope.funcs_available());
        fill_template(*newLine, curScope);
        
        
    } while (curLine != code.end());
}


void SourceCode::edit_some_lines() {
    for (auto & curLine : code) {
        
        if(SKIP_EDITING_LINE || curLine.words[0] == word0::SPECIAL) //places for vars and funcs == 0
            continue;
        
        u_int8_t mutationMask = randint(0, 15);
        mutate_line(curLine, mutationMask);
    }
    
    
}


SourceCode* SourceCode::give_birth() {
    auto *child = new SourceCode();
    child->deps = this->deps;
    child->scope = this->scope;
    
    int choice = randint(1, 3);

    //delete
    if (choice == 1) {
        child->copy_code_and_delete_some_lines(*this);
    }
    else {
        child->copy_code(*this);
    }
    
    // add
    if (choice == 2) {
        child->add_some_lines();
    }
    // edit
    if (choice == 3) {
        child->edit_some_lines();
    }
        
    return child;
}


char* SourceCode::render_text() {
    using namespace prefixes;
    
    char *codeTXT = new char[32 * code.size()];
    int c = 0;
    int indents;
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
        
        //curScope = line.scope;
        indents = line.indents; //scope.get_indent(curScope);
        //if (line.content.word0 <= 2)
            //indents--;
        
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
            goto FLUSH_BUFFER;
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

    FLUSH_BUFFER:
        c += sprintf(&codeTXT[c], word0::str[line.content.word0], args[0], args[1], args[2]);
        codeTXT[c++] = '\n';
    }
    
    codeTXT[c] = 0;
    
    return codeTXT;    
}


