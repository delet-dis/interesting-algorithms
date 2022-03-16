<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-12">
                <Card>Test</Card>
            </div>
            <div class="col-lg-6 col-md-12">
                <Card>Test</Card>
            </div>
            <div class="col-lg-3 col-md-12">
                <Card>Test</Card>
            </div>
        </div>
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
        title: '🗺',
        htmlAttrs: {lang: 'ru', amp: true}
    }))
}
</script>

<style scoped>

</style>
