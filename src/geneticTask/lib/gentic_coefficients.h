#pragma once

#define SKIP_EDITING_LINE randint(0, 7) 
#define SKIP_ADDING_NEW_LINE randint(0, 7)
#define DELETE_LINE !randint(0, 7)

const int numOfGenerations = 5000;
const int numOfRandParents = 20;
const int numOfEliteParents = 5;
const int numOfParents = numOfEliteParents + numOfRandParents;
const int fertility = 100;
const int numOfChildren = numOfParents * fertility;
