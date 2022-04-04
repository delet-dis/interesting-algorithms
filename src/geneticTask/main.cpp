#include <cstdio>
#include <algorithm>
#include <ctime>
#include <cstdint>
#include <thread>
#include "lib/source_code.h"
#include "lib/utils.h"
#include "lib/gentic_coefficients.h"


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

int numOfThreads;
std::thread **threads;


void sift(individual *arr, int pos, int len){
    int child = pos * 2 + 1;
    
    while(child < len){
        
        if(child + 1 < len && arr[child + 1].fitness < arr[child].fitness)
            child++;
        
        if(arr[pos].fitness > arr[child].fitness)
            std::swap(arr[pos], arr[child]);
        else
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
    std::srand(seed);
    //srand(seed);
    FILE *log = fopen("log.txt", "w");
    
    SourceCode fib;
    fib.set_const_code(fib_code, &fib_code[18]);
    
    individual parents[numOfParents];
    individual children[numOfChildren];
    
    for (auto & parent : parents){
        parent.it = new SourceCode();
        parent.fitness = 100;
    }
    for (auto & child : children)
        child.it = nullptr;
    
    for (int j = 0; j < numOfGenerations; j++) {
       //create_threads(children, parents, &fib);
       //join_threads();
        
        #pragma omp parallel
        {
            srand(std::rand());
            #pragma omp for
            for (int i = 0; i < numOfChildren; i++) {
                delete children[i].it;
                children[i].it = parents[i / fertility].it->give_birth();
                children[i].fitness = children[i].it->edit_distance(fib);
            }
        }
        
        build_heap(children, numOfChildren);

        int k;
        for (k = 0; k < numOfEliteParents; k++) {
            delete parents[k].it;
            parents[k].it = children[k].it;
            parents[k].fitness = children[k].fitness;
            children[k].it = nullptr;
        } 
        
        for (; k < numOfParents; k++) {
            int choice = 0;
            while(!children[choice].it)
                choice = randint(numOfEliteParents+1, numOfChildren-1);
            delete parents[k].it;
            parents[k].it = children[choice].it;
            parents[k].fitness = children[choice].fitness;
            children[choice].it = nullptr;
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
