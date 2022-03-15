<template>
    <div class="card">
        <slot/>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
    components: {},
})
export default class Card extends Vue {
}
</script>

<style>
:root {
    --cardBackroundColor: #FBFBFB;
}
</style>

<style scoped>
.card {
    width: fit-content;
    height: fit-content;

    padding: 2em;

    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07),
    0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07),
    0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07),
    0 32px 64px rgba(0, 0, 0, 0.07);

    background-color: var(--cardBackroundColor);

    border-radius: 0.5em;
}
</style>
