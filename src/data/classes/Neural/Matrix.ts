class Matrix{
    matrix:number[][]
    row:number
    col:number
    constructor(row:number, col:number) {
        this.row=row
        this.col=col
        this.matrix=[]
        for(let i=0;i<row;i++) {
            this.matrix[i] = []
            for (let j = 0; j < col; j++) {
                this.matrix[i][j] = 0;
            }
        }
    }
    Multiply(neuron:number[],n:number,c:number[]):number[]{
        for(let i=0;i<this.row;i++){
            let tmp=0;
            for (let j=0;j<this.col;j++){
                tmp+=this.matrix[i][j]*neuron[j];
            }
            c[i]=tmp
        }
        return c
    }
    static SumVector(a:number[], b:number[], n:number):number[]{
        for(let i=0;i<n;i++)
            a[i]+=b[i]
        return a
    }
    Rand(){
        for (let i=0;i<this.row;i++){
            for(let j=0;j<this.col;j++){
                this.matrix[i][j]=((Math.random()*100)*0.03/(this.row+35))
            }
        }
    }
}
export default Matrix
