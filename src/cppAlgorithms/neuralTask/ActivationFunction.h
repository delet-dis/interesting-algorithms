#pragma once

#include <iostream>

enum activateFunc {
    sigmoid = 1, ReLu, thx
};

class ActivationFunction {
    activateFunc actFunc;
public:
    static void use(double *value, int n);

    void useDer(double *value, int n);

    double useDer(double value);
};

