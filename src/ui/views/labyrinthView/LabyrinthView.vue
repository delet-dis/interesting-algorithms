<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-12">
                <Card>
                    <LabyrinthDescription/>
                </Card>
            </div>
            <div class="col-lg-6 col-md-12">
                <Card class = "cardCenter">
                    <LabyrinthTable :labyrinthSizingProp="this.getLabyrinthSizing" class="cardCenterChild"/>
                </Card>
            </div>
            <div class="col-lg-3 col-md-12">
                <Card>
                    <LabyrinthConfigurator :labyrinthSizingProp="this.getLabyrinthSizing" v-on:setLabyrinthSizing="setLabyrinthSizing"/>
                </Card>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Options, setup, Vue} from 'vue-class-component';
import Card from "@/ui/components/card/Card.vue";
import {useMeta} from "vue-meta";
import LabyrinthDescription from "@/ui/views/labyrinthView/components/LabyrinthDescription.vue";
import LabyrinthTable from "@/ui/views/labyrinthView/components/LabyrinthTable.vue";
import LabyrinthConfigurator from "@/ui/views/labyrinthView/components/LabyrinthConfigurator.vue";


@Options({
    components: {
        LabyrinthConfigurator,
        LabyrinthTable,
        LabyrinthDescription,
        Card
    },
})
export default class LabyrinthView extends Vue {
    meta = setup(() => useMeta({
        title: '🗺',
        htmlAttrs: {lang: 'ru', amp: true}
    }))

    labyrinthSizing = 10

    get getLabyrinthSizing(){
        return this.labyrinthSizing
    }

    setLabyrinthSizing(newValue: number) {
        this.labyrinthSizing = newValue
        console.log(this.labyrinthSizing)
    }
}
</script>

<style>
p {
    font-size: 20px;
}
</style>
