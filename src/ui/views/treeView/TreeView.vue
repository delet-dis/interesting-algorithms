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
                            id="startPickingButton">
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
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import Card from "@/ui/components/card/Card.vue";
import Error from "@/ui/components/error/Error.vue";
import TreeDescription from "@/ui/views/treeView/components/TreeDescription.vue";

@Options({
    components: {
        TreeDescription,
        Card,
        Error
    },
})
export default class TreeView extends Vue {
    private isErrorDisplaying = false
    private isTreeLoaded = false
}
</script>

<style scoped>

</style>
