#include "line.h"

Line::Line(){
    contentPile = 0;
}

bool Line::operator==(const Line other) const {
        return this->contentPile == other.contentPile;
}


int Line::difference(const Line other) const {
        int diff = 0;
        if(this->content.word0 != other.content.word0)
            return 4;
        diff += this->content.word1 != other.content.word1;
        diff += this->content.word2 != other.content.word2;
        diff += this->content.word3 != other.content.word3;
        return diff;
}

