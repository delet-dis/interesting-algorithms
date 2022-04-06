#include "Network.h"
#include <chrono>
struct data_info {
	double* pixels;
	int digit;
};
data_Network ReadDataNetwork() {
	data_Network data;
	data.L = 3;
	data.size = new int[3];
	data.size[0] = 784;
	data.size[1] = 256;
	data.size[2] = 10;
	return data;
}
data_info* ReadData(string path,string path1, const data_Network& data_NW, int& examples) {
	data_info* data;
	ifstream fin;
	fin.open(path);
	if (!fin.is_open()) {
		cout << "Error reading the file" << path << endl;
	}
	else
		cout << path << " loading... \n";
	string tmp;
	fin >> tmp;
		if (tmp == "Examples") {
			int i = 0;
			fin >> examples;
			cout << "Examples:" << examples << endl;
			data = new data_info[examples];
			for (int i = 0; i < examples; ++i)
				data[i].pixels = new double[data_NW.size[0]];

			while (fin >> data[i].digit) {
				for (int j = 0; j < data_NW.size[0]; ++j) {
					fin >> data[i].pixels[j];
				}
				i++;
			}
			fin.close();
			fin.open(path1);
			while (fin >> data[i].digit) {
				for (int j = 0; j < data_NW.size[0]; ++j) {
					fin >> data[i].pixels[j];
				}
				i++;
			}
			fin.close();
			cout << "lib_MNIST loaded... \n";
			return data;
		}
		else {
			cout << "Error loading: " << path << endl;
			fin.close();
			return nullptr;
		}
}
int main() {
	Network NW{};
	data_Network NW_config;
	data_info* data;
	double ra = 0, right, predict, maxra = 0;
	int epoch = 0;
	bool study, repeat = true;
	chrono::duration<double> time;
	NW_config = ReadDataNetwork();
	NW.Init(NW_config);
	NW.PrintConfig();
	while (repeat) {
		epoch = 0;
		cout << "STUDY? (1/0)" << endl;
		cin >> study;
		if (study) {
			int examples;
			data = ReadData("lib_MNIST_edit (2).txt", "lib_MNIST_edit (1).txt", NW_config, examples);
			auto begin = chrono::steady_clock::now();
			while (ra / examples * 100 < 100) {
				ra = 0;
				auto t1 = chrono::steady_clock::now();
				for (int i = 0; i < examples; ++i) {
					NW.SetInput(data[i].pixels);
					right = data[i].digit;
					predict = NW.ForwardFeed();
					if (predict != right) {
						NW.BackPropogation(right);
						NW.WeightUpdater(0.15 * exp(-epoch / 20.));
					}
					else
						ra++;
				}
				auto t2 = chrono::steady_clock::now();
				time = t2 - t1;
				if (ra > maxra) maxra = ra;
				cout << "ra:" << ra / examples * 100 << "\t" << "maxra: "<<maxra / examples * 100<<endl;
				epoch++;
				if (epoch == 200)
					break;
			}
			auto end = chrono::steady_clock::now();
			time = end - begin;
			cout << "TIME: " << time.count() / 60. << "min" << endl;
			NW.SaveWeights();
		}
		else {
			NW.ReadWeights();
		}
		cout << "Test? (1/0)\n";
		bool test_flag;
		cin >> test_flag;
		if (test_flag) {
			int ex_tests;
			data_info* data_test;
			data_test = ReadData("lib_MNIST_edit (2).txt", "lib_MNIST_edit (1).txt", NW_config, ex_tests);
			ra = 0;
			for (int i = 0; i < ex_tests; ++i) {
				NW.SetInput(data_test[i].pixels);
				predict = NW.ForwardFeed();
				right = data_test[i].digit;
				if (right == predict)
					ra++;
			}
			cout << "RA: " << ra / ex_tests * 100 << endl;
		}
	}
	return 0;
}