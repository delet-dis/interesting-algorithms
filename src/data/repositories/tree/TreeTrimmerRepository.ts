import Node from "@/data/models/tree/Node";
import TreeTrimmerInterface from "@/data/interfaces/tree/TreeTrimmerInterface";

class TreeTrimmerRepository implements TreeTrimmerInterface {
    private static instance: TreeTrimmerRepository

    public static getInstance(): TreeTrimmerRepository {
        if (!TreeTrimmerRepository.instance) {
            TreeTrimmerRepository.instance = new TreeTrimmerRepository()
        }

        return TreeTrimmerRepository.instance
    }

    trimTree(tree: Node[]): Node[] {
        return []
    }
}

export default TreeTrimmerRepository
