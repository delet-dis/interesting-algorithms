<template>
    <div class="container" id="container">
        <div class="row">
            <div class="col-lg-3 col-md-12">
                <Card class="descriptionCard">
                    <ClusteringDescription/>
                </Card>
                <Error id="error" :class="{'error-displaying':isErrorDisplaying}">
                    <h1>
                        Ошибка
                    </h1>
                    <p>
                        Количество точек меньше количества кластеров
                    </p>
                </Error>
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
                        Количество кластеров
                    </p>

                    <vue-slider v-model="numberOfClusters" :dotSize="20" :max="10" :min="2"
                                :silent="true"/>

                    <div class="separator"/>

                    <p>
                        Действия с точками
                    </p>

                    <button class="button button-border button-rounded button-action"
                            id="addDotButton">
                        Добавить точки
                    </button>

                    <div class="spacer"/>

                    <button class="button button-border button-rounded button-caution"
                            id="removeDotButton">
                        Удалить точки
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
import ClusteringDisplayState from "@/ui/views/clusteringView/enums/ClusteringDisplayState";
import HierarchyClusteringRepository from "@/data/repositories/clustering/HierarchyClusteringRepository";
import Error from "@/ui/components/error/Error.vue";


@Options({
    components: {
        Error,
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

    private clusteringDisplayState: ClusteringDisplayState | null = null
    private isErrorDisplaying = false

    private kMeansColorsArray: string[] | null = null
    private hierarchyColorsArray: string[] | null = null

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

    private static areDotsNearby(firstDot: Dot, secondDot: Dot): boolean {
        let centersDiff = Math.sqrt(Math.pow(firstDot.xCoordinate - secondDot.xCoordinate, 2)) +
            Math.sqrt(Math.pow(firstDot.yCoordinate - secondDot.yCoordinate, 2)) - 25

        return centersDiff <= 25
    }

    private static updateCardSize(card: HTMLElement | null) {
        if (card) {
            card.style.height = card.clientWidth + `px`
        }
    }

    private canvasClickListener = (event: MouseEvent) => {
        let canvasRect = (event.target as Element).getBoundingClientRect()

        switch (this.clusteringDisplayState) {
            case ClusteringDisplayState.DOTS_ADDING: {
                if (canvasRect) {
                    this.clearDots()

                    let dotToAdd = new Dot(
                        event.clientX - canvasRect.left,
                        event.clientY - canvasRect.top
                    )

                    let isAbleToAddDot = true

                    for (let i = 0; i < this.dotsToDisplay.length; i++) {
                        let processingDot = this.dotsToDisplay[i]

                        if (ClusteringView.areDotsNearby(dotToAdd, processingDot)) {
                            isAbleToAddDot = false

                            break
                        }
                    }

                    if (isAbleToAddDot) {
                        let dots = this.dotsToDisplay
                        dots.push(dotToAdd)

                        this.dotsToDisplay = dots
                    }
                }

                break
            }

            case ClusteringDisplayState.DOTS_REMOVING: {
                if (canvasRect) {
                    this.clearDots()

                    let clickDot = new Dot(
                        event.clientX - canvasRect.left,
                        event.clientY - canvasRect.top)

                    for (let i = 0; i < this.dotsToDisplay.length; i++) {
                        let processingDot = this.dotsToDisplay[i]

                        if (ClusteringView.areDotsNearby(clickDot, processingDot)) {
                            let dots = this.dotsToDisplay
                            dots.splice(i, 1)

                            this.dotsToDisplay = dots

                            break
                        }
                    }
                }

                break
            }
        }
    }

    private initCanvasOnClickListener() {
        this.canvas?.addEventListener('click', this.canvasClickListener)
    }

    private removeCanvasClickListener() {
        this.canvas?.removeEventListener('click', this.canvasClickListener)
    }

    private initCanvas() {
        this.canvas = document.getElementById("clusterCanvas") as HTMLCanvasElement
        this.canvasContext = this.canvas.getContext("2d")

        this.updateCanvasSize()
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

    private initAddDotButtonOnClickListener() {
        let addDotButton = document.getElementById("addDotButton")

        addDotButton?.addEventListener('click', () => {
            this.clusteringDisplayState = ClusteringDisplayState.DOTS_ADDING
        })
    }

    private initRemoveDotButtonOnClickListener() {
        let removeDotButton = document.getElementById("removeDotButton")

        removeDotButton?.addEventListener('click', () => {
            this.clusteringDisplayState = ClusteringDisplayState.DOTS_REMOVING
        })
    }

    private initKMeansButtonOnClickListener() {
        let kMeansButton = document.getElementById("kMeansButton")

        kMeansButton?.addEventListener('click', () => {
            if (this.numberOfClusters <= this.dotsToDisplay.length) {
                this.isErrorDisplaying = false

                this.clearDots()

                this.clusteringDisplayState = null

                this.dotsToDisplay = KMeansClusteringRepository
                    .getInstance()
                    .splitByClusters(this.dotsToDisplay, this.numberOfClusters)
            } else {
                this.isErrorDisplaying = true
            }
        })
    }

    private initHierarchyButtonOnClickListener() {
        let hierarchyButton = document.getElementById("hierarchyButton")

        hierarchyButton?.addEventListener('click', () => {
            if (this.numberOfClusters <= this.dotsToDisplay.length) {
                this.isErrorDisplaying = false

                this.clearDots()

                this.clusteringDisplayState = null

                this.dotsToDisplay = HierarchyClusteringRepository
                    .getInstance()
                    .splitByClusters(this.dotsToDisplay, this.numberOfClusters)
            } else {
                this.isErrorDisplaying = true
            }
        })
    }

    private initComparisonButtonOnClickListener() {
        let comparisonButton = document.getElementById("comparisonButton")

        comparisonButton?.addEventListener('click', () => {
            if (this.numberOfClusters <= this.dotsToDisplay.length) {
                this.isErrorDisplaying = false

                this.clearDots()

                this.clusteringDisplayState = null

                this.dotsToDisplay = HierarchyClusteringRepository
                    .getInstance()
                    .splitByClusters(this.dotsToDisplay, this.numberOfClusters)

                this.dotsToDisplay = KMeansClusteringRepository
                    .getInstance()
                    .splitByClusters(this.dotsToDisplay, this.numberOfClusters)
            } else {
                this.isErrorDisplaying = true
            }
        })
    }

    private initContainerWidthListener() {
        new ResizeObserver(() => this.updateCanvasSize()).observe(document.getElementById("container")!)
    }

    private initColorsArrays() {
        this.kMeansColorsArray = ["#ADA8F1", "#474555", "#ACA9BB", "#F69591", "#BB615F", "#574240", "#BFA5A3", "#71823B", "#3F510A", "#E5DBCE"]
        this.hierarchyColorsArray = ["#514438", "#ED992A", "#0090B4", "#B8A89A", "#00C77F", "#00ABBB", "#00C77F", "#00C9DD", "#BEFCFF", "#458084"]
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

                this.canvasContext.lineWidth = 20

                if (dot.hierarchyIndex != null && dot.kMeansIndex != null) {
                    this.canvasContext.arc(dot.xCoordinate, dot.yCoordinate, 10, -Math.PI / 2, Math.PI / 2)

                    if (this.hierarchyColorsArray) {
                        this.canvasContext.strokeStyle = this.hierarchyColorsArray[dot.hierarchyIndex]

                        this.canvasContext.stroke()
                    }

                    this.canvasContext.beginPath()

                    this.canvasContext.arc(dot.xCoordinate, dot.yCoordinate, 10, Math.PI / 2, -Math.PI / 2)

                    if (this.kMeansColorsArray) {
                        this.canvasContext.strokeStyle = this.kMeansColorsArray[dot.kMeansIndex]

                        this.canvasContext.stroke()
                    }
                }

                if (dot.hierarchyIndex != null && dot.kMeansIndex == null) {
                    this.canvasContext.arc(dot.xCoordinate, dot.yCoordinate, 10, 0, 2 * Math.PI)

                    if (this.hierarchyColorsArray) {
                        this.canvasContext.strokeStyle = this.hierarchyColorsArray[dot.hierarchyIndex]
                    }

                    this.canvasContext.stroke()
                }

                if (dot.kMeansIndex != null && dot.hierarchyIndex == null) {
                    this.canvasContext.arc(dot.xCoordinate, dot.yCoordinate, 10, 0, 2 * Math.PI)

                    if (this.kMeansColorsArray) {
                        this.canvasContext.strokeStyle = this.kMeansColorsArray[dot.kMeansIndex]
                    }

                    this.canvasContext.stroke()
                }

                if (dot.kMeansIndex == null && dot.hierarchyIndex == null) {
                    this.canvasContext.arc(dot.xCoordinate, dot.yCoordinate, 10, 0, 2 * Math.PI)

                    this.canvasContext.strokeStyle = "#000000"

                    this.canvasContext.stroke()
                }
            }
        })
    }

    private clearDots() {
        for (let i = 0; i < this.dotsToDisplay.length; i++) {
            this.dotsToDisplay[i].hierarchyIndex = null
            this.dotsToDisplay[i].kMeansIndex = null
        }
    }

    mounted() {
        this.initContainerWidthListener()
        this.initColorsArrays()
        this.initCanvas()
        this.initCardWidthListener()
        this.initAddDotButtonOnClickListener()
        this.initRemoveDotButtonOnClickListener()
        this.initKMeansButtonOnClickListener()
        this.initHierarchyButtonOnClickListener()
        this.initComparisonButtonOnClickListener()
        this.initCanvasOnClickListener()
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
</style>
