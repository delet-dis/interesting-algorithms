#pragma once

template <typename T>
class Matrix {
private:
    T *data;
    
public:
    int cols;
    int rows;

    Matrix(const int columns, const int rows, const bool clear = false) {
        this->cols = columns;
        this->rows = rows;
        if(clear)
            this->data = new T[columns * rows]();
        else
            this->data = new T[columns * rows];
    }

    ~Matrix() {
        delete[] data;
    }

    T* operator[](const int pos) {
        return &data[pos * rows];
    }

};
