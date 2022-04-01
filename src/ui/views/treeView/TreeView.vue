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
                <Card class="treeCard" id="treeCard">
                    <Tree/>
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
                            :class="{'button-primary button-glow activeButton':displayingTree,
                            'button-flat nonActiveButton': displayingTree}"
                            id="reduceTreeButton">
                        Сократить дерево
                    </button>

                    <div class="separator"/>

                    <button class="button button-border button-rounded"
                            :class="{'button-royal activeButton':displayingTree,
                            'button-flat nonActiveButton': displayingTree}"
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
import {Options, Vue} from 'vue-class-component';
import Card from "@/ui/components/card/Card.vue";
import Error from "@/ui/components/error/Error.vue";
import TreeDescription from "@/ui/views/treeView/components/TreeDescription.vue";
import Modal from "@/ui/components/modal/Modal.vue";
import TreeCreatorRepository from "@/data/repositories/tree/TreeCreatorRepository";
import TreeExpressionExecutorRepository from "@/data/repositories/tree/TreeExpressionExecutorRepository";
import Node from "@/data/models/tree/Node";
import TreeReducerRepository from "@/data/repositories/tree/TreeReducerRepository";
import Tree from "@/ui/components/tree/Tree.vue";

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

    private displayingTree: Node[] | null = null

    private showModalForDataLoading() {
        if (this.modal) {
            this.modal.header = "Ввод обучающей выборки в .csv формате"

            this.modal.isDisplaying = true

            this.modal.setSubmitButtonOnClick((inputString: string | undefined) => {
                if (inputString) {
                    this.isErrorDisplaying = false

                    this.submitDataToBuildTree(inputString)
                    this.validateReceivedData()
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
        this.displayingTree = TreeCreatorRepository.getInstance().createTree(inputString)

        this.validateReceivedData()
    }

    private submitDataToExecuteQuery(inputString: string) {
        if (this.displayingTree) {
            this.displayingTree = TreeExpressionExecutorRepository.getInstance().executeExpressionInTree(inputString, this.displayingTree)
        }
    }

    private validateReceivedData() {
        if (!this.displayingTree) {
            this.isErrorDisplaying = true
        }
    }

    private reduceTree() {
        if (this.displayingTree) {
            this.displayingTree = TreeReducerRepository.getInstance().reduceTree(this.displayingTree)
        }
    }

    private initModal() {
        this.modal = this.$refs.modal as Modal
    }

    private initLoadDataButtonOnClick() {
        let loadDataButton = document.getElementById('loadData')

        loadDataButton?.addEventListener('click', () => {
            this.showModalForDataLoading()
        })
    }

    private initExecuteQueryButtonOnClick() {
        let executeQueryButton = document.getElementById('executeQuery')

        executeQueryButton?.addEventListener('click', () => {
            if (this.displayingTree) {
                this.showModalForQueryExecuting()

                this.isErrorDisplaying = false
            } else {
                this.isErrorDisplaying = true
            }
        })
    }

    private initReduceTreeButtonOnClick() {
        let reduceTreeButton = document.getElementById('reduceTreeButton')

        reduceTreeButton?.addEventListener('click', () => {
            if (this.displayingTree) {
                this.reduceTree()

                this.isErrorDisplaying = false
            } else {
                this.isErrorDisplaying = true
            }
        })

    }

    mounted() {
        this.initModal()
        this.initLoadDataButtonOnClick()
        this.initExecuteQueryButtonOnClick()
        this.initReduceTreeButtonOnClick()
    }
}
</script>

<style scoped>
.treeCard{
    overflow: auto;
}
</style>
