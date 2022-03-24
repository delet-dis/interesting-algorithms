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

                    <p>
                        Первый пункт
                    </p>

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
        htmlAttrs: { lang: 'ru', amp: true }
    }))

    private isErrorDisplaying = false

    private labyrinthSizing = 29
}
</script>

<style scoped>

</style>
