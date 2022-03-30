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
                <Card class="cardCenter treeCard" id="treeCard">
                    Дерево
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
                            :class="{'button-primary button-glow activeButton':isTreeLoaded===true,
                            'button-flat nonActiveButton': isTreeLoaded===false}"
                            id="reduceTreeButton">
                        Сократить дерево
                    </button>

                    <div class="separator"/>

                    <button class="button button-border button-rounded"
                            :class="{'button-royal activeButton':isTreeLoaded===true,
                            'button-flat nonActiveButton': isTreeLoaded===false}"
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

@Options({
    components: {
        TreeDescription,
        Card,
        Error,
        Modal
    },
})
export default class TreeView extends Vue {
    private isErrorDisplaying = false
    private isTreeLoaded = false

    private modal: Modal | null = null

    private showModalForDataLoading() {
        if (this.modal) {
            this.modal.header = "Ввод обучающей выборки в .csv формате"

            this.modal.isDisplaying = true

            this.modal.setSubmitButtonOnClick((inputString: string | undefined) => {
                if (inputString) {
                    this.isErrorDisplaying = false

                    this.submitDataToBuildTree(inputString)
                }

                this.modal!.isDisplaying = false
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

                this.modal!.isDisplaying = false
            })
        }
    }

    private submitDataToBuildTree(inputString: string) {
        console.log('submit')
    }

    private submitDataToExecuteQuery(inputString: string) {
        console.log('execute')
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
            if (this.isTreeLoaded) {
                this.showModalForQueryExecuting()

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
    }
}
</script>

<style scoped>

</style>
