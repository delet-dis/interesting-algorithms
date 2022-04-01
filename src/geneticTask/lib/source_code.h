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
    void copy_code(const SourceCode &src);
    void fill_template(Line &line,  u_int8_t curScope);
    void mutate_line(Line &line, u_int8_t wordsMask);
    void copy_code_and_delete_some_lines(const SourceCode &parent);
    void add_some_lines();
    void edit_some_lines();
    
public:
    std::list<Line> code;
    
    SourceCode();
    int edit_distance(const SourceCode &other) const;     
    SourceCode* give_birth();
    char* render_text();
};
