#include "utils.h"
thread_local int __rand_seed;

unsigned int rand() {
    __rand_seed = (214013 * __rand_seed + 2531011); 
    return (__rand_seed >> 16) & 0x7FFF; 
}


int randint(int a, int b) {
    return rand() % (b - a + 1) + a;
}
