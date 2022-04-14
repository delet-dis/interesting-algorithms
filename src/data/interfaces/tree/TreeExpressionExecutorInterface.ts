import DisplayingNode from "@/data/models/tree/DisplayingNode"

interface TreeExpressionExecutorInterface {
    executeExpressionInTree(expression: string, tree: DisplayingNode): DisplayingNode | null
}

export default TreeExpressionExecutorInterface
