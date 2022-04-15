import NodeType from "@/data/models/tree/NodeType"

class NodeData {
    constructor(public type: NodeType, public responsibleParameter: number | null = null, public condition: string | null = null, public result: string | null = null, public counter: number = 0) {
    }
}

export default NodeData
