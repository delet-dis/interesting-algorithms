import LinkedList, {ListNode} from "@/data/models/clustering/DoubleLinkedList"
import Dot from "@/data/models/clustering/Dot"

class Cluster {
    constructor(public points: LinkedList<Dot>, public closest : ListNode<Cluster> | null, public minimalDistance: number, public distCol: number) {
    }
}

export default Cluster
