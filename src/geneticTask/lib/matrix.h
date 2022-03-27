#pragma once

template <typename T>
class Matrix {
private:
    T *data;
    
public:
    int cols;
    int rows;
    
    Matrix(const int columns, const int rows, const bool clear = false);
    
    ~Matrix();
    
    T* operator[](const int pos);
};
