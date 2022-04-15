import DisplayingNode from "@/data/models/tree/DisplayingNode";
import NodeData from "@/data/models/tree/NodeData";

class Node {
    private nextNodes: Node[]
    private parameter: number
    private processingElements: string[][]
    private depth: number
    private parameterString: string

    constructor(elems: string[][], depth: number) {
        this.nextNodes = []
        this.processingElements = elems
        this.depth = depth + 1
        this.parameter = -1
        this.parameterString = ""
    }

    chooseParam(): number {
        let newParam = 0
        let minEntropy = 100
        let curElemEntropy: number

        for (let i = 0; i < this.processingElements[0].length; i++) {
            curElemEntropy = this.findEntropy(i)

            if (curElemEntropy < minEntropy && curElemEntropy != 0) {
                minEntropy = curElemEntropy
                newParam = i
            }
        }

        return newParam
    }

    findEntropy(num: number): number {
        const checkNumber: number = +this.processingElements[0][num]
        let entropy = 0

        if (!isNaN(checkNumber)) {
            let sum = 0
            let lowerThenSum = 0

            for (let i = 0; i < this.processingElements.length; i++) {
                sum += +this.processingElements[i][num]
            }

            sum = sum / this.processingElements.length

            for (let i = 0; i < this.processingElements.length; i++) {
                if (+this.processingElements[i][num] < sum) {
                    lowerThenSum++
                }
            }

            entropy = -(lowerThenSum / this.processingElements.length) *
                Math.log2(lowerThenSum / this.processingElements.length) -
                ((this.processingElements.length - lowerThenSum) / this.processingElements.length) *
                Math.log2((this.processingElements.length - lowerThenSum) / this.processingElements.length)
        } else {
            const sameNamesMas: string[] = []
            const sameNameCounter: number[] = []

            for (let i = 0; i < this.processingElements.length; i++) {
                let exist = false

                for (let j = 0; j < sameNamesMas.length; j++) {
                    if (this.processingElements[i][num] == sameNamesMas[j]) {
                        exist = true
                        sameNameCounter[j]++

                        break
                    }
                }

                if (!exist) {
                    sameNamesMas.push(this.processingElements[i][num])
                    sameNameCounter.push(1)
                }
            }

            for (let i = 0; i < sameNameCounter.length; i++) {
                entropy = entropy - (sameNameCounter[i] / this.processingElements.length) *
                    Math.log2(sameNameCounter[i] / this.processingElements.length)
            }
        }

        return entropy
    }

    separateGroups() {
        const separateByParam = this.chooseParam()
        const checkNumber: number = +this.processingElements[0][separateByParam]

        if (!isNaN(checkNumber)) {
            const groupOne: string[][] = []
            const groupTwo: string[][] = []

            let sum = 0

            for (let i = 0; i < this.processingElements.length; i++) {
                sum += +this.processingElements[i][separateByParam]
            }

            sum = sum / this.processingElements.length

            for (let i = 0; i < this.processingElements.length; i++) {
                if (+this.processingElements[i][separateByParam] < sum) {
                    groupOne.push(this.processingElements[i])
                } else {
                    groupTwo.push(this.processingElements[i])
                }
            }

            this.nextNodes[0] = new Node(groupOne, this.depth)
            this.nextNodes[0].parameterString = '<' + (sum.toFixed(2).toString())
            this.nextNodes[0].parameter = separateByParam

            this.nextNodes[1] = new Node(groupTwo, this.depth)
            this.nextNodes[1].parameterString = '>=' + (sum.toFixed(2).toString())
            this.nextNodes[1].parameter = separateByParam
        } else {
            const sameNamesMas: string[] = []
            const sameNameCounter: number[] = []
            const groups: string[][][] = []
            const nextParamString: string[] = []

            for (let i = 0; i < this.processingElements.length; i++) {
                let exist = false

                for (let j = 0; j < sameNamesMas.length; j++) {
                    if (this.processingElements[i][separateByParam] == sameNamesMas[j]) {
                        exist = true
                        sameNameCounter[j]++

                        break
                    }
                }

                if (!exist) {
                    sameNamesMas.push(this.processingElements[i][separateByParam])
                    sameNameCounter.push(1)
                }
            }

            for (let i = 0; i < sameNamesMas.length; i++) {
                let k = 0
                groups[i] = []

                for (let j = 0; j < this.processingElements.length; j++) {
                    if (sameNamesMas[i] == this.processingElements[j][separateByParam]) {
                        groups[i][k] = this.processingElements[j]
                        nextParamString[i] = sameNamesMas[i]
                        k++;
                    }
                }
            }

            for (let i = 0; i < groups.length; i++) {
                this.nextNodes[i] = new Node(groups[i], this.depth)
                this.nextNodes[i].parameterString = nextParamString[i]
                this.nextNodes[i].parameter = separateByParam
            }
        }

    }

    createNewNodes() {
        if (this.processingElements.length > 1) {
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

export default Node
