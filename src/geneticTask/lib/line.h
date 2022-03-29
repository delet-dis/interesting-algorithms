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
    int used = 0;
    u_int8_t scope;
    
    union {
        raw_line content;
        int32_t contentPile;
    };
    Line() = default;
    bool operator==(const Line &other) const; 
    int difference(const Line &other) const;
};


using LinePtr = std::list<Line *>::iterator;
