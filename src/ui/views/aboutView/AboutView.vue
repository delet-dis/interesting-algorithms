<template>
    <div class ="container">
        <div class="row">
            <div class="col-lg-10 col-md-12 columnCentered">
                <Card>
                    <AboutText/>
                </Card>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Options, setup, Vue} from 'vue-class-component';
import Card from "@/ui/components/card/Card.vue";
import {useMeta} from "vue-meta";
import AboutText from "@/ui/views/aboutView/components/AboutDescription.vue";
import "../../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";


@Options({
    components: {
        AboutText,
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
</style>
