#include <stdio.h>
#include <algorithm>
#include "lib/source_code.h"
#include <time.h>
#include "lib/utils.h"
#include <stdlib.h>
#include <random>

int fib_code[] = {
    6348803,
    6349059,
    6349571,
    0,
    1088610304,
    1640251906,
    4341765,
    1639989762,
    4342021,
    1637957892,
    1092632581,
    1637957892,
    1092632837,
    1101021188,
    0,
    17159,
    1126187781,
    17158
};

struct individ {
    SourceCode *it;
    int fitness;
};

void sift(individ *arr, int pos, int len){
    int chld = pos * 2 + 1;
    
    while(chld < len){
        
        if(chld + 1 < len && arr[chld+1].fitness < arr[chld].fitness)
            chld++;
        
        if(arr[pos].fitness > arr[chld].fitness)
            std::swap(arr[pos], arr[chld]);
        else //НЕ ФАКТ
            break;
        pos = chld;
        chld = pos * 2 + 1;
    }
}

void build_heap(individ *arr, int len) {
    for(int i = len / 2; i >= 0; i--)
        sift(arr, i, len);
}

individ* find_min(individ *arr, int len) {
    int min = INT32_MAX;
    individ *minInd;
    for(int i = 0; i < len; i++) {
        if(arr[i].fitness < min) {
            minInd = &arr[i];
            min = minInd->fitness;
        }
    }
    return minInd;
}

void print(SourceCode *src) {
    for (Line &i : src->code) {
        printf("%u %u %u %u\n", i.words[0], i.words[1], i.words[2], i.words[3]);
    }
    putchar('\n');
}



int main() {
    int seed = time(0); //overflow 1648922503
    printf("seed: %d\n", seed);
    srand(seed);
    FILE *log = fopen("log.txt", "w");
    
    SourceCode fib;
    fib.set_const_code(fib_code, &fib_code[18]);
    
    const int numOfGenerations = 500;
    const int numOfParents = 7;
    const int fertility = 500;
    const int numOFChilds = numOfParents * fertility;
    
    individ parents[numOfParents];
    individ childs[numOFChilds];
    
    for (int i = 0; i < numOfParents; i++){
        parents[i].it = new SourceCode();
        parents[i].fitness = 100;
    }
    for (int i = 0; i < numOFChilds; i++)
        childs[i].it = 0;
    
    for (int j = 0; j < numOfGenerations; j++) {
        for (int i = 0; i < numOFChilds; i++) {
            if (childs[i].it != 0)
                delete childs[i].it;
            childs[i].it = parents[i / fertility].it->give_birth();
            childs[i].fitness = childs[i].it->edit_distance(fib);
        }
        
        build_heap(childs, numOFChilds);
        //int choise = 0;
        for (int i = 0; i < numOfParents; i++) {
            //build_heap(&childs[fertility * i], fertility);
            //choise  = randint(0, 2);
            delete parents[i].it;
            parents[i].it = childs[i].it;
            parents[i].fitness = childs[i].fitness;
            childs[i].it = 0;
        }
        
        fprintf(log, "%d\n", parents[0].fitness);
    }
    char *text = parents[0].it->render_text();
    puts(text);
    printf("%d\n", parents[0].fitness);
    
    
    delete text;
    puts("\n\n");    
    fclose(log);
}
