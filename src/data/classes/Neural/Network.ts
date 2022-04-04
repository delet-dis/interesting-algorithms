import Matrix from "@/data/classes/Neural/Matrix";
import ActivationFunction from "@/data/classes/Neural/ActivationFunction";
class Network {
    L:number
    size:number[]
    weights:Matrix[]
    bios:number[][]
    neuronVal:number[][]
    neuronErr:number[][]
    neuronBiosVal:number[]
    constructor(L:number, size:number[]) {
        this.weights=[]
        this.bios=[]
        this.neuronVal=[]
        this.neuronErr=[]
        this.neuronBiosVal=[]
        this.L=L
        this.size=size
        for(let i=0;i<this.L-1;i++){
            this.bios[i]=[]
            this.weights[i]=new Matrix(size[i+1],size[i])
            this.weights[i].Rand()
            for(let j=0;j<size[i+1];j++){
                this.bios[i][j]=(Math.random()*50)*0.06/(this.size[i]+15);
            }
        }
        for(let i=0;i<this.L;i++){
            this.neuronVal[i]=[]
            this.neuronErr[i]=[]
        }
        for(let i=0;i<L;i++)
            this.neuronBiosVal[i]=1;
    }
    SetInput(values:number[]){
        for(let i=0;i<this.size[0];i++){
            this.neuronVal[0][i]=values[i];
        }
    }
    ForwardFeed():number{
        for(let k=1;k<this.L;k++){
            this.neuronVal[k]=this.weights[k-1].Multiply(this.neuronVal[k-1],this.size[k-1],this.neuronVal[k])
            this.neuronVal[k]=Matrix.SumVector(this.neuronVal[k],this.bios[k-1],this.size[k])
            this.neuronVal[k]=ActivationFunction.use(this.neuronVal[k],this.size[k])
        }
        const pred=this.SearchMaxIndex(this.neuronVal[this.L-1])
        return pred
    }
    SearchMaxIndex(value:number[]):number{
        let max=value[0]
        let prediction =0
        let tmp;
        for(let i =0;i<this.size[this.L-1];i++){
            tmp=value[i]
            if(tmp>max){
                prediction=i
                max=tmp
            }
        }
        return prediction
    }
    ReadWeights(weights:number[]) {
        let s=0
        for(let i=0;i<this.L-1;i++){
            for (let j=0;j<this.weights[i].row;j++){
                for (let k=0;k<this.weights[i].col;k++){
                    s++;
                    this.weights[i].matrix[j][k]=weights[s]
                }
            }
        }
    }
}
export default Network