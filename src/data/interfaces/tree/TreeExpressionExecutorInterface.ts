import Node from "@/data/models/tree/Node"

interface TreeExpressionExecutorInterface {
    executeExpressionInTree(expression: string, tree: Node[]): Node[] | null
}

export default TreeExpressionExecutorInterface
