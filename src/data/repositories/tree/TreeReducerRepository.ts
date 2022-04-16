import DisplayingNode from "@/data/models/tree/DisplayingNode"
import TreeReducerInterface from "@/data/interfaces/tree/TreeReducerInterface"
import DividerRepository from "./DividerRepository"
import TreeExpressionExecutorRepository from "./TreeExpressionExecutorRepository"
import NodeType from "@/data/models/tree/NodeType"
import NodeData from "@/data/models/tree/NodeData"


class TreeReducerRepository implements TreeReducerInterface {
    private static instance: TreeReducerRepository

    public static getInstance(): TreeReducerRepository {
        if (!TreeReducerRepository.instance) {
            TreeReducerRepository.instance = new TreeReducerRepository()
        }

        return TreeReducerRepository.instance
    }

    private emptyNode = new DisplayingNode(new NodeData(0, null, null, null, -1), null)


    private tryToRemoveNode(curNode: DisplayingNode): void {
        
        
        if (!curNode.nestedNodes)
            return
        
        let numOfLeafs = 0  
        for (const node of curNode.nestedNodes)  {
            this.tryToRemoveNode(node)
            if(node.data.type == NodeType.LEAF_NODE)
                numOfLeafs++
        }
                
        

        if(numOfLeafs == curNode.nestedNodes.length) {
            let maxNode1: DisplayingNode = this.emptyNode
            let maxNode2: DisplayingNode = this.emptyNode
            let counter = 0
            let sameResults = true
            let lastResult = curNode.nestedNodes[0].data.result
            for (const node of curNode.nestedNodes) {
                if(node.data.result != lastResult)
                    sameResults = false
                if (node.data.counter > maxNode1.data.counter) {
                    maxNode2 = maxNode1
                    maxNode1 = node
                } else if (node.data.counter > maxNode2.data.counter) {
                    maxNode2 = node
                }
                    
                lastResult = node.data.result
                counter += node.data.counter
            }

            if (maxNode2.data.counter <= 0 || maxNode1.data.counter / maxNode2.data.counter > 7 || sameResults) {
                curNode.data.type = NodeType.LEAF_NODE
                curNode.data.result = maxNode1.data.result
                curNode.data.counter = counter
                curNode.nestedNodes = null
            }            
        }


    }

    reduceTree(tree: DisplayingNode): DisplayingNode | null {
        const dataSample = DividerRepository.getInstance().checkSample
        
        if (!dataSample)
            return null

        for (const params of dataSample) {
            TreeExpressionExecutorRepository.getInstance().countLeafResult(params, tree)  
        }    
        
        this.tryToRemoveNode(tree)
        
        return tree
    }
}

export default TreeReducerRepository
