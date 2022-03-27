#pragma once

class Bank {
public:
    union {
        u_int64_t all_params = 0;
        struct {
            u_int8_t vars_occupied[4];
            u_int8_t total_vars;
        };
    };
    
    u_int8_t get();
    void free(u_int8_t varID);
};


class Scope {
private:
    struct node {
        u_int8_t parentInd;
        u_int8_t local;
        u_int8_t len;
    };
    
    
    //TODO: vars + bank / local + bank
    node local[32];
    u_int8_t global[32];
    u_int8_t lastVar;
    u_int8_t lastFunc;
    Bank varBank;
    Bank funcBank;
    Bank scopeBank;
    
public:
    //TODO: free
    Scope(const Scope &other);
    u_int8_t get_local(u_int8_t scopeID); //TODO: нужна ли???
    u_int8_t new_scope(u_int8_t prevID); //return newScopeId
    u_int8_t new_global_var(); //var name / func /scope
    u_int8_t new_func();
    u_int8_t get_rand_var(u_int8_t scopeID);
    u_int8_t get_rand_func();
};
