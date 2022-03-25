<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-12">
                <Card>
                    <AntDescription/>
                </Card>
                <Error id="error" :class="{'error-displaying':isErrorDisplaying}">
                    <h1>
                        Чего-то не хватает
                    </h1>
                    <p>
                        Тут будет ошибочка
                    </p>
                </Error>
            </div>
            <div class="col-lg-6 col-md-12">
                <Card class="cardCenter labyrinthCard" id="labyrinthCard">
                    <Labyrinth :labyrinthSizing="labyrinthSizing"/>
                </Card>
            </div>
            <div class="col-lg-3 col-md-12">
                <Card>
                    <h1>
                        Конфигуратор алгоритма
                    </h1>

                    <button class="button button-border button-rounded"
                            :class="{'button-primary button-glow activeButton':isConfigEditable===true,
                            'button-flat nonActiveButton': isConfigEditable===false}"
                            id="generateButton">
                        Сгенерировать поле
                    </button>

                    <div class="separator"/>

                    <button class="button button-border button-rounded"
                            :class="{'button-action activeButton':isConfigEditable===true,
                            'button-flat nonActiveButton': isConfigEditable===false}"
                            id="colonyPickingButton">
                        Установить центр колонии
                    </button>

                    <div class="spacer"/>

                    <button class="button button-border button-rounded"
                            :class="{'button-caution activeButton':isConfigEditable===true,
                            'button-flat nonActiveButton': isConfigEditable===false}"
                            id="finishPickingButton">
                        Установить точку еды
                    </button>

                    <div class="separator"/>

                    <button class="button button-border button-rounded"
                            :class="{'button-highlight activeButton':isConfigEditable===true,
                            'button-flat nonActiveButton': isConfigEditable===false}"
                            id="startButton">
                        Запустить
                    </button>

                    <div class="spacer"/>

                    <button class="button button-flat button-border button-rounded"
                            :class="{'activeButton':isConfigEditable===true,
                            'nonActiveButton': isConfigEditable===false}"
                            id="clearButton">
                        Очистить
                    </button>

                </Card>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Options, setup, Vue} from 'vue-class-component';
import {useMeta} from "vue-meta";
import Card from "@/ui/components/card/Card.vue";
import AntDescription from "@/ui/views/antView/components/AntDescription.vue";
import Error from "@/ui/components/error/Error.vue";
import Labyrinth from "@/ui/components/labyrinth/Labyrinth.vue";

@Options({
    components: {
        Labyrinth,
        Error,
        AntDescription,
        Card
    },
})
export default class AntView extends Vue {
    meta = setup(() => useMeta({
        title: '🐜',
        htmlAttrs: {lang: 'ru', amp: true}
    }))

    private isErrorDisplaying = false
    private isConfigEditable = true

    private labyrinthSizing = 29



}
</script>

<style scoped>

</style>
