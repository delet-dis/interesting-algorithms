#include "utils.h"
#include <stdlib.h>

int randint(int first, int last) {
    return rand() % (last - first) + first;
}
