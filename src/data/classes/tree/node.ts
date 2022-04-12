import Node from "@/data/models/tree/Node";
import NodeData from "@/data/models/tree/NodeData";
class node {
    private nextNodes: node[]
    private param: number
    private currElems: string[][]
    private depth: number
    private paramString:string
    constructor(elems: string[][], depth: number) {
        this.nextNodes = []
        this.currElems = elems
        this.depth = depth + 1
        this.param = -1
        this.paramString=""
    }

    chooseParam(): number {
        this.param = 0
        let minEntropy = 100
        let curElemEntropy: number
        for (let i = 0; i < this.currElems[0].length; i++) {
            curElemEntropy = this.findEntropy(i)
            if (curElemEntropy < minEntropy && curElemEntropy!=0) {
                minEntropy = curElemEntropy
                this.param = i
            }
        }
        return this.param
    }

    findEntropy(num: number): number {
        const checkNumber: number = +this.currElems[0][num]
        let entropy = 0
        if (!isNaN(checkNumber)) {
            let sum = 0
            let lowerThenSum = 0
            for (let i = 0; i < this.currElems.length; i++) {
                sum += +this.currElems[i][num]
            }
            sum = sum / this.currElems.length
            for (let i = 0; i < this.currElems.length; i++) {
                if (+this.currElems[i][num] < sum) {
                    lowerThenSum++
                }
            }
            entropy = -(lowerThenSum / this.currElems.length) * Math.log2(lowerThenSum / this.currElems.length) - ((this.currElems.length - lowerThenSum) / this.currElems.length) * Math.log2((this.currElems.length - lowerThenSum) / this.currElems.length)

        }
        else {
            const sameNamesMas: string[] = []
            const sameNameCounter: number[] = []
            for (let i = 0; i < this.currElems.length; i++) {
                let exist = false
                for (let j = 0; j < sameNamesMas.length; j++) {
                    if (this.currElems[i][num] == sameNamesMas[j]) {
                        exist = true
                        sameNameCounter[j]++
                        break
                    }
                }
                if (!exist) {
                    sameNamesMas.push(this.currElems[i][num])
                    sameNameCounter.push(1)
                }
            }
            for (let i = 0; i < sameNameCounter.length; i++) {
                entropy = entropy - (sameNameCounter[i] / this.currElems.length) * Math.log2(sameNameCounter[i] / this.currElems.length)
            }
        }
        return entropy
    }

    separateGroups() {
        const separateByParam = this.chooseParam()
        const checkNumber: number = +this.currElems[0][separateByParam]
        if (!isNaN(checkNumber)) {
            const groupOne: string[][] = []
            const groupTwo: string[][] = []
            let sum = 0
            for (let i = 0; i < this.currElems.length; i++) {
                sum += +this.currElems[i][separateByParam]
            }
            sum = sum / this.currElems.length
            for (let i = 0; i < this.currElems.length; i++) {
                if (+this.currElems[i][separateByParam] < sum) {
                    groupOne.push(this.currElems[i])
                } else {
                    groupTwo.push(this.currElems[i])
                }
            }
            this.paramString=sum.toString()
            this.nextNodes[0] = new node(groupOne, this.depth)
            this.nextNodes[1] = new node(groupTwo, this.depth)
        }
        else {
            const sameNamesMas: string[] = []
            const sameNameCounter: number[] = []
            const groups:string[][][]=new Array()
            for (let i = 0; i < this.currElems.length; i++) {
                let exist = false
                for (let j = 0; j < sameNamesMas.length; j++) {
                    if (this.currElems[i][separateByParam] == sameNamesMas[j]) {
                        exist = true
                        sameNameCounter[j]++
                        break
                    }
                }
                if (!exist) {
                    sameNamesMas.push(this.currElems[i][separateByParam])
                    sameNameCounter.push(1)
                }
            }
            for (let i=0;i<sameNamesMas.length;i++){
                let k=0
                groups[i]=new Array()
                for (let j=0;j<this.currElems.length;j++){
                    if(sameNamesMas[i]==this.currElems[j][separateByParam]){
                        groups[i][k]=this.currElems[j]
                        k++;
                    }
                }
            }
            this.paramString='name'
            for (let i=0;i<groups.length;i++){
                this.nextNodes[i]= new node(groups[i],this.depth)
            }
        }

    }
    createNewNodes(){
        this.separateGroups()
        for(let i=0;i<this.nextNodes.length;i++){
            if(this.currElems.length>1){
                this.nextNodes[i].createNewNodes()
            }
        }
    }
    convertor(){
        const curNodeData:NodeData=new NodeData(1,this.param,this.paramString)
        const curNode:Node=new Node(NodeData,)
    }
}
export default node