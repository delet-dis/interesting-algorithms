<template>
    <Card>Test</Card>
</template>

<script lang="ts">
import {Options, setup, Vue} from 'vue-class-component';
import Card from "@/ui/components/card/Card.vue";
import {useMeta} from "vue-meta";
import LabyrinthCell from "@/data/models/LabyrinthCell";
import LabyrinthCellType from "@/data/enums/LabyrinthCellType";


@Options({
    components: {
        Card
    },
})
export default class App extends Vue {
    meta = setup(() => useMeta({
        title: '🏠',
        htmlAttrs: { lang: 'ru', amp: true }
    }))
}
</script>

<style scoped>
    @import "bootstrap/dist/css/bootstrap-grid.min.css";
</style>
