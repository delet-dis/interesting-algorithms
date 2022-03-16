<template>
    <h1>
        Приветик 👋🏻
    </h1>

    <h2>
        Этот проект - решение задания шестого модуля HITS
    </h2>

    <h3>
        Над ним работали:
    </h3>

    <p>
      Ефимов Игорь
    </p>

    <p>
      Алексей Браун
    </p>

    <p>
      Артем Трушкин
    </p>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
    components: {
    },
})
export default class AboutText extends Vue {
}
</script>

<style scoped>
p{
font-size: 20px;
}
</style>
