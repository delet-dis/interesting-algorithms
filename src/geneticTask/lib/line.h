#pragma once
#include <list>
#include <sys/types.h>

struct raw_line {
    u_int8_t word0;
    u_int8_t word1;
    u_int8_t word2;
    u_int8_t word3;
};


class Line {
public:
    u_int8_t scope = 0;
    
    union {
        raw_line content;
        u_int8_t words[4];
        int32_t contentPile = 0;
    };
    Line() = default;
    Line(const Line &other);
    bool operator==(const Line &other) const; 
    int difference(const Line &other) const;
};


using LinePtr = std::list<Line>::iterator;
using LinePtrConst = std::list<Line>::const_iterator;
