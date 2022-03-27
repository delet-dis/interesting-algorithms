#include <memory.h>
#include "dependencies.h"
#include "source_code.h"

Deps::Deps(const Deps &other) {
    memcpy(this->vars, other.vars, sizeof vars);
    memcpy(this->funcs, other.funcs, sizeof funcs);
    memcpy(this->scopes, other.scopes, sizeof scopes);
}

void Deps::inc_deps(const u_int8_t ID, dep_type type) {
    switch (type) {
        case dep_type::FUNC :
            funcs[ID]++;
            break;
        case dep_type::VAR :
            vars[ID]++;
            break;
        case dep_type::SCOPE :
            scopes[ID]++;
            break;
    }
}

void Deps::dec_deps(const u_int8_t ID, dep_type type) {
    switch (type) {
        case dep_type::FUNC :
            funcs[ID]--;
            break;
        case dep_type::VAR :
            vars[ID]--;
            break;
        case dep_type::SCOPE :
            scopes[ID]--;
            break;
    }
}

int Deps::get_deps(const Line l) const {
    if((l.content.word1 & prefixes::prefix_mask) != prefixes::IMMUTABLE && 
        l.content.word0 != word0::IF)
        return 0;
    
    int ID;
    int deps = 0;
    //TODO: scope check
    if(l.content.word0 == word0::DEF){
        ID = l.content.word1 & prefixes::value_mask;
        deps += funcs[ID];
        ID = l.content.word2 & prefixes::value_mask;
    } 
    else
       ID = l.content.word1 & prefixes::value_mask;
    
    deps += vars[ID];
    return deps;
}




