import TreeCreatorInterface from "@/data/interfaces/tree/TreeCreatorInterface"
import Node from "@/data/models/tree/Node"

class TreeCreatorRepository implements TreeCreatorInterface {
    private static instance: TreeCreatorRepository

    public static getInstance(): TreeCreatorRepository {
        if (!TreeCreatorRepository.instance) {
            TreeCreatorRepository.instance = new TreeCreatorRepository()
        }

        return TreeCreatorRepository.instance
    }

    createTree(inputData: string): Node | null {
        return null
    }
}

export default TreeCreatorRepository
