#pragma once
#include "source_code.h"

class Line;

enum struct dep_type : u_int8_t {
    SCOPE,
    FUNC,
    VAR,
};

class Deps {
private:
    u_int8_t vars[32];
    u_int8_t funcs[32];
    u_int8_t scopes[32];
    
public:
    Deps();
    Deps(const Deps &other);
    void inc_deps(const u_int8_t ID, dep_type type);
    void dec_deps(const u_int8_t ID, dep_type type);
    int get_deps(const Line l) const;
};

