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
    void fill_template(Line *line,  u_int8_t curScope);
    void copy_code_and_delete_some_lines(const SourceCode &parent);
    void add_some_lines();
public:
    std::list<Line *> code;
    
    SourceCode();
    ~SourceCode();
    int edit_distance(const SourceCode &other) const;     
    void copy_code(const SourceCode &src);
    SourceCode* give_birth();
};
