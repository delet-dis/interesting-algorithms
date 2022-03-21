<template>
    <div class="container" id="container">
        <div class="row">
            <div class="col-lg-3 col-md-12">
                <Card class="descriptionCard">
                    <ClusteringDescription/>
                </Card>
            </div>
            <div class="col-lg-6 col-md-12">
                <Card class="cardCenter clusteringCard" id="clusteringCard">
                    <canvas class="clusterCanvas" id="clusterCanvas"/>
                </Card>
            </div>
            <div class="col-lg-3 col-md-12">
                <Card>
                    <h1>
                        Конфигуратор алгоритма
                    </h1>
                    <p>
                        Количество точек
                    </p>

                    <vue-slider v-model="numberOfClusters" :dotSize="20" :max="10" :min="2"
                                :silent="true"/>

                    <div class="separator"/>

                    <p>
                        Действия с точками
                    </p>

                    <button class="button button-border button-rounded button-action"
                            id="addDotButton">
                        Добавить точку
                    </button>

                    <div class="spacer"/>

                    <button class="button button-border button-rounded button-caution"
                            id="deleteDotButton">
                        Удалить точку
                    </button>

                    <div class="separator"/>

                    <p>
                        Тип кластеризации
                    </p>

                    <button class="button button-border button-rounded button-royal"
                            id="kMeansButton">
                        К-Средних
                    </button>

                    <div class="spacer"/>

                    <button class="button button-border button-rounded button-royal"
                            id="hierarchyButton">
                        Иерархический
                    </button>

                    <div class="spacer"/>

                    <button class="button button-border button-rounded button-primary button-glow"
                            id="comparisonButton">
                        Сравнение алгоритмов
                    </button>
                </Card>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Options, setup, Vue} from 'vue-class-component';
import Card from "@/ui/components/card/Card.vue";
import {useMeta} from "vue-meta";
import "../../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import ClusteringDescription from "@/ui/views/clusteringView/components/ClusteringDescription.vue";
import VueSlider from "vue-slider-component";
import 'vue-slider-component/theme/antd.css'


@Options({
    components: {
        ClusteringDescription,
        Card,
        VueSlider
    },
})
export default class ClusteringView extends Vue {
    meta = setup(() => useMeta({
        title: '📦',
        htmlAttrs: {lang: 'ru', amp: true}
    }))

    private _numberOfClusters = 6

    private get numberOfClusters() {
        return this._numberOfClusters
    }

    private set numberOfClusters(newValue: number) {
        this._numberOfClusters = newValue
    }
}
</script>

<style>
</style>

<style scoped>
.descriptionCard{
    padding-right: 1.3em;
    padding-left: 1.3em;
}

.clusterCanvas {
    width: 100%;
    height: 100%;
}

.clusteringCard {
    height: 0;
    padding-bottom: 100%;
}
</style>
