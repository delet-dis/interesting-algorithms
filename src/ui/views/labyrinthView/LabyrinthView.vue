<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-12">
                <Card>
                    <LabyrinthDescription/>
                </Card>
            </div>
            <div class="col-lg-6 col-md-12">
                <Card>
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                    </table>
                </Card>
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
import LabyrinthDescription from "@/ui/views/labyrinthView/components/LabyrinthDescription.vue";


@Options({
    components: {
        LabyrinthDescription,
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
/*@import "../../../../node_modules/bootstrap/scss/_tables.scss";*/
</style>
