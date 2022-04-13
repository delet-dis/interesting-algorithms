import NodeData from "@/data/models/tree/NodeData"

class DisplayingNode {
    constructor(public data: NodeData, public nestedNodes: DisplayingNode[] | null) {
    }
}

export default DisplayingNode
