#pragma once

#define SKIP_EDITING_LINE !randint(0, 1) 
#define SKIP_ADDING_NEW_LINE !randint(0, 3)
#define DELETE_LINE randint(0, 3)

const int numOfGenerations = 1000;
const int numOfRandParents = 5;
const int numOfEliteParents = 10;
const int numOfParents = numOfEliteParents + numOfRandParents;
const int fertility = 100;
const int numOfChildren = numOfParents * fertility;
