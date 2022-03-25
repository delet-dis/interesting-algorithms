#ifndef WORDS_H
#define WORDS_H

enum struct word0: unsigned char {
    NEW_VAR,
    EX_VAR,
    DEF,
    IF,
    PRINT,
    INPUT,
    FOR
};

enum struct prefixes: unsigned char {
    EX_VAR,
    CONST,
    FUNC,
    IMMUTABLE,
    OPERATOR,
    COMP_OPERATOR,
};

enum struct operators: unsigned char {
    PLUSE,
    MINUS,
};

enum struct compare_operators: unsigned char {
    G,
    L,
    E,
    GE,
    LE,
};

#endif
