import Node from "@/data/models/tree/Node"

interface TreeCreatorInterface {
    createTree(inputData: string): Node[] | null
}

export default TreeCreatorInterface
