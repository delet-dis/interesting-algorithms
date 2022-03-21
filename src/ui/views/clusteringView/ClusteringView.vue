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
                    <canvas class="clusterCanvas" id="clusterCanvas" ref="clusterCanvas"/>
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
import Dot from "@/data/models/clustering/Dot";
import KMeansClusteringRepository from "@/data/repositories/clustering/KMeansClusteringRepository";


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

    private _dotsToDisplay: Dot[] = []
    private _numberOfClusters = 6
    private canvas: HTMLCanvasElement | null = null
    private canvasContext: CanvasRenderingContext2D | null = null

    private set dotsToDisplay(newValue: Dot[]) {
        this._dotsToDisplay = newValue

        this.drawDots()
    }

    private get dotsToDisplay() {
        return this._dotsToDisplay
    }

    private get numberOfClusters() {
        return this._numberOfClusters
    }

    private set numberOfClusters(newValue: number) {
        this._numberOfClusters = newValue
    }

    private drawDots() {
        if (this.canvas) {
            this.canvasContext?.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.canvasContext?.beginPath()
            this.canvasContext?.closePath()
        }

        this.dotsToDisplay.forEach((dot) => {
            if (this.canvasContext) {
                this.canvasContext.moveTo(dot.xCoordinate, dot.yCoordinate)

                this.canvasContext.beginPath()

                this.canvasContext.arc(dot.xCoordinate, dot.yCoordinate, 10, 0, 2 * Math.PI)

                this.canvasContext.lineWidth = 20
                this.canvasContext.strokeStyle = "#000000"

                this.canvasContext.stroke()
            }
        })
    }

    private addDotListener = (event: MouseEvent) => {
        let canvasRect = (event.target as Element).getBoundingClientRect()

        if (canvasRect) {
            let dotToAdd = new Dot(
                event.clientX - canvasRect.left,
                event.clientY - canvasRect.top
            )

            let dots = this.dotsToDisplay
            dots.push(dotToAdd)

            this.dotsToDisplay = dots
        }
        this.removeAddDotListener()
    }

    private removeAddDotListener() {
        this.canvas?.removeEventListener('click', this.addDotListener)
    }

    private makeCanvasAbleToAddDot() {
        this.canvas?.addEventListener('click', this.addDotListener)
    }

    private initAddDotButtonOnClickListener() {
        let addDotButton = document.getElementById("addDotButton")

        addDotButton?.addEventListener('click', () => {
            this.makeCanvasAbleToAddDot()
        })
    }

    private initCanvas() {
        this.canvas = document.getElementById("clusterCanvas") as HTMLCanvasElement
        this.canvasContext = this.canvas.getContext("2d")

        this.updateCanvasSize()
    }

    private updateCanvasSize() {
        let clusteringCard = document.getElementById("clusteringCard")

        if (clusteringCard) {
            if (this.canvas) {
                let clusteringCardOffsetWidth = clusteringCard!.offsetWidth - 30
                let clusteringCardOffsetHeight = clusteringCard!.offsetHeight - 40

                this.canvas.width = clusteringCardOffsetWidth
                this.canvas.height = clusteringCardOffsetHeight

                this.canvas.style.width = clusteringCardOffsetWidth + "px"
                this.canvas.style.height = clusteringCardOffsetHeight + "px"
            }
        }
        this.drawDots()
    }

    private static updateCardSize(card: HTMLElement | null) {
        if (card) {
            card.style.height = card.clientWidth + `px`
        }
    }

    private initCardWidthListener() {
        let card = document.getElementById("clusteringCard")

        ClusteringView.updateCardSize(card)
        this.updateCanvasSize()

        window?.addEventListener('resize', () => {
            ClusteringView.updateCardSize(card)
            this.updateCanvasSize()
        })
    }

    private initKMeansButtonOnClickListener() {
        let kMeansButton = document.getElementById("kMeansButton")

        kMeansButton?.addEventListener('click', () => {
            console.log(KMeansClusteringRepository.getInstance().splitByClusters(this.dotsToDisplay, this.numberOfClusters))
        })
    }

    mounted() {
        this.initCardWidthListener()
        this.initCanvas()
        this.initAddDotButtonOnClickListener()
        this.initKMeansButtonOnClickListener()
    }
}
</script>

<style>
</style>

<style scoped>
.descriptionCard {
    padding-right: 1.3em;
    padding-left: 1.3em;
}

.clusterCanvas {
    border-radius: 0.5em;

    border: 3px solid #808080;
}

.clusteringCard {
}
</style>
