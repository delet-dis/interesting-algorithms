#pragma once
static float radiation_start = 1;
static float radiation_finish = 7;
static int radiation = radiation_start;

const int numOfGenerations = 1000;
const int numOfRandParents = 30;
const int numOfEliteParents = 5;
const int numOfParents = numOfEliteParents + numOfRandParents;
const int fertility = 70;
const int numOfChildren = numOfParents * fertility;

#define SKIP_EDITING_LINE randint(0, 7) 
#define CHANGE_PREFIX randint(0, 1)
#define SKIP_ADDING_NEW_LINE randint(0, 7)
#define SKIP_ADDING_NEW_LINE_IN_FUNCTION true//(radiation >= 2)
#define DELETE_LINE !randint(0, 7)
