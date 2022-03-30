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
    Bank() = default;
    Bank(const Bank &other);
    u_int8_t get();
    void occupy(u_int8_t ID);
    u_int8_t operator[](const int pos);
    void free(u_int8_t ID);
};




class Scope {
    
/*
 * scope can be changed ONLY by
 * word0 == FOR, NEW_VAR, DEF, IF
 * same: word0 <= 3
 * same: word0 <= word0::NEW_VAR
 */
    
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
    u_int8_t new_scope(u_int8_t prevID, bool demandsLocal);  // return newScopeId
    u_int8_t get_local(u_int8_t scopeID);
    u_int8_t new_global_var();
    u_int8_t new_func();
    u_int8_t get_prev_scope(u_int8_t curScopeID);
    u_int8_t get_rand_var(u_int8_t scopeID, bool excludeCurLocal = false);
    u_int8_t get_rand_func();
    u_int8_t free(const Line *l);  // return parentScope
    
};
