<template>
    <table class="table cardCenterChild">
        <tbody>
        <tr v-for="firstIterator in getLabyrinthSizing" :key="firstIterator">
            <td v-for="secondIterator in getLabyrinthSizing" :key="secondIterator"
                :id="`table-cell-` + (secondIterator-1) + `x` + (firstIterator-1)" class="table-cell">
                &nbsp;
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import {Options, prop, Vue} from 'vue-class-component';
import Card from "@/ui/components/card/Card.vue";
import SidebarLinkEntity from "@/data/models/SidebarLinkEntity";

class Props {
    labyrinthSizing: SidebarLinkEntity = prop({
        required: true,
    })
}

@Options({
    components: {Card},
})
export default class Labyrinth extends Vue.with(Props) {
    private get getLabyrinthSizing() {
        return this.labyrinthSizing
    }
}
</script>

<style scoped>
.table {
    table-layout: fixed;
    height: 100%;

    border-spacing: 0;
}

.table-cell {
    width: auto;
    height: auto;

    word-break: break-all;

    border: 1px solid black;

    transition: 0.3s;
}

.table-cell.table-cell-border {
    border: 1px solid #808080;

    background-color: #545454;
}

.table-cell.table-cell-start {
    border: 1px solid #b9e563;

    background-color: #A5DE37;
}

.table-cell.table-cell-finish {
    border: 1px solid #FF4351;

    background-color: #FF4351;
}

.table-cell.table-cell-wrong-path {
    border: 1px solid #fec04e;

    background-color: #FEAE1B;
}

.table-cell.table-cell-correct-path {
    border: 1px solid #a49ef0;

    background-color: #7B72E9;
}

.table-cell.table-cell-startable:hover {
    background-color: #A5DE37;

    opacity: 0.3;
}

.table-cell.table-cell-finishable:hover {
    background-color: #FF4351;

    opacity: 0.3;
}

.table-cell.table-cell-borderable:hover {
    background-color: #545454;

    opacity: 0.3;
}
</style>
