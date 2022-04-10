import NodeType from "@/data/models/tree/NodeType"

class NodeData {
    constructor(public type: NodeType, public responsibleParameter: number, public condition: string | null = null, public result: string | null = null) {
    }
}

export default NodeData
