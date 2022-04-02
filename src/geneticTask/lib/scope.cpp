#include <memory.h>
#include "scope.h"
#include "utils.h"
#include "words.h"

/* Bank methods declaration */

u_int8_t Bank::get() {
    u_int8_t ID, add = 0;
    for (ID = 0; ID < 4; ID++)
        if(repository[ID] != 255)
            break;
    
    while (repository[ID] & (1 << add))
        add++;
    
    repository[ID] |= 1 << add;
    size++;
    ID *= 8;
    ID += add;
    return ID;
}

void Bank::free(u_int8_t ID) {
    size--;
    repository[ID / 8] ^= 1 << (ID % 8);
}

void Bank::occupy(u_int8_t ID) {
    this->repository[ID / 8] |= 1 << (ID % 8);
    this->size++;
}


u_int8_t Bank::operator[](const int pos) {
    int element = -1, curPos = -1;
    while(curPos != pos){
        element++;
        if(repository[element / 8] & (1 << (element % 8)))
            curPos++;
    }
    
    return element;
}

int Bank::free_available() {
    return 32 - size;
}



Bank::Bank(const Bank& other) {
    this->allParams = other.allParams;
}



/* Scope methods declaration */

Scope::Scope() {
    scopeBank.occupy(0);
    //allVarsBank.occupy(0); 
    locals[0].parentScope = 0;
    locals[0].var = noVar;
    locals[0].qOfVars = 0;
    locals[0].depth = 0;
    
}

Scope::Scope(const Scope &other) {
    memcpy(this->locals, other.locals, sizeof locals);
    this->allVarsBank = other.allVarsBank;
    this->globalBank = other.globalBank;
    this->funcBank = other.funcBank;
    this->scopeBank = other.scopeBank;
}


u_int8_t Scope::new_scope(u_int8_t prevID, bool demandsLocal) {
    u_int8_t var = noVar;
    u_int8_t qOfVars = locals[prevID].qOfVars;
    u_int8_t newScope = scopeBank.get();
    u_int8_t depth = locals[prevID].depth + 1;
    if(demandsLocal) {
        var = allVarsBank.get();
        qOfVars++;
    }
    locals[newScope] = {prevID, var, qOfVars, depth};
    
    return newScope;
}

u_int8_t Scope::get_local(u_int8_t scopeID) {
    return locals[scopeID].var;
}

u_int8_t Scope::new_global_var() {
    u_int8_t var = allVarsBank.get();
    globalBank.occupy(var);
    return var;
}

u_int8_t Scope::new_func() {
    return funcBank.get();
}

u_int8_t Scope::get_prev_scope(u_int8_t curScopeID) {
    return locals[curScopeID].parentScope;
}

u_int8_t Scope::get_rand_prev_scope(u_int8_t curScopeID, u_int8_t nextScopeID) {
    int range = locals[curScopeID].depth - locals[nextScopeID].depth;
    int choise = randint(0, range);
    int scope = curScopeID;
    for (int i = 0; i < choise; i++)
        scope = locals[scope].parentScope;
    return scope;
}


u_int8_t Scope::get_rand_var(u_int8_t scopeID, bool excludeCurLocal) {
    int choise = randint(-locals[scopeID].qOfVars, globalBank.size-1);
    int ind = scopeID;

    if(excludeCurLocal) {
        choise++;
        ind = locals[ind].parentScope;
    }
    
    if (choise >= 0)
        return globalBank[choise];
    
    choise += locals[ind].var != noVar;
    while (choise) {  // TODO: it can go wrong
        ind = locals[ind].parentScope;
        choise += locals[ind].var != noVar;
    }
    return locals[ind].var;

}
u_int8_t Scope::get_rand_func() {
    int choise = randint(0, funcBank.size - 1);
    return funcBank[choise];
}

bool Scope::func_available() {
    return funcBank.size;
}

bool Scope::global_var_available() {
    return globalBank.size;
}

int Scope::free_scopes_available() {
    return scopeBank.free_available();
}

int Scope::free_funcs_available() {
    return funcBank.free_available();
}

int Scope::free_vars_available() {
    return allVarsBank.free_available();
}

u_int8_t Scope::free(const Line &l) {
    u_int8_t var, func;
    
    switch (l.content.word0) {
        case word0::NEW_VAR:
            var = l.content.word1 & prefixes::valueMask;
            globalBank.free(var);
            allVarsBank.free(var);
            break;
            
        case word0::DEF:
            func = l.content.word1 & prefixes::valueMask;
            var = l.content.word2 & prefixes::valueMask;
            funcBank.free(func);
            allVarsBank.free(var);
            scopeBank.free(l.scope);
            break;
            
        case word0::IF:
            scopeBank.free(l.scope);
            break;
        
        case word0::FOR:
            var = l.content.word1 & prefixes::valueMask;
            allVarsBank.free(var);
            scopeBank.free(l.scope);
            break;
    }
    
    return locals[l.scope].parentScope;
}

int Scope::get_indent(u_int8_t scopeID) {
    return locals[scopeID].depth;
}

