<template>
    <table class="table">
        <tbody>
        <tr v-for="firstIterator in getLabyrinthSizingProp" :key="firstIterator">
            <td v-for="secondIterator in getLabyrinthSizingProp" :key="secondIterator"
                :class="`table-cell-` + firstIterator + `x` + secondIterator" class="table-cell">&nbsp;
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import {Options, prop, Vue} from 'vue-class-component';

class Props {
    labyrinthSizingProp: number = prop({
        required: true,
    })
}

@Options({
    components: {},
})
export default class LabyrinthDescription extends Vue.with(Props) {
    private get getLabyrinthSizingProp() {
        return this.labyrinthSizingProp
    }
}
</script>

<style scoped>
.table {
    width: 30vw;
    height: 30vw;

    border-spacing: 0px;
}

.table-cell {
    border: 1px solid black;
}


</style>
