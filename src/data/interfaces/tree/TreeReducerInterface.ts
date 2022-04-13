import Node from "@/data/models/tree/Node"

interface TreeReducerInterface {
    reduceTree(tree: Node): Node | null
}

export default TreeReducerInterface
