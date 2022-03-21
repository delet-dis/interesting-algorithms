export class ListNode < T > {
    constructor(public data: T, public prevNode: ListNode < T > | null, public nextNode: ListNode < T > | null) {}
}

class List < T > implements Iterable < ListNode < T >> {
    private frontNode: ListNode < T > | null = null
    private backNode: ListNode < T > | null = null
    public iteratorStartNode: ListNode < T > | null = null
    public size: number = 0

    constructor(...args: T[]) {
        for (let i of args)
            this.push_back(i)
    }

    public push_back(element: T): void {
        if (this.backNode === null) {
            this.backNode = new ListNode < T > (element, null, null)
            this.frontNode = this.backNode
            this.iteratorStartNode = this.frontNode
        } else {
            this.backNode.nextNode = new ListNode < T > (element, this.backNode, null)
            this.backNode = this.backNode.nextNode
        }

        this.size++
    }

    public remove(node: ListNode < T > ): void {
        let notRemoved: boolean = true
        if (node === this.backNode) {
            console.log("its back")
            if (node.prevNode)
                node.prevNode!.nextNode = null
            this.backNode = node.prevNode
            notRemoved = false
        }
        if (node === this.frontNode) {
            console.log("its front")
            if (node.nextNode)
                node.nextNode!.prevNode = null
            this.frontNode = node.nextNode
            this.iteratorStartNode = this.frontNode
            notRemoved = false
        } else if (notRemoved) {
            console.log("its ordinary")
            node.prevNode!.nextNode = node.nextNode
            node.nextNode!.prevNode = node.prevNode
        }

        this.size--
    }

    public concat(anotherList: List < T > ): void {
        if (this.size && anotherList.size) {
            this.backNode!.nextNode = anotherList.frontNode
            anotherList.frontNode!.prevNode = this.backNode
            this.backNode = anotherList.backNode
            this.size += anotherList.size
        }
    }


    [Symbol.iterator](): Iterator < ListNode < T >> {
        let currentNode: ListNode < T > | null = this.iteratorStartNode
        this.iteratorStartNode = this.frontNode
        return {
            next: () => {
                const val = currentNode
                if (val)
                    currentNode = currentNode!.nextNode
                return {
                    done: val === null,
                    value: val!
                }
            }
        }

    }

}


export default List