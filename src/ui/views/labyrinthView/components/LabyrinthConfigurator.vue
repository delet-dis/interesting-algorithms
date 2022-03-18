<template>
    <h1>
        Конфигуратор лабиринта
    </h1>

    <p>
        Размерность поля
    </p>

    <vue-slider v-model="labyrinthSizing" :disabled="!isEditable" :dotSize = "20" :max="40" :min="5" :silent="true"/>

    <div class="separator"/>

    <button class="button button-border button-rounded generateButton"
            :class="{'button-primary button-glow':isEditable===true,
                            'button-flat': isEditable===false}">
        Сгенерировать лабиринт
    </button>

    <div class="separator"/>

    <button class="button button-border button-rounded generateButton"
            :class="{'button-action':isEditable===true,
                            'button-flat': isEditable===false}">
        Установить старт
    </button>

    <div class="spacer"/>

    <button class="button button-border button-rounded generateButton"
            :class="{'button-caution':isEditable===true,
                            'button-flat': isEditable===false}">
        Установить финиш
    </button>

    <div class="spacer"/>

    <button class="button button-border button-rounded generateButton"
            :class="{'button-inverse':isEditable===true,
                            'button-flat': isEditable===false}">
        Установить границы
    </button>

    <div class="separator"/>

    <button class="button button-border button-rounded generateButton"
            :class="{'button-inverse':getIsConfigEditable===true,
                            'button-flat': getIsConfigEditable===false}">
        Очистить
    </button>
</template>

<script lang="ts">
import {Options, prop, Vue} from 'vue-class-component';
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

class Props {
    labyrinthSizingProp: number = prop({
        required: true,
    })

    isEditableProp: boolean = prop({
        required: true,
    })
}

@Options({
    components: {VueSlider}, emits: ['setLabyrinthSizing', 'setIsConfigEditable']
})
export default class LabyrinthConfigurator extends Vue.with(Props) {
    set labyrinthSizing(value: number) {
        this.$emit("setLabyrinthSizing", value)
    }

    get labyrinthSizing() {
        return this.labyrinthSizingProp
    }

    private get isEditable(){
        return this.isEditableProp
    }
}
</script>

<style scoped>
.separator {
    border-top: 2px solid #bbb;
    border-radius: 5px;

    margin-top: 1.4em;

    margin-bottom: 1.4em;
}

.button {
    font-size: 15px;
    width: 100%;
}

.spacer {
    height: 1.4em;
}
</style>
