<template>
    <h1>
        Генетический алгоритм
    </h1>

    <h3>
        Бонусная реализация
    </h3>

    <p>
        Алгоритм, получающий в результате особи Python-код, решающий задачу нахождения n-го числа Фибоначчи<br/>
        <br/>
        У алгоритма отсутствует веб-интерфейс<br/>
        <br/>
        Взаимодействие с ним происходит через собранные исполняемые файлы:<br/>
        <a href="https://github.com/delet-dis/interesting-algorithms/raw/master/src/cppAlgorithms/geneticTask/bin/genetic-task-linux-x64.bin">Linux
            x64</a><br/>
        <a href="https://github.com/delet-dis/interesting-algorithms/raw/master/src/cppAlgorithms/geneticTask/bin/genetic-task-win64.exe">Windows
            x64</a><br/>
        <a href="https://github.com/delet-dis/interesting-algorithms/raw/master/src/cppAlgorithms/geneticTask/bin/genetic-task-mac-arm64.bin">Mac
            ARM64</a><br/>
    </p>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component"

@Options({
    components: {},
})
export default class GeneticText extends Vue {
}
</script>
<style scoped>
a {
    text-decoration: none;
}
</style>
