#include "words.h"
#include "utils.h"

int32_t prefixes::get_template(const u_int8_t word0, bool noFuncs) {
    union {
        u_int8_t words[4];
        int32_t content = 0;
    };
    words[0] = word0;
    for (int i = 0; i < 3; i++) {
        prefTemplate curTemplate = templates[word0][i];
        words[i + 1] = curTemplate.startPrefix - minDiff * randint(0, (int)curTemplate.availableSteps); 
    }
    
    if(word0 == word0::ASSIGN && words[2] == FUNC) {
        if(noFuncs)
            words[2] += minDiff * randint(1, 2);
        else 
            words[3] = EX_VAR;
    }    
    
    return content;
}
