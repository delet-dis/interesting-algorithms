#include "Network.h"

void Network::Init(data_Network data) {
    srand(time(nullptr));
    L = data.L;
    size = new int[L];
    for (int i = 0; i < L; i++) {
        size[i] = data.size[i];
    }
    weights = new Matrix[L - 1];
    bios = new double *[L - 1];
    for (int i = 0; i < L - 1; i++) {
        weights[i].Init(size[i + 1], size[i]);
        bios[i] = new double[size[i + 1]];
        weights[i].Rand();
        for (int j = 0; j < size[i + 1]; j++) {
            bios[i][j] = ((rand() % 50)) * 0.06 / (size[i] + 15);
        }
    }
    neurons_val = new double *[L];
    neurons_err = new double *[L];
    for (int i = 0; i < L; i++) {
        neurons_val[i] = new double[size[i]];
        neurons_err[i] = new double[size[i]];
    }
    neurons_bios_val = new double[L - 1];
    for (int i = 0; i < L; i++)
        neurons_bios_val[i] = 1;
}

void Network::PrintConfig() {
    cout << "***************************************\n";
    cout << "Layers" << L;
    for (int i = 0; i < L; i++)
        cout << size[i] << " ";
    cout << "\n***************************************\n\n";
}

void Network::SetInput(const double *values) {
    for (int i = 0; i < size[0]; i++) {
        neurons_val[0][i] = values[i];
    }
}

double Network::ForwardFeed() {
    for (int k = 1; k < L; ++k) {
        Matrix::Multiply(weights[k - 1], neurons_val[k - 1], size[k - 1], neurons_val[k]);
        Matrix::SumVector(neurons_val[k], bios[k - 1], size[k]);
        actFunc.use(neurons_val[k], size[k]);
    }
    int pred = SearchMaxIndex(neurons_val[L - 1]);
    return pred;
}

int Network::SearchMaxIndex(const double *value) {
    double max = value[0];
    int prediction = 0;
    double tmp;
    for (int i = 0; i < size[L - 1]; i++) {
        tmp = value[i];
        if (tmp > max) {
            prediction = i;
            max = tmp;
        }
    }
    return prediction;
}

void Network::PrintValues(int L) {
    for (int j = 0; j < size[L]; j++) {
        cout << j << " " << neurons_val[L][j] << endl;
    }
}

void Network::BackPropogation(double expect) {
    for (int i = 0; i < size[L - 1]; i++) {
        if (i != int(expect))
            neurons_err[L - 1][i] = -neurons_val[L - 1][i] * actFunc.useDer(neurons_val[L - 1][i]);
        else
            neurons_err[L - 1][i] = (1.0 - neurons_val[L - 1][i]) * actFunc.useDer(neurons_val[L - 1][i]);
    }
    for (int k = L - 2; k > 0; k--) {
        Matrix::Multiply_T(weights[k], neurons_err[k + 1], size[k + 1], neurons_err[k]);
        for (int j = 0; j < size[k]; j++)
            neurons_err[k][j] *= actFunc.useDer(neurons_val[k][j]);
    }
}

void Network::WeightUpdater(double lr) {
    for (int i = 0; i < L - 1; ++i) {
        for (int j = 0; j < size[i + 1]; ++j) {
            for (int k = 0; k < size[i]; ++k) {
                weights[i](j, k) += neurons_val[i][k] * neurons_err[i + 1][j] * lr;
            }
        }
    }
    for (int i = 0; i < L - 1; i++) {
        for (int k = 0; k < size[i + 1]; k++) {
            bios[i][k] += neurons_err[i + 1][k] * lr;
        }
    }
}

void Network::SaveWeights() {
    ofstream fout;
    fout.open("weights1.txt");
    if (!fout.is_open()) {
        cout << "Error reading the file";
        system("pause");
    }
    for (int i = 0; i < L - 1; ++i)
        fout << weights[i] << " ";

    for (int i = 0; i < L - 1; ++i) {
        for (int j = 0; j < size[i + 1]; ++j) {
            fout << bios[i][j] << " ";
        }
    }
    fout.close();
}

void Network::ReadWeights() {
    ifstream fin;
    fin.open("weights1.txt");
    if (!fin.is_open()) {
        cout << "Error reading file";
        system("pause");
    }
    for (int i = 0; i < L - 1; ++i)
        fin >> weights[i];
    for (int i = 0; i < L - 1; ++i) {
        for (int j = 0; j < size[i + 1]; ++j) {
            fin >> bios[i][j];
        }
    }
    cout << "Weights reader \n";
    fin.close();
}