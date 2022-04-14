import DisplayingNode from "@/data/models/tree/DisplayingNode"

interface TreeReducerInterface {
    reduceTree(tree: DisplayingNode): DisplayingNode | null
}

export default TreeReducerInterface
