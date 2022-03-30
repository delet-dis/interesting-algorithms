#pragma once
#include <sys/types.h>

namespace word0 {
    enum : u_int8_t {
        /* do NOT change the order*/
        NEW_VAR,
        DEF,
        FOR,
        IF,
        EX_VAR,
        PRINT,
        INPUT
    };
}

namespace prefixes{
    const u_int8_t prefix_mask = 0b11100000;
    const u_int8_t value_mask  = 0b00011111;
    
    enum : u_int8_t {
        NOTHING         = 0b00000000,
        EX_VAR          = 0b00100000,
        CONST           = 0b01000000,
        FUNC            = 0b01100000,
        IMMUTABLE       = 0b10000000,
        OPERATOR        = 0b10100000,
        COMP_OPERATOR   = 0b11000000,
    };
    
    const u_int8_t minDiff = 0b00100000;
    
    struct prefTemplate{
        u_int8_t startPrefix;
        u_int8_t availableSteps;
    };
    
    const prefTemplate templates[7][3] = {
        {{IMMUTABLE, 0}, {CONST,         0}, {NOTHING, 0}},  //NEW_VAR
        {{IMMUTABLE, 0}, {IMMUTABLE,     0}, {EX_VAR,  0}},  //DEF
        {{IMMUTABLE, 0}, {CONST,         1}, {NOTHING, 0}},  //FOR  
        {{EX_VAR,    0}, {COMP_OPERATOR, 0}, {CONST,   1}},  //IF
        {{OPERATOR,  0}, {FUNC,          2}, {EX_VAR,  1}},  //EX_VAR third needs to additional check
        {{EX_VAR,    0}, {NOTHING,       0}, {NOTHING, 0}},  //PRINT 
        {{EX_VAR,    0}, {NOTHING,       0}, {NOTHING, 0}},  //INPUT
    };
    
    int32_t get_template(const u_int8_t word0);
}

namespace operators {
    enum : u_int8_t {
        PLUS,
        MINUS,
    };
}

namespace compare_operators {
    enum : u_int8_t {
        G,
        L,
        E,
        GE,
        LE,
    };
    
}


