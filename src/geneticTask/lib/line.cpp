#include "line.h"
#include "words.h"


Line::Line(const Line& other) {
    this->scope = other.scope;
    this->contentPile = other.contentPile;
}

bool Line::operator==(const Line &other) const {
    return this->contentPile == other.contentPile;
}


int Line::difference(const Line &other) const {
    int diff = 0;
    if(this->content.word0 != other.content.word0){
        if(this->content.word0 == word0::DEF || other.content.word0 == word0::DEF )
            return 10;
        return 4;
    }
    diff += this->content.word1 != other.content.word1;
    diff += this->content.word2 != other.content.word2;
    diff += this->content.word3 != other.content.word3;
    return diff;
}

