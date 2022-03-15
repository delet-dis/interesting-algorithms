<template>
    <Card>Test</Card>
</template>

<script lang="ts">
import {Options, setup, Vue} from 'vue-class-component';
import Card from "@/components/card/Card.vue";
import {useMeta} from "vue-meta";


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

</style>
