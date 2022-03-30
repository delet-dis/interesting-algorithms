#include "utils.h"
#include <stdlib.h>

int randint(int first, int last) {
    //TODO: if first == last
    return rand() % (last - first) + first;
}
