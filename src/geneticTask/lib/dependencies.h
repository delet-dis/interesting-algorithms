#pragma once
#include "line.h"

class Deps {
public:
    u_int8_t vars[32];
    u_int8_t funcs[32];
    u_int8_t scopes[32];
    Deps() = default;
    Deps(const Deps &other);
    int get_deps(const Line &l) const;
    void free(const Line &l, const u_int8_t scope);
};

