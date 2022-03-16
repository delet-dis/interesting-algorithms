<template>
    <div class="container">
        test
    </div>
</template>

<script lang="ts">
import {Options, setup, Vue} from 'vue-class-component';
import Card from "@/ui/components/card/Card.vue";
import {useMeta} from "vue-meta";


@Options({
    components: {
        Card
    },
})
export default class LabyrinthView extends Vue {
    meta = setup(() => useMeta({
        title: '🏠',
        htmlAttrs: {lang: 'ru', amp: true}
    }))
}
</script>

<style scoped>

</style>
