<template>
    <h1>
        Конфигуратор лабиринта
    </h1>

    <p>
        Размерность поля
    </p>

    <vue-slider v-model="labyrinthSizing" :dotSize = "20" :max="50" :silent="true"/>
</template>

<script lang="ts">
import {Options, prop, Vue} from 'vue-class-component';
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

class Props {
    labyrinthSizingProp: number = prop({
        required: true,
    })
}

@Options({
    components: {VueSlider}, emits: ['setLabyrinthSizing']
})
export default class LabyrinthConfigurator extends Vue.with(Props) {
    set labyrinthSizing(value: number) {
        this.$emit("setLabyrinthSizing", value)
    }

    get labyrinthSizing() {
        return this.labyrinthSizingProp
    }
}
</script>

<style scoped>

</style>
