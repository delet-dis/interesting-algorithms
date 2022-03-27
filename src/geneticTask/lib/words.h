#pragma once

namespace word0 {
    enum : u_int8_t {
        NEW_VAR,
        DEF,
        EX_VAR,
        IF,
        PRINT,
        INPUT,
        FOR
    };
}

namespace prefixes{
    const u_int8_t prefix_mask = 0b11100000;
    const u_int8_t value_mask = 0b00011111;
    
    enum : u_int8_t {
        EX_VAR = 0b00000000,
        CONST = 0b00100000,
        FUNC = 0b01000000,
        IMMUTABLE = 0b01100000,
        OPERATOR = 0b10000000,
        COMP_OPERATOR = 0b10100000,
    };
}

namespace operators {
    enum : u_int8_t {
        PLUS,
        MINUS,
    };
}

namespace compare_operators {
    enum : unsigned char {
        G,
        L,
        E,
        GE,
        LE,
    };
    
}
