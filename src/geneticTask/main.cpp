#include <cstdio>
#include <algorithm>
#include "lib/source_code.h"
#include <ctime>
#include <cstdlib>

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

struct individual {
    SourceCode *it;
    int fitness;
};

void sift(individual *arr, int pos, int len){
    int child = pos * 2 + 1;
    
    while(child < len){
        
        if(child + 1 < len && arr[child + 1].fitness < arr[child].fitness)
            child++;
        
        if(arr[pos].fitness > arr[child].fitness)
            std::swap(arr[pos], arr[child]);
        else //НЕ ФАКТ
            break;
        pos = child;
        child = pos * 2 + 1;
    }
}

void build_heap(individual *arr, int len) {
    for(int i = len / 2; i >= 0; i--)
        sift(arr, i, len);
}

individual* find_min(individual *arr, int len) {
    int min = INT32_MAX;
    individual *minInd;
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
    int seed = time(nullptr); //overflow 1648922503
    printf("seed: %d\n", seed);
    srand(seed);
    FILE *log = fopen("log.txt", "w");
    
    SourceCode fib;
    fib.set_const_code(fib_code, &fib_code[18]);
    
    const int numOfGenerations = 500;
    const int numOfParents = 7;
    const int fertility = 500;
    const int numOfChildren = numOfParents * fertility;
    
    individual parents[numOfParents];
    individual children[numOfChildren];
    
    for (auto & parent : parents){
        parent.it = new SourceCode();
        parent.fitness = 100;
    }
    for (auto & child : children)
        child.it = nullptr;
    
    for (int j = 0; j < numOfGenerations; j++) {
        for (int i = 0; i < numOfChildren; i++) {
            delete children[i].it;
            children[i].it = parents[i / fertility].it->give_birth();
            children[i].fitness = children[i].it->edit_distance(fib);
        }
        
        build_heap(children, numOfChildren);
        //int choise = 0;
        for (int i = 0; i < numOfParents; i++) {
            //build_heap(&children[fertility * i], fertility);
            //choise  = randint(0, 2);
            delete parents[i].it;
            parents[i].it = children[i].it;
            parents[i].fitness = children[i].fitness;
            children[i].it = nullptr;
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
