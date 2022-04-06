#pragma once
const int numOfGenerations = 50000;
const int numOfFreshParents = 0;
const int numOfRandParents = 10;
const int numOfEliteParents = 3;
const int numOfParents = numOfEliteParents + numOfRandParents + numOfFreshParents;
const int fertility = 70;
const int numOfChildren = numOfParents * fertility;

#define SKIP_EDITING_LINE randint(0, 7) 
#define CHANGE_PREFIX randint(0, 1)

#define SKIP_ADDING_NEW_LINE randint(0, 8)
#define NEW_FUNC_CHANCE !randint(0, 2)
#define NEW_VAR_CHANCE !randint(0, 2)

#define DELETE_LINE !randint(0, 8)
