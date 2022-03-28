<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-10 col-md-12 columnCentered">
                <Card class="descriptionCard">
                    <GeneticText/>
                </Card>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Options, setup, Vue} from 'vue-class-component';
import Card from "@/ui/components/card/Card.vue";
import {useMeta} from "vue-meta";
import GeneticText from "@/ui/views/geneticView/components/GeneticDescription.vue";


@Options({
    components: {
        GeneticText,
        Card
    },
})
export default class GeneticView extends Vue {
    meta = setup(() => useMeta({
        title: '🧬',
        htmlAttrs: { lang: 'ru', amp: true }
    }))
}
</script>

<style scoped>

</style>
