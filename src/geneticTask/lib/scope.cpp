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
    while (!(repository[ID] & (1 << add)))
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
    repository[ID / 8] |= 1 << (ID % 8);
}


u_int8_t Bank::operator[](const int pos) {
    int element = 0, curPos = -1;
    while(curPos != pos){
        element++;
        if(repository[element / 8] & (1 << (element % 8)))
            curPos++;
    }
    
    return element;
}


Bank::Bank(const Bank& other) {
    this->allParams = other.allParams;
}



/* Scope methods declaration */

Scope::Scope(const Scope &other) {
    memcpy(this->locals, other.locals, sizeof locals);
    this->allVarsBank = other.allVarsBank;
    this->globalBank = other.globalBank;
    this->funcBank = other.funcBank;
    this->scopeBank = other.scopeBank;
}


u_int8_t Scope::new_scope(u_int8_t prevID ) {
    u_int8_t newScope = scopeBank.get();
    //TODO: IF doesn't demand local var, but demands new scope
    u_int8_t var = allVarsBank.get();
    u_int8_t newLen = locals[prevID].len + 1;
    locals[newScope] = {prevID, var, newLen};
    
    return newScope;
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
    if(!curScopeID)
        return 0;
    return locals[curScopeID].parentScope;
}

u_int8_t Scope::get_rand_var(u_int8_t scopeID) {
    int choise = randint(-locals[scopeID].len, globalBank.size-1);
    if (choise >= 0)
        return globalBank[choise];

    int ind = scopeID;
    while (++choise)  // TODO: it can go wrong
        ind = locals[ind].parentScope;
    return locals[ind].var;
}

u_int8_t Scope::get_rand_func() {
    int choise = randint(0, funcBank.size - 1);
    return funcBank[choise];
}

u_int8_t Scope::free(const Line *l) {
    u_int8_t var, func;
    
    switch (l->content.word0) {
        case word0::NEW_VAR:
            var = l->content.word1 & prefixes::value_mask;
            globalBank.free(var);
            allVarsBank.free(var);
            break;
            
        case word0::DEF:
            func = l->content.word1 & prefixes::value_mask;
            var = l->content.word2 & prefixes::value_mask;
            funcBank.free(func);
            allVarsBank.free(var);
            scopeBank.free(l->scope);
            break;
            
        case word0::IF:
            var = locals[l->scope].var;
            allVarsBank.free(var);
            scopeBank.free(l->scope);
            break;
        
        case word0::FOR:
            var = l->content.word1 & prefixes::value_mask;
            allVarsBank.free(var);
            scopeBank.free(l->scope);
            break;
    }
    
    return locals[l->scope].parentScope;
}
