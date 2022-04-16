import DisplayingNode from "@/data/models/tree/DisplayingNode";
import NodeData from "@/data/models/tree/NodeData";

class Node {
    private nextNodes: Node[] = []
    private parameter = -1
    private readonly processingElements: string[][]
    private readonly depth: number
    private parameterString = ""

    constructor(elems: string[][], depth: number) {
        this.processingElements = elems
        this.depth = depth + 1
    }

    private chooseParam(): number {
        let newParameter = 0
        let minEntropy = 100

        let currentElementEntropy: number

        for (let i = 0; i < this.processingElements[0].length; i++) {
            currentElementEntropy = this.findEntropy(i)

            if (currentElementEntropy < minEntropy && currentElementEntropy != 0) {
                minEntropy = currentElementEntropy
                newParameter = i
            }
        }

        return newParameter
    }

    private findEntropy(num: number): number {
        const checkNumber: number = +this.processingElements[0][num]
        let entropy = 0

        if (!isNaN(checkNumber)) {
            let sum = 0
            let lowerThanSum = 0

            for (let i = 0; i < this.processingElements.length; i++) {
                sum += +this.processingElements[i][num]
            }

            sum /= this.processingElements.length

            for (let i = 0; i < this.processingElements.length; i++) {
                if (+this.processingElements[i][num] < sum) {
                    lowerThanSum++
                }
            }

            entropy = -(lowerThanSum / this.processingElements.length) *
                Math.log2(lowerThanSum / this.processingElements.length) -
                ((this.processingElements.length - lowerThanSum) / this.processingElements.length) *
                Math.log2((this.processingElements.length - lowerThanSum) / this.processingElements.length)

        } else {
            const sameNamesMas: string[] = []
            const sameNameCounter: number[] = []

            this.checkForExistence(sameNamesMas, sameNameCounter, num)

            for (let i = 0; i < sameNameCounter.length; i++) {
                entropy = entropy - (sameNameCounter[i] / this.processingElements.length) *
                    Math.log2(sameNameCounter[i] / this.processingElements.length)
            }
        }

        return entropy
    }

    private separateGroups() {
        const separateParameter = this.chooseParam()
        const checkNumber: number = +this.processingElements[0][separateParameter]

        if (!isNaN(checkNumber)) {
            const firstGroup: string[][] = []
            const secondGroup: string[][] = []

            let sum = 0

            for (let i = 0; i < this.processingElements.length; i++) {
                sum += +this.processingElements[i][separateParameter]
            }

            sum /= this.processingElements.length

            for (let i = 0; i < this.processingElements.length; i++) {
                if (+this.processingElements[i][separateParameter] < sum) {
                    firstGroup.push(this.processingElements[i])
                } else {
                    secondGroup.push(this.processingElements[i])
                }
            }

            const beautifiedSum = sum.toFixed(2).toString()

            this.nextNodes[0] = new Node(firstGroup, this.depth)
            this.nextNodes[0].parameterString = '<' + beautifiedSum
            this.nextNodes[0].parameter = separateParameter

            this.nextNodes[1] = new Node(secondGroup, this.depth)
            this.nextNodes[1].parameterString = '>=' + beautifiedSum
            this.nextNodes[1].parameter = separateParameter
        } else {
            const sameNamesMas: string[] = []
            const sameNameCounter: number[] = []
            const groups: string[][][] = []
            const nextParamString: string[] = []

            this.checkForExistence(sameNamesMas, sameNameCounter, separateParameter)

            for (let i = 0; i < sameNamesMas.length; i++) {
                let k = 0
                groups[i] = []

                for (let j = 0; j < this.processingElements.length; j++) {
                    if (sameNamesMas[i] == this.processingElements[j][separateParameter]) {
                        groups[i][k] = this.processingElements[j]
                        nextParamString[i] = sameNamesMas[i]
                        k++;
                    }
                }
            }

            for (let i = 0; i < groups.length; i++) {
                this.nextNodes[i] = new Node(groups[i], this.depth)
                this.nextNodes[i].parameterString = nextParamString[i]
                this.nextNodes[i].parameter = separateParameter
            }
        }
    }

    private checkForExistence(sameNamesMas: string[], sameNameCounter: number[], at: number) {
        for (let i = 0; i < this.processingElements.length; i++) {
            let exist = false

            for (let j = 0; j < sameNamesMas.length; j++) {
                if (this.processingElements[i][at] == sameNamesMas[j]) {
                    exist = true
                    sameNameCounter[j]++

                    break
                }
            }

            if (!exist) {
                sameNamesMas.push(this.processingElements[i][at])
                sameNameCounter.push(1)
            }
        }
    }

    createNewNodes() {
        if (this.processingElements.length > 1 && !this.processingElements.every(check=>compareArrays(this.processingElements[0],check))) {
            
            this.separateGroups()

            for (let i = 0; i < this.nextNodes.length; i++) {
                this.nextNodes[i].createNewNodes()
            }
        }
    }

    convert(): DisplayingNode {
        let nestedNodes: DisplayingNode[] | null = null

        if (this.nextNodes.length > 0) {
            nestedNodes = []
            for (let i = 0; i < this.nextNodes.length; i++) {
                nestedNodes.push(this.nextNodes[i].convert())
            }
        }

        let nodeType = 1
        let result: null | string = null

        if (nestedNodes == null) {
            nodeType = 0
            result = this.processingElements[0][this.processingElements[0].length - 1]
        }

        const curNodeData: NodeData = new NodeData(nodeType, this.parameter + 1, this.parameterString, result)
        return new DisplayingNode(curNodeData, nestedNodes)
    }
}
function compareArrays(arr1:string[],arr2:string[]){
    return(
    arr1.length === arr2.length &&
    arr1.every((value, index) => value === arr2[index]))
}
export default Node
