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

<style scoped>
.card {
    height: fit-content;

    padding: 1em 2em;

    border-radius: 0.5em;

    box-shadow: 0 3px 11px -4px rgba(34, 60, 80, 0.6);
}
</style>
