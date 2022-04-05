class Matrix {
    matrix: number[][] = []
    rowNumber: number
    columnNumber: number

    constructor(rowNumber: number, columnNumber: number) {
        this.rowNumber = rowNumber
        this.columnNumber = columnNumber

        for (let i = 0; i < rowNumber; i++) {
            this.matrix[i] = []
            for (let j = 0; j < columnNumber; j++) {
                this.matrix[i][j] = 0;
            }
        }
    }

    multiply(neuron: number[], matrix: number[]): number[] {
        for (let i = 0; i < this.rowNumber; i++) {
            let tempNumber = 0;

            for (let j = 0; j < this.columnNumber; j++) {
                tempNumber += this.matrix[i][j] * neuron[j];
            }

            matrix[i] = tempNumber
        }
        return matrix
    }

    static sumOfVectors(a: number[], b: number[], n: number): number[] {
        for (let i = 0; i < n; i++) {
            a[i] += b[i]
        }

        return a
    }

    random() {
        for (let i = 0; i < this.rowNumber; i++) {
            for (let j = 0; j < this.columnNumber; j++) {
                this.matrix[i][j] = ((Math.random() * 100) * 0.03 / (this.rowNumber + 35))
            }
        }
    }
}

export default Matrix
