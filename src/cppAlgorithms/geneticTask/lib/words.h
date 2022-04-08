#pragma once
#include <sys/types.h>

namespace word0 {
    enum : u_int8_t {
        /* do NOT change the order*/
        DEF,
        FOR,
        IF,
        NEW_VAR,
        ARITHMETIC,
        ASSIGN,
        PRINT,
        INPUT,
        SPECIAL
    };
    
    const int last = INPUT;
    
    static const char* str[8] = {
        "def %s(%s):",
        "for %s in range(%s):",
        "if %s %s %s:",
        "%s = %s",
        "%s %s %s",
        "%s = %s", // or func()
        "print(%s)",
        "%s = int(input())"
    };
}

namespace prefixes{
    const u_int8_t prefixMask = 0b11100000;
    const u_int8_t valueMask  = 0b00011111;
    
    enum : u_int8_t {
        NOTHING             = 0b00000000,
        FUNC                = 0b00100000,
        EX_VAR              = 0b01000000,
        CONST               = 0b01100000,
        EX_VAR_EXCEPT_LOCAL = 0b10000000,
        OPERATOR            = 0b10100000,
        COMP_OPERATOR       = 0b11000000,
        IMMUTABLE           = 0b11100000,
    };
    
    const u_int8_t minDiff = 0b00100000;
    
    struct prefTemplate{
        u_int8_t startPrefix;
        u_int8_t availableSteps;
    };
    
    static const prefTemplate templates[8][3] = {
        {{IMMUTABLE, 0}, {IMMUTABLE,           0}, {EX_VAR_EXCEPT_LOCAL,  0}},  //DEF
        {{IMMUTABLE, 0}, {EX_VAR_EXCEPT_LOCAL, 1}, {NOTHING,              0}},  //FOR  
        {{EX_VAR,    0}, {COMP_OPERATOR,       0}, {CONST,                1}},  //IF
        {{IMMUTABLE, 0}, {CONST,               0}, {NOTHING,              0}},  //NEW_VAR
        {{EX_VAR,    0}, {OPERATOR,            0}, {CONST,                1}},  //ARITHMETIC
        {{EX_VAR,    0}, {CONST,               2}, {NOTHING,              0}},  //ASSIGN  third needs to additional check
        {{EX_VAR,    0}, {NOTHING,             0}, {NOTHING,              0}},  //PRINT 
        {{EX_VAR,    0}, {NOTHING,             0}, {NOTHING,              0}},  //INPUT
    };
    
    int32_t get_template(u_int8_t word0, bool funcAvailable = false);
}

namespace operators {
    enum : u_int8_t {
        PLUS,
        MINUS,
        DIVIDE,
        MULTIPLY
    };
    
    const int last = MULTIPLY;
    
    static const char *str[4] = {
        "+=",
        "-=",
        "/=",
        "*="
    };
    
    
}

namespace compare_operators {
    enum : u_int8_t {
        G,
        L,
        E,
        GE,
        LE
    };
    
    const int last = LE;
    
    static const char *str[5] = {
        ">",
        "<",
        "==",
        ">=",
        "<=",
    };
    
}




