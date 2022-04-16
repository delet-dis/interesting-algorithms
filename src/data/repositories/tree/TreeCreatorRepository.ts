import TreeCreatorInterface from "@/data/interfaces/tree/TreeCreatorInterface"
import DisplayingNode from "@/data/models/tree/DisplayingNode"
import Node from "@/data/classes/tree/Node";
import DividerRepository from "@/data/repositories/tree/DividerRepository";

class TreeCreatorRepository implements TreeCreatorInterface {
    private static instance: TreeCreatorRepository

    public static getInstance(): TreeCreatorRepository {
        if (!TreeCreatorRepository.instance) {
            TreeCreatorRepository.instance = new TreeCreatorRepository()
        }

        return TreeCreatorRepository.instance
    }

    createTree(inputData: string): DisplayingNode | null {
        DividerRepository.getInstance().divideBySamples(inputData)

        const data: string[][] | null = DividerRepository.getInstance().trainingSample
        if (data != null) {
            const root: Node = new Node(data, 0)
            root.createNewNodes()
            const rootOfTree: DisplayingNode = root.convert()
            return rootOfTree
        }
        return null
    }
}

export default TreeCreatorRepository
