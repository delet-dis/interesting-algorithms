#include "ActivationFunction.h"
void ActivationFunction::set() {
	std::cout << "set actfunc: \n";
	int tmp;
	std::cin >> tmp;
	switch (tmp)
		actFunc = ReLu;
}
void ActivationFunction::use(double* value, int n) {
	for (int i = 0; i < n; i++) {
		if (value[i] < 0)
			value[i] *= 0.01;
		else if (value[i] > 1)
			value[i] = 1. + 0.01 * (value[i] - 1.);
		//else value = value;
	}
}
void ActivationFunction::useDer(double* value, int n) {

	for (int i = 0; i < n; i++) {
		if (value[i] < 0 || value[i] > 1)
			value[i] = 0.01;
		else
			value[i] = 1;
	}
}
double ActivationFunction::useDer(double value) {
	if (value < 0 || value > 1)
		value = 0.01;
	return value;
}