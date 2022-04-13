import DisplayingNode from "@/data/models/tree/DisplayingNode"

interface TreeCreatorInterface {
    createTree(inputData: string): DisplayingNode | null
}

export default TreeCreatorInterface
