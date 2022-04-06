#pragma once
const int numOfGenerations = 50000;
const int numOfFreshParents = 1;
const int numOfRandParents = 5;
const int numOfEliteParents = 3;
const int numOfParents = numOfEliteParents + numOfRandParents + numOfFreshParents;
const int fertility = 70;
const int numOfChildren = numOfParents * fertility;

#define SKIP_EDITING_LINE randint(0, 5) 
#define CHANGE_PREFIX randint(0, 1)

#define SKIP_ADDING_NEW_LINE randint(0, 4)
#define NEW_FUNC_CHANCE !randint(0, 2)
#define NEW_VAR_CHANCE !randint(0, 2)

#define SKIP_ADDING_NEW_LINE_IN_FUNCTION true//randint(0, 1)//true//(radiation >= 2)
#define DELETE_LINE !randint(0, 4)
