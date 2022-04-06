#pragma once
#include "scope.h"
#include "dependencies.h"
#include "line.h"
#include "matrix.h"



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
    
    struct edit_distance_result {
        u_int16_t remove_i;
        u_int16_t add_j;
        u_int16_t replace_i_j;
    };
    
    int count_current_scope_lines(LinePtrConst &iter, LinePtrConst end) const;
    edit_distance_result recursive_edit_distance(const SourceCode &other, LinePtrConst &iter1, LinePtrConst &iter2,  Matrix<int> &t, int matrixFreeSpace, int indentsLevel1, int indentsLevel2) const;
    
public:
    std::list<Line> code;
    
    SourceCode();
    void set_const_code(const_line *begin, const_line *end);
    int edit_distance(const SourceCode &other) const;
    SourceCode* give_birth();
    char* render_text();
};
