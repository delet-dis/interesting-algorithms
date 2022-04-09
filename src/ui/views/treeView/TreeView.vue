<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-12">
                <Card>
                    <TreeDescription/>
                </Card>
                <Error id="error" :class="{'error-displaying':isErrorDisplaying}">
                    <h1>
                        Чего-то не хватает
                    </h1>
                    <p>
                        Стоит проверить входные данные
                    </p>
                </Error>
            </div>
            <div class="col-lg-6 col-md-12">
                <Card class="treeCard" id="treeCard" :class="{'invisibleCard':!displayingTreeAsArray}">
                    <Tree ref="tree"/>
                </Card>
            </div>
            <div class="col-lg-3 col-md-12">
                <Card>
                    <h1>
                        Конфигуратор алгоритма
                    </h1>

                    <button class="button button-border button-rounded button-action activeButton"
                            id="loadData">
                        Загрузить выборку
                    </button>

                    <div class="separator"/>

                    <button class="button button-border button-rounded"
                            :class="{'button-primary button-glow activeButton':displayingTreeAsArray,
                            'button-flat nonActiveButton': displayingTreeAsArray}"
                            id="reduceTreeButton">
                        Сократить дерево
                    </button>

                    <div class="separator"/>

                    <button class="button button-border button-rounded"
                            :class="{'button-royal activeButton':displayingTreeAsArray,
                            'button-flat nonActiveButton': displayingTreeAsArray}"
                            id="executeQuery">
                        Исполнить запрос
                    </button>
                </Card>
            </div>
        </div>
        <Modal ref="modal"/>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component"
import Card from "@/ui/components/card/Card.vue"
import Error from "@/ui/components/error/Error.vue"
import TreeDescription from "@/ui/views/treeView/components/TreeDescription.vue"
import Modal from "@/ui/components/modal/Modal.vue"
import TreeCreatorRepository from "@/data/repositories/tree/TreeCreatorRepository"
import TreeExpressionExecutorRepository from "@/data/repositories/tree/TreeExpressionExecutorRepository"
import Node from "@/data/models/tree/Node"
import TreeReducerRepository from "@/data/repositories/tree/TreeReducerRepository"
import Tree from "@/ui/components/tree/Tree.vue"

@Options({
    components: {
        Tree,
        TreeDescription,
        Card,
        Error,
        Modal
    },
})
export default class TreeView extends Vue {
    private isErrorDisplaying = false

    private modal: Modal | null = null

    private displayingTreeAsArray: Node[] | null = null

    private displayingTree: Tree | null = null

    private showModalForDataLoading() {
        if (this.modal) {
            this.modal.header = "Ввод обучающей выборки в .csv формате"

            this.modal.isDisplaying = true

            this.modal.setSubmitButtonOnClick((inputString: string | undefined) => {
                if (inputString) {
                    this.isErrorDisplaying = false

                    this.submitDataToBuildTree(inputString)
                }

                if (this.modal) {
                    this.modal.isDisplaying = false
                }
            })
        }
    }

    private showModalForQueryExecuting() {
        if (this.modal) {
            this.modal.header = "Ввод запроса в .csv формате"

            this.modal.isDisplaying = true

            this.modal.setSubmitButtonOnClick((inputString: string | undefined) => {
                if (inputString) {
                    this.submitDataToExecuteQuery(inputString)
                }

                if (this.modal) {
                    this.modal.isDisplaying = false
                }
            })
        }
    }

    private submitDataToBuildTree(inputString: string) {
        this.displayResult(TreeCreatorRepository.getInstance().createTree(inputString))
    }

    private submitDataToExecuteQuery(inputString: string) {
        if (this.displayingTreeAsArray) {
            this.displayResult(TreeExpressionExecutorRepository.getInstance().executeExpressionInTree(inputString, this.displayingTreeAsArray))
        } else {
            this.isErrorDisplaying = true
        }
    }

    private submitDataToReduceTree() {
        if (this.displayingTreeAsArray) {
            this.displayResult(TreeReducerRepository.getInstance().reduceTree(this.displayingTreeAsArray))
        } else {
            this.isErrorDisplaying = true
        }
    }

    private displayResult(result: Node[] | null) {
        if (result) {
            this.displayingTreeAsArray = result

            if (this.displayingTree) {
                this.displayingTree.displayingTree = this.displayingTreeAsArray
            }
        } else {
            this.isErrorDisplaying = true
        }
    }

    private initTree() {
        this.displayingTree = this.$refs.tree as Tree
    }

    private initModal() {
        this.modal = this.$refs.modal as Modal
    }

    private initLoadDataButtonOnClick() {
        let loadDataButton = document.getElementById("loadData")

        loadDataButton?.addEventListener("click", () => {
            this.showModalForDataLoading()
        })
    }

    private initExecuteQueryButtonOnClick() {
        let executeQueryButton = document.getElementById("executeQuery")

        executeQueryButton?.addEventListener("click", () => {
            if (this.displayingTreeAsArray) {
                this.showModalForQueryExecuting()

                this.isErrorDisplaying = false
            } else {
                this.isErrorDisplaying = true
            }
        })
    }

    private initReduceTreeButtonOnClick() {
        let reduceTreeButton = document.getElementById("reduceTreeButton")

        reduceTreeButton?.addEventListener("click", () => {
            if (this.displayingTreeAsArray) {
                this.submitDataToReduceTree()

                this.isErrorDisplaying = false
            } else {
                this.isErrorDisplaying = true
            }
        })
    }

    mounted() {
        this.initTree()
        this.initModal()
        this.initLoadDataButtonOnClick()
        this.initExecuteQueryButtonOnClick()
        this.initReduceTreeButtonOnClick()
    }
}
</script>

<style scoped>
.treeCard {
    overflow: auto;
    display: flex;
    justify-content: center;
}

.invisibleCard {
    display: none;
}
</style>
