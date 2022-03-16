<template>
    <table class="table">
        <tbody>
        <tr v-for="n in getLabyrinthSizingProp" :key="n">
            <td v-for="n in getLabyrinthSizingProp" :key="n">z</td>
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
    components: {
    },
})
export default class LabyrinthDescription extends Vue.with(Props) {
    get getLabyrinthSizingProp(){
        return this.labyrinthSizingProp
    }
}
</script>

<style scoped >

</style>
