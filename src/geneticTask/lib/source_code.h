#pragma once
#include "scope.h"
#include "dependencies.h"
#include "line.h"

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
