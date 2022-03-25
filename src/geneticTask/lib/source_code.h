#ifndef SOURCE_CODE_H
#define SOURCE_CODE_H

#include <algorithm>
#include <list>


struct raw_line {
    u_int8_t word0;
    u_int8_t word1;
    u_int8_t word2;
    u_int8_t word3;
};


class Line {
public: 
    u_int8_t scope;
    
    union {
        raw_line content;
        int32_t contentPile;
    };
    
    bool operator==(const Line other) const; 
    int compare(const Line other) const;
};


class SourceCode {
public:
    std::list<Line> code;
    
    int edit_distance(const SourceCode other) const; 
    SourceCode& operator=(const SourceCode other);
};

#endif
