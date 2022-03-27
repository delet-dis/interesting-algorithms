#include "scope.h"
#include <memory.h>
#include "utils.h"

u_int8_t Bank::get() {
    
    u_int8_t var, add = 0;
    for (var = 0; var < 4; var++)
        if(varsOccupied[var] != 255)
            break;
    while (!(varsOccupied[var] & (1 << add)))
        add++;
    varsOccupied[var] |= 1 << add;
    totalVars++;
    var *= 8;
    var += add;
    return var;
}

void Bank::free(u_int8_t varID) {
    totalVars--;
    varsOccupied[varID / 8] ^= 1 << (varID % 8);
}


/*Scope::Scope(const Scope &other) {
    memcpy(this->vars, other.vars, other.lastVar);
    memcpy(this->funcs, other.funcs, other.lastFunc);
    memcpy(this->locals, other.locals, sizeof locals);
    this->bank.all_params = other.bank.all_params;
    this->lastVar = other.lastVar;
    this->lastFunc = other.lastFunc;
}
*/

u_int8_t Scope::get_local(u_int8_t scopeID) {
    return local[scopeID].local;
}

u_int8_t Scope::new_scope(u_int8_t prevID ) {
    u_int8_t newScope = scopeBank.get();
    //TODO: FOR doesn't demand local var, but demands new scope
    u_int8_t var = varBank.get();
    u_int8_t newLen = local[prevID].len + 1;
    local[newScope] = {prevID, var, newLen};
    
    return newScope;
}


u_int8_t Scope::new_global_var() {
    int var = varBank.get();
    global[lastVar++] = var;
    return var;
}

u_int8_t Scope::new_func() {
    return funcBank.get();
}


u_int8_t Scope::get_rand_var(u_int8_t scopeID) {
    int choise = randint(-local[scopeID].len, lastVar-1);
    if (choise > 0)
        return global[choise];

    int ind = scopeID;
    while (++choise)  // TODO: it can go wrong
        ind = local[ind].parentInd;
    return local[ind].local;
}

u_int8_t Scope::get_rand_func() {
    int choise = randint(1, funcBank.totalVars);
    int func = 0, i = 0;
    while(i != choise){
        func++;
        if(funcBank.varsOccupied[func / 8] & (1 << (func % 8)))
            i++;
    }
    
    return func;
}


