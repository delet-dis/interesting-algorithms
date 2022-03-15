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

.card {
    transition: all 0.5s;
    position: relative;
}

.card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.3s;
}

.card:hover::before {
    opacity: 0;
    transform: scale(0.5, 0.5);
}

.card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border: 1px solid rgba(255, 255, 255, 0.5);
    transform: scale(1.2, 1.2);
}

.card:hover::after {
    opacity: 1;
    transform: scale(1, 1);
}
</style>
