#include "matrix.h"
#include "words.h"
#include "gentic_coefficients.h"
#include "utils.h"
#include "source_code.h"

SourceCode::~SourceCode() {
    for(auto line : code) {
        if(!line->used)
            delete line;
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

void SourceCode::copy_code(SourceCode &other) {
    LinePtr line;
    
    for (line = other.code.begin(); line != other.placeToDeclareVars; ++line) {
        this->code.insert(this->placeToDeclareVars, *line);
        (*line)->used++;
    }
    
    for (++line; line != other.placeToDeclareFuncs; ++line) {
        this->code.insert(this->placeToDeclareFuncs, *line);
        (*line)->used++;
    }
    
    for (++line; line != other.code.end(); ++line) {
        this->code.push_back(*line);
        (*line)->used++;
    }
        
    
}



SourceCode* SourceCode::give_birth() {
    SourceCode *child = new SourceCode();
    child->deps = this->deps;
    child->scope = this->scope;
    child->mainCodeSize = this->mainCodeSize;
    
    int choise = randint(0, 7);
    bool codeCopied = false;
    
    //delete
    if (choise & 1) {
        codeCopied = true;
        LinePtr placeToInsert = child->placeToDeclareVars;
        
        for (LinePtr line = code.begin(); line != code.end(); ++line){
            
            if(line == this->placeToDeclareVars) {
                placeToInsert = child->placeToDeclareFuncs;
                continue;
            }
            if(line == this->placeToDeclareVars) {
                placeToInsert = child->code.end();
                continue;
            }
                
            if (!child->deps.get_deps(*line) && randint(0, 1)) { //TODO: skip coeff
                if((*line)->content.word0 <= word0::IF) {
                    u_int8_t prevScope = child->scope.free(*line);
                    child->deps.free(*line, prevScope);
                }
                else 
                    child->deps.free(*line);
                
                child->mainCodeSize--;
            } 
            
            else {
                child->code.insert(placeToInsert, *line);
                (*line)->used++;
            }
        }
    }
    
    if(!codeCopied)
        child->copy_code(*this);
    
    // add
    if (choise & 2) {
        
    }
    // edit
    if (choise & 4) {
        
    }
        
    return child;
}

