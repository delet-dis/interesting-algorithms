import TreeExpressionExecutorInterface from "@/data/interfaces/tree/TreeExpressionExecutorInterface"
import Node from "@/data/models/tree/Node"
import NodeData from "@/data/models/tree/NodeData"
import NodeType from "@/data/models/tree/NodeType"
import CSVParserRepository from "./csv/CSVParserRepository"

class TreeExpressionExecutorRepository implements TreeExpressionExecutorInterface{
    private static instance: TreeExpressionExecutorRepository

    public static getInstance(): TreeExpressionExecutorRepository {
        if (!TreeExpressionExecutorRepository.instance) {
            TreeExpressionExecutorRepository.instance = new TreeExpressionExecutorRepository()
        }

        return TreeExpressionExecutorRepository.instance
    }

    private checkCondition(value: string, condition: string): boolean | null {

        if (condition.charCodeAt(0) >= 60 && condition.charCodeAt(0) <= 62 && Number(value)) {
            return eval(value + condition) 
        }

        return value == condition
    }

    private copyTree(copyTree: Node, originalTree: Node): void {
        copyTree.data = new NodeData(originalTree.data.type,
                                     originalTree.data.responsibleParameter,
                                     originalTree.data.condition,
                                     originalTree.data.result)

        if (!originalTree.nestedNodes) {
            copyTree.nestedNodes = new Array(originalTree.nestedNodes!.length)
            for(let i = 0; i < originalTree.nestedNodes!.length; i++) {
                this.copyTree(copyTree.nestedNodes[i], originalTree.nestedNodes![i])
            }
        }
        else {
            originalTree.nestedNodes = null
        }
            
    }

    public executeExpressionInTree(expression: string, tree: Node): Node | null{
        const parameters = CSVParserRepository.getInstance().parseInputData(expression)
        
        if (!parameters)
            return null

        const newTree: Node = new Node(new NodeData(NodeType.BRANCH_NODE, 0),  null)
        this.copyTree(newTree, tree)
        let currentNode = newTree

        while (currentNode.data.type != NodeType.LEAF_NODE) {
            currentNode.data.type = NodeType.PATH_NODE
            for (const node of currentNode.nestedNodes!) {
                if(this.checkCondition(parameters[0][node.data.responsibleParameter], node.data.condition!)) {
                    currentNode = node
                    break
                }
            }
        }
        
        return newTree
        
    }
}

export default TreeExpressionExecutorRepository
