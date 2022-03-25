#include <algorithm>
#include <list>
#include "matrix.h"
#include "source_code.h"

using std::iterator;


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
