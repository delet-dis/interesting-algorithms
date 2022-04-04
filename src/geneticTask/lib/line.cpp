#include "line.h"
#include "words.h"


Line::Line(const Line& other) {
    this->scope = other.scope;
    this->indents = other.indents;
    this->contentPile = other.contentPile;
}

bool Line::operator==(const Line &other) const {
    return this->contentPile == other.contentPile && this->indents == other.indents;
}


int Line::difference(const Line &other) const {
    int diff = 0;
    
    if(this->content.word0 == word0::DEF && other.content.word0 == word0::DEF) {
        diff += 10 * (this->content.word1 != other.content.word1); 
        diff += 10 * (this->content.word2 != other.content.word2);
        diff += this->content.word3 != other.content.word3;
        return diff;
    }
    
    if(this->content.word0 != other.content.word0 || this->indents != other.indents)
        return 7;
    
    diff += this->content.word1 != other.content.word1;
    diff += this->content.word2 != other.content.word2;
    diff += this->content.word3 != other.content.word3;
    return diff;
}

