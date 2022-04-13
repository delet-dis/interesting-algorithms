import Node from "@/data/models/tree/Node"
import TreeReducerInterface from "@/data/interfaces/tree/TreeReducerInterface"

class TreeReducerRepository implements TreeReducerInterface {
    private static instance: TreeReducerRepository

    public static getInstance(): TreeReducerRepository {
        if (!TreeReducerRepository.instance) {
            TreeReducerRepository.instance = new TreeReducerRepository()
        }

        return TreeReducerRepository.instance
    }

    reduceTree(tree: Node): Node | null {
        return null
    }
}

export default TreeReducerRepository
