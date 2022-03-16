<template>
    <div class ="container">
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
export default class AboutView extends Vue {
    meta = setup(() => useMeta({
        title: '🏠',
        htmlAttrs: { lang: 'ru', amp: true }
    }))
}
</script>

<style scoped>
    @import "bootstrap/dist/css/bootstrap-grid.min.css";

    .container{
        margin-top: 0.5em;
        margin-bottom: 0.5em;
    }
</style>
