import TreeExpressionExecutorInterface from "@/data/interfaces/tree/TreeExpressionExecutorInterface"
import NodeData from "@/data/models/tree/NodeData"
import NodeType from "@/data/models/tree/NodeType"
import CSVParserRepository from "./csv/CSVParserRepository"
import DisplayingNode from "@/data/models/tree/DisplayingNode"


class TreeExpressionExecutorRepository implements TreeExpressionExecutorInterface {
    private static instance: TreeExpressionExecutorRepository

    public static getInstance(): TreeExpressionExecutorRepository {
        if (!TreeExpressionExecutorRepository.instance) {
            TreeExpressionExecutorRepository.instance = new TreeExpressionExecutorRepository()
        }

        return TreeExpressionExecutorRepository.instance
    }

    private emptyData = new NodeData(0)

    private checkCondition(value: string, condition: string): boolean | null {

        if (condition.charCodeAt(0) >= 60 && condition.charCodeAt(0) <= 62) {
            if (!isNaN(Number(value)))
                return eval(value + condition)
            return null
        }

        return value == condition
    }

    private copyTree(copyTree: DisplayingNode, originalTree: DisplayingNode): void {
        copyTree.data = new NodeData(originalTree.data.type,
            originalTree.data.responsibleParameter,
            originalTree.data.condition,
            originalTree.data.result)

        if (originalTree.nestedNodes) {
            copyTree.nestedNodes = []
            if (originalTree.nestedNodes) {
                for (let i = 0; i < originalTree.nestedNodes.length; i++) {
                    copyTree.nestedNodes.push(new DisplayingNode(this.emptyData, null))
                    this.copyTree(copyTree.nestedNodes[i], originalTree.nestedNodes[i])
                }
            }
        } else {
            originalTree.nestedNodes = null
        }

    }

    public executeExpressionInTree(expression: string, tree: DisplayingNode): DisplayingNode | null {
        const parameters = CSVParserRepository.getInstance().parseInputData(expression)

        if (!parameters)
            return null

        const newTree: DisplayingNode = new DisplayingNode(this.emptyData, null)
        this.copyTree(newTree, tree)
        let currentNode = newTree

        while (currentNode.data.type != NodeType.LEAF_NODE) {
            currentNode.data.type = NodeType.PATH_NODE
            if (currentNode.nestedNodes) {
                for (const node of currentNode.nestedNodes) {
                    if (node.data.responsibleParameter && node.data.condition) {
                        if (node.data.responsibleParameter > parameters[0].length)
                            return null
                        const result = this.checkCondition(parameters[0][node.data.responsibleParameter - 1], node.data.condition)
                        if (result) {
                            currentNode = node
                            break
                        } else if (result == null) {
                            return null
                        }
                    }
                }
            }
        }
        currentNode.data.type = NodeType.PATH_NODE

        return newTree
    }


    public countLeafResult(parameters: string[], tree: DisplayingNode): boolean {

        if (!parameters)
            return false

        let currentNode = tree
        let prevNode = new DisplayingNode(this.emptyData, null)

        while (currentNode.data.type != NodeType.LEAF_NODE) {
            if (currentNode.nestedNodes) {
                if(prevNode == currentNode)
                    return false
                prevNode = currentNode
                for (const node of currentNode.nestedNodes) {
                    if (node.data.responsibleParameter && node.data.condition) {
                        const result = this.checkCondition(parameters[node.data.responsibleParameter - 1], node.data.condition)
                        if (result) {

                            currentNode = node

                            break
                        }
                    }
                }
            }
        }
        currentNode.data.counter++
        return true
    }
}

export default TreeExpressionExecutorRepository
