#include <memory.h>
#include "words.h"
#include "dependencies.h"
#include "source_code.h"

Deps::Deps(const Deps &other) {
    memcpy(this->vars, other.vars, sizeof vars);
    memcpy(this->funcs, other.funcs, sizeof funcs);
    memcpy(this->scopes, other.scopes, sizeof scopes);
}


int Deps::get_deps(const Line *l) const {
    if (l->content.word0 > 3)
        return 0;
    
    int ID;
    int deps = 0;

    deps += scopes[l->scope]; //scope
    
    if(l->content.word0 <= word0::FOR) {
        
        if(l->content.word0 == word0::DEF){  // func
            ID = l->content.word1 & prefixes::valueMask;
            deps += funcs[ID];
            ID = l->content.word2 & prefixes::valueMask;
        }  
        else
            ID = l->content.word1 & prefixes::valueMask;
        
        deps += vars[ID];  // var
    }
    
    return deps;
}

void Deps::free(const Line* l, const u_int8_t scope) {
    scopes[scope]--;
    
    for (int i = 1; i < 4; i++) {
        u_int8_t prefix = l->words[i] & prefixes::prefixMask;
        u_int8_t value = l->words[i] & prefixes::valueMask;
        
        if (prefix == prefixes::EX_VAR)
            vars[value]--;
        else if (prefix == prefixes::FUNC) 
            funcs[value]--;
    }
}





