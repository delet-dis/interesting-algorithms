import TreeExpressionExecutorInterface from "@/data/interfaces/tree/TreeExpressionExecutorInterface"
import Node from "@/data/models/tree/Node"
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

        if (condition.charCodeAt(0) >= 60 && condition.charCodeAt(0) <= 62) {
            if (Number(value)) //нет необходимости
                return eval(value + condition) 
            else
                return null
        }

        return value == condition
    }


    public executeExpressionInTree(expression: string, tree: Node[]): Node[] | null{
        const parameters = CSVParserRepository.getInstance().parseInputData(expression)
        
        if (!parameters)
            return null

        let currentNode: Node = tree[0]
        for (const node of tree) {
            if(this.checkCondition(parameters[node.data.responsibleParameter], node.data.condition)) {
                currentNode = node
                break
            }
        }

        while (currentNode.data.type != NodeType.LEAF_NODE) {
            currentNode.data.type = NodeType.PATH_NODE
            for (const node of currentNode.nestedNodes!) {
                if(this.checkCondition(parameters[node.data.responsibleParameter], node.data.condition)) {
                    currentNode = node
                    break
                }
            }
        }
        
        return tree
        
    }
}

export default TreeExpressionExecutorRepository
