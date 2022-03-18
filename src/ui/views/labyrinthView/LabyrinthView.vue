<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-12">
                <Card>
                    <LabyrinthDescription/>
                </Card>
            </div>
            <div class="col-lg-6 col-md-12">
                <Card class="cardCenter">
                    <LabyrinthTable :labyrinthSizingProp="getLabyrinthSizing" class="cardCenterChild"/>
                </Card>
            </div>
            <div class="col-lg-3 col-md-12">
                <Card>
                    <LabyrinthConfigurator :labyrinthSizingProp="getLabyrinthSizing"
                                           :isEditableProp="getIsConfigEditable"
                                           v-on:setIsConfigEditable="setIsConfigEditable"
                                           v-on:setLabyrinthSizing="setLabyrinthSizing"/>

                    <div class="separator"/>

                    <button class="button button-border button-rounded generateButton"
                            :class="{'button-primary button-glow':getIsConfigEditable===true,
                            'button-flat': getIsConfigEditable===false}">
                        Сгенерировать лабиринт
                    </button>

                    <div class="separator"/>

                    <button class="button button-border button-rounded generateButton"
                            :class="{'button-action':getIsConfigEditable===true,
                            'button-flat': getIsConfigEditable===false}">
                        Установить старт
                    </button>

                    <div class="spacer"/>

                    <button class="button button-border button-rounded generateButton"
                            :class="{'button-caution':getIsConfigEditable===true,
                            'button-flat': getIsConfigEditable===false}">
                        Установить финиш
                    </button>

                    <div class="spacer"/>

                    <button class="button button-border button-rounded generateButton"
                            :class="{'button-inverse':getIsConfigEditable===true,
                            'button-flat': getIsConfigEditable===false}">
                        Установить границы
                    </button>

                    <div class="separator"/>

                    <button class="button button-border button-rounded generateButton"
                            :class="{'button-inverse':getIsConfigEditable===true,
                            'button-flat': getIsConfigEditable===false}">
                        Очистить
                    </button>
                </Card>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Options, setup, Vue} from 'vue-class-component';
import Card from "@/ui/components/card/Card.vue";
import {useMeta} from "vue-meta";
import LabyrinthDescription from "@/ui/views/labyrinthView/components/LabyrinthDescription.vue";
import LabyrinthTable from "@/ui/views/labyrinthView/components/LabyrinthTable.vue";
import LabyrinthConfigurator from "@/ui/views/labyrinthView/components/LabyrinthConfigurator.vue";


@Options({
    components: {
        LabyrinthConfigurator,
        LabyrinthTable,
        LabyrinthDescription,
        Card
    },
})
export default class LabyrinthView extends Vue {
    meta = setup(() => useMeta({
        title: '🗺',
        htmlAttrs: {lang: 'ru', amp: true}
    }))

    isConfigEditable = true

    labyrinthSizing = 10

    private get getIsConfigEditable() {
        return this.isConfigEditable
    }

    private get getLabyrinthSizing() {
        return this.labyrinthSizing
    }

    private setLabyrinthSizing(newValue: number) {
        this.labyrinthSizing = newValue
    }

    private setIsConfigEditable(newValue: boolean) {
        this.isConfigEditable = newValue
    }
}
</script>

<style>
p {
    font-size: 20px;
}
</style>

<style scoped>
.separator {
    border-top: 2px solid #bbb;
    border-radius: 5px;

    margin-top: 1.4em;

    margin-bottom: 1.4em;
}

.button {
    font-size: 12px;
    width: 100%;
}

.spacer {
    height: 1.4em;
}
</style>
