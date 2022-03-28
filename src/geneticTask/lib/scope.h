#pragma once
#include <sys/types.h>
#include "line.h"


class Bank {
public:
    union {
        u_int64_t allParams = 0;
        struct {
            u_int8_t repository[4];
            u_int8_t size;
        };
    };
    Bank();
    Bank(const Bank &other);
    u_int8_t get();
    void occupy(u_int8_t ID);
    u_int8_t operator[](const int pos);
    void free(u_int8_t ID);
};


class Scope {
private:
    struct node {
        u_int8_t parentScope;
        u_int8_t var;
        u_int8_t len;
    };
    
    
    Bank allVarsBank;
    node locals[32];
    Bank globalBank;
    Bank funcBank;
    Bank scopeBank;
    
public:
    Scope();
    Scope(const Scope &other);
    u_int8_t new_scope(u_int8_t prevID);  // return newScopeId
    u_int8_t new_global_var();
    u_int8_t new_func();
    u_int8_t get_prev_scope(u_int8_t curScopeID);
    u_int8_t get_rand_var(u_int8_t scopeID);
    u_int8_t get_rand_func();
    u_int8_t free(Line l);  // return parentScope
    
};
