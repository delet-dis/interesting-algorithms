#pragma once
#include "line.h"

class Deps {
public:
    u_int16_t vars[32]{};
    u_int16_t funcs[32]{};
    u_int16_t scopes[32]{};
    Deps() = default;
    void zero_init();

    Deps(const Deps &other);
    int get_deps(const Line &l) const;
    void free(const Line &l, u_int8_t scope);
};

