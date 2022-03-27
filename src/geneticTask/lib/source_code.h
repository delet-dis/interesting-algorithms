#pragma once

#include <list>
#include "words.h"
#include "scope.h"
#include "dependencies.h"

class Deps;

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
    Line();
    bool operator==(const Line other) const; 
    int compare(const Line other) const;
};


using LinePtr = std::list<Line>::iterator;


class SourceCode {
private:
    Scope scope;
    Deps deps;
    LinePtr placeToDeclareVars;
    LinePtr placeToDeclareFuncs;
    LinePtr mainStart;
    void add_line_mutation(LinePtr from, const u_int8_t word);
    void edit_mutation(SourceCode *child);
public:
    std::list<Line> code;
    
    int edit_distance(const SourceCode other) const; 
    SourceCode& operator=(const SourceCode other);
    SourceCode* give_birth();
};
