#pragma once
#include "scope.h"
#include "dependencies.h"
#include "line.h"

class SourceCode {
private:
    Scope scope;
    Deps deps;
    LinePtr placeToDeclareVars; // blank line
    LinePtr placeToDeclareFuncs; // blank line

public:
    int mainCodeSize;
    std::list<Line *> code;
    
    SourceCode();
    ~SourceCode();
    int edit_distance(const SourceCode &other) const;     
    void copy_code(SourceCode &other);
    SourceCode* give_birth();
};
