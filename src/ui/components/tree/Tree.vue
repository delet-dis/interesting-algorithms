<template>
    <div class="tree" id="tree">

    </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component"
import DisplayingNode from "@/data/models/tree/DisplayingNode"
import NodeType from "@/data/models/tree/NodeType";

@Options({
    components: {},
})
export default class Tree extends Vue {
    private displayingTreeField: DisplayingNode | null = null

    set displayingTree(newValue: DisplayingNode | null) {
        this.displayingTreeField = newValue

        this.drawDisplayingTree()
    }

    get displayingTree(): DisplayingNode | null {
        return this.displayingTreeField
    }

    private drawDisplayingTree() {
        if (this.displayingTree) {
            let displayingTreeUl = document.createElement("ul")
            let displayingTreeLi = document.createElement("li")

            let tree = document.getElementById("tree")

            this.createNode(this.displayingTree, displayingTreeLi)

            displayingTreeUl.appendChild(displayingTreeLi)

            if (tree) {
                tree.appendChild(displayingTreeUl)
            }
        }
    }

    private createNode(node: DisplayingNode, parentElement: HTMLElement) {
        let nodeWrapper = document.createElement("div")
        let nodeHeader = document.createElement("a")

        if (node.data.type == NodeType.PATH_NODE) {
            nodeHeader.classList.add("pathNode")
        }

        let stringToDisplay = ""

        if (node.data.responsibleParameter) {
            stringToDisplay += "Параметр: " + node.data.responsibleParameter + "\n\n"
        }

        if (node.data.condition) {
            stringToDisplay += "Условие:\n" + node.data.condition + "\n"
        }

        if (node.data.result) {
            stringToDisplay += "Результат:\n" + node.data.result + "\n"
        }

        if(stringToDisplay==""){
            stringToDisplay = "Корень"
        }

        nodeHeader.innerText = stringToDisplay

        nodeWrapper.appendChild(nodeHeader)

        if (node.nestedNodes) {
            let nestedNodesUl = document.createElement("ul")

            node.nestedNodes.forEach((node) => {
                let nestedNodeLi = document.createElement("li")
                this.createNode(node, nestedNodeLi)
                nestedNodesUl.appendChild(nestedNodeLi)
            })

            nodeWrapper.appendChild(nestedNodesUl)
        }

        parentElement.appendChild(nodeWrapper)
    }
}
</script>

<style>
.tree * {
    margin: 0;
    padding: 0;
}

.tree {
    width: max-content;
    height: max-content;
    overflow-wrap: revert;
    padding: 0;
}

.tree ul {
    padding-top: 20px;
    position: relative;

    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
}

.tree li {
    float: left;
    text-align: center;
    list-style-type: none;
    position: relative;
    padding: 20px 5px 0 5px;

    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
}

.tree li::before, .tree li::after {
    content: "";
    position: absolute;
    top: 0;
    right: 50%;
    border-top: 1px solid #ccc;
    width: 50%;
    height: 20px;
}

.tree li::after {
    right: auto;
    left: 50%;
    border-left: 1px solid #ccc;
}

.tree li:only-child::after, .tree li:only-child::before {
    display: none;
}

.tree li:only-child {
    padding-top: 0;
}

.tree li:first-child::before, .tree li:last-child::after {
    border: 0 none;
}

.tree li:last-child::before {
    border-right: 1px solid #ccc;
    border-radius: 0 5px 0 0;
    -webkit-border-radius: 0 5px 0 0;
    -moz-border-radius: 0 5px 0 0;
}

.tree li:first-child::after {
    border-radius: 5px 0 0 0;
    -webkit-border-radius: 5px 0 0 0;
    -moz-border-radius: 5px 0 0 0;
}


.tree ul ul::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    border-left: 1px solid #ccc;
    width: 0;
    height: 20px;
}

.tree li a {
    border: 1px solid #ccc;
    padding: 5px 10px;
    text-decoration: none;
    color: #666;
    font-size: 11px;
    display: inline-block;

    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;

    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
}

.tree li a.pathNode {
    background-color: black;
    color: white;
}

.tree li a:hover, .tree li a:hover + ul li a {
    background: black;
    color: white;
    border: 3px solid white;
    border-radius: 8px;
}

.tree li a:hover + ul li::after,
.tree li a:hover + ul li::before,
.tree li a:hover + ul::before,
.tree li a:hover + ul ul::before {
    border-color: black;
}
</style>
