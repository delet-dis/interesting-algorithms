#include "matrix.h"

template <typename T>
Matrix<T>::Matrix(const int columns, const int rows, const bool clear) {
    this->cols = columns;
    this->rows = rows;
    if(clear)
        this->data = new T[columns * rows]();
    else
        this->data = new T[columns * rows];
}

template <typename T>
Matrix<T>::~Matrix() {
    delete [] data;
}

template<typename T>
T* Matrix<T>::operator[](const int pos) {
    return &data[pos * cols];
};
