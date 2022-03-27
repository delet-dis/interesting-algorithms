#include <algorithm>
#include <list>
#include "matrix.h"
#include "words.h"
#include "gentic_coefficients.h"
#include "source_code.h"
#include "utils.h"


Line::Line(){
    contentPile = 0;
}

bool Line::operator==(const Line other) const {
        return this->contentPile == other.contentPile;
}


int Line::compare(const Line other) const {
        int diff = 0;
        if(this->content.word0 != other.content.word0)
            return 4;
        diff += this->content.word1 != other.content.word1;
        diff += this->content.word2 != other.content.word2;
        diff += this->content.word3 != other.content.word3;
        return diff;
}


    
int SourceCode::edit_distance(const SourceCode other) const {
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
            t[i][j] = std::min(t[i][j], t[i-1][j-1] + iter1->compare(*iter2));
        }
    }
    
    return t[i][j];
}


SourceCode* SourceCode::give_birth() {
    SourceCode *child = new SourceCode();
    child->deps = this->deps;
    int choise = randint(0, 7);
    
    bool codeCopied = false;
    int deletedID[3][32]; //scope / var / func 
    // delete 
    if (choise & 1) {
        codeCopied = true;
        for (LinePtr line = code.begin(); line != code.end(); ++line){
            if(!deps.get_deps(*line) && randint(0, 1)){ //TODO: skip coeff
                if(line->content.word0 == word0::DEF ||
                   line->content.word0 == word0::FOR
                )
                    deletedID[0] 
            } 
            else
                child->code.push_back(*line); //TODO: line can be deleted
        }
    }
    
    // add
    if (choise & 2) {
        
    }
    // edit
    if (choise & 4) {
        //edit
    }
        
    //apply mutation
}


void SourceCode::add_line_mutation(LinePtr from, const u_int8_t word) {
    
    switch (word) {
        case word0::NEW_VAR :
            LinePtr declLine = code.emplace(scopesStarts[from->scope]);
            u_int8_t newVarID = scope.register_new_var();
            declLine->content.word1 |= prefixes::EX_VAR_CONST_FUNC;
            declLine->content.word1 |= newVarID;
            break;
        case word0::EX_VAR :
            break;
        case word0::DEF :
        case word0::IF :
        case word0::PRINT :
        case word0::INPUT :
        case word0::FOR :
    }
}

