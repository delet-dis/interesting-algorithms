#pragma once

#define SKIP_EDITING_LINE !randint(0, 2) 
#define SKIP_ADDING_NEW_LINE randint(0, 2)
#define DELETE_LINE randint(0, 5)

const int numOfGenerations = 10;
const int numOfRandParents = 100;
const int numOfEliteParents = 10;
const int numOfParents = numOfEliteParents + numOfRandParents;
const int fertility = 3000;
const int numOfChildren = numOfParents * fertility;
