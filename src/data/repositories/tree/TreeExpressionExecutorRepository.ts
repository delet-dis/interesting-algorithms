import TreeExpressionExecutorInterface from "@/data/interfaces/tree/TreeExpressionExecutorInterface"
import DisplayingNode from "@/data/models/tree/DisplayingNode"

class TreeExpressionExecutorRepository implements TreeExpressionExecutorInterface{
    private static instance: TreeExpressionExecutorRepository

    public static getInstance(): TreeExpressionExecutorRepository {
        if (!TreeExpressionExecutorRepository.instance) {
            TreeExpressionExecutorRepository.instance = new TreeExpressionExecutorRepository()
        }

        return TreeExpressionExecutorRepository.instance
    }

    executeExpressionInTree(expression: string, tree: DisplayingNode): DisplayingNode | null{
        return null
    }
}

export default TreeExpressionExecutorRepository
