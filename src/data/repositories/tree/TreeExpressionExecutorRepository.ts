import TreeExpressionExecutorInterface from "@/data/interfaces/tree/TreeExpressionExecutorInterface";
import Node from "@/data/models/tree/Node";

class TreeExpressionExecutorRepository implements TreeExpressionExecutorInterface{
    private static instance: TreeExpressionExecutorRepository

    public static getInstance(): TreeExpressionExecutorRepository {
        if (!TreeExpressionExecutorRepository.instance) {
            TreeExpressionExecutorRepository.instance = new TreeExpressionExecutorRepository()
        }

        return TreeExpressionExecutorRepository.instance
    }

    executeExpressionInTree(expression: string, tree: Node[]): Node[] | null{
        return []
    }
}

export default TreeExpressionExecutorRepository
