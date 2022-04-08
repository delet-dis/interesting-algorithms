import NodeData from "@/data/models/tree/NodeData"

class Node {
    constructor(public data: NodeData, public nestedNodes: Node[] | null) {
    }
}

export default Node
