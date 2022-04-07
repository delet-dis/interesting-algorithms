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
    
    if(this->words[0] != other.words[0])
       return 8;
    
    if((this->words[1] & prefixes::IMMUTABLE) == prefixes::IMMUTABLE &&
        (this->words[1] != other.words[1]))
        return 8;
    if((this->words[2] & prefixes::IMMUTABLE) == prefixes::IMMUTABLE &&
        (this->words[2] != other.words[2]))
        return 8;
    
    diff += this->words[1] != other.words[1];
    diff += this->words[2] != other.words[2];
    diff += this->words[3] != other.words[3];
    return diff;
}


