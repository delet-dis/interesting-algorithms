<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-12">
                <Card>
                    <NeuralDescription/>
                </Card>
                <Error id="error" :class="{'error-displaying':isErrorDisplaying}">
                    <h1>
                        Выглядит красиво, но
                    </h1>
                    <p>
                        Стоит что-нибудь нарисовать
                    </p>
                </Error>
            </div>
            <div class="col-lg-6 col-md-12">
                <Card class="cardCenter neuralCard" id="neuralCard">
                    <canvas class="neuralCanvas" id="neuralCanvas" ref="neuralCanvas"/>
                </Card>
            </div>
            <div class="col-lg-3 col-md-12">
                <Card>
                    <h1>
                        Конфигуратор алгоритма
                    </h1>

                    <button class="button button-border button-rounded"
                            :class="{'button-action activeButton':isAbleToStart===true,
                            'button-flat nonActiveButton': isAbleToStart===false}"
                            id="submitButton">
                        Запустить алгоритм
                    </button>

                    <div class="spacer"/>

                    <button class="button button-flat button-border button-rounded activeButton"
                            id="clearButton">
                        Очистить
                    </button>
                </Card>
                <Card class="resultCard" :class="{'result-displaying':!isErrorDisplaying && calculationResult!=null}">
                    <h1>
                        Результат:
                    </h1>
                    <h2>
                        {{ this.calculationResult }}
                    </h2>
                </Card>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Options, setup, Vue} from 'vue-class-component';
import Card from "@/ui/components/card/Card.vue";
import {useMeta} from "vue-meta";
import NeuralDescription from "@/ui/views/neuralView/components/NeuralDescription.vue";
import Error from "@/ui/components/error/Error.vue";
import DrawingState from "@/ui/views/neuralView/enums/DrawingState";
import NeuralAlgorithmRepository from "@/data/repositories/neural/NeuralAlgorithmRepository";


@Options({
    components: {
        NeuralDescription,
        Card,
        Error
    },
})
export default class NeuralView extends Vue {
    meta = setup(() => useMeta({
        title: '🧠',
        htmlAttrs: {lang: 'ru', amp: true}
    }))

    private isErrorDisplaying = false
    private isAbleToStart = false

    private canvas: HTMLCanvasElement | null = null
    private canvasContext: CanvasRenderingContext2D | null = null

    private isLineDrawing = false
    private startX = 0
    private startY = 0

    private calculationResult: number | null = null

    private static updateCardSize(card: HTMLElement | null) {
        if (card) {
            card.style.height = card.clientWidth + `px`
        }
    }

    private updateCanvasSize() {
        let clusteringCard = document.getElementById("neuralCard")

        if (clusteringCard) {
            if (this.canvas) {
                let clusteringCardOffsetWidth = clusteringCard.offsetWidth - 30
                let clusteringCardOffsetHeight = clusteringCard.offsetHeight - 40

                this.canvas.width = clusteringCardOffsetWidth
                this.canvas.height = clusteringCardOffsetHeight

                this.canvas.style.width = clusteringCardOffsetWidth + "px"
                this.canvas.style.height = clusteringCardOffsetHeight + "px"
            }
        }
    }

    private displayResult(result: number) {
        this.calculationResult = result
    }

    private changeCanvasDrawingState(state: DrawingState, event: MouseEvent | Touch | null = null) {
        this.isAbleToStart = !this.isCanvasBlank()

        if (event) {
            switch (state) {
                case DrawingState.MOUSE_DOWN: {
                    let canvasRect = (event.target as Element).getBoundingClientRect()

                    this.isLineDrawing = true

                    this.startX = event.clientX - canvasRect.left
                    this.startY = event.clientY - canvasRect.top

                    break
                }

                case DrawingState.MOUSE_UP: {

                    this.isLineDrawing = false

                    break
                }

                case DrawingState.MOUSE_OUT: {

                    this.isLineDrawing = false

                    break
                }

                case DrawingState.MOUSE_MOVE: {
                    if (this.isLineDrawing) {
                        let canvasRect = (event.target as Element).getBoundingClientRect()

                        let mouseX = event.clientX - canvasRect.left
                        let mouseY = event.clientY - canvasRect.top

                        if (this.canvasContext) {
                            this.canvasContext.beginPath()

                            this.canvasContext.lineWidth = 15
                            this.canvasContext.lineCap = "round"

                            this.canvasContext.moveTo(this.startX, this.startY)
                            this.canvasContext.lineTo(mouseX, mouseY)

                            this.canvasContext.stroke()
                        }

                        this.startX = mouseX
                        this.startY = mouseY
                    }

                    break
                }
            }
        } else {
            if (state == DrawingState.CLEANING) {
                this.clearCanvas()

                this.isAbleToStart = false
            }
        }
    }

    private clearCanvas() {
        if (this.canvas) {
            this.canvasContext?.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.canvasContext?.beginPath()
            this.canvasContext?.closePath()
        }
    }

    private isCanvasBlank(): boolean {
        if (this.canvas && this.canvasContext) {
            const pixelBuffer = new Uint32Array(
                this.canvasContext.getImageData(0, 0, this.canvas.width, this.canvas.height).data.buffer
            );

            return !pixelBuffer.some(color => color !== 0);
        }

        return false
    }

    private initCanvas() {
        this.canvas = document.getElementById("neuralCanvas") as HTMLCanvasElement
        this.canvasContext = this.canvas.getContext("2d")

        this.updateCanvasSize()
    }

    private initCardWidthListener() {
        let card = document.getElementById("neuralCard")

        NeuralView.updateCardSize(card)
        this.updateCanvasSize()

        window?.addEventListener('resize', () => {
            NeuralView.updateCardSize(card)
            this.updateCanvasSize()
        })
    }

    private canvasMouseDownListener(event: MouseEvent) {
        this.changeCanvasDrawingState(DrawingState.MOUSE_DOWN, event)
    }

    private canvasMouseUpListener(event: MouseEvent) {
        this.changeCanvasDrawingState(DrawingState.MOUSE_UP, event)
    }

    private canvasMouseOutListener(event: MouseEvent) {
        this.changeCanvasDrawingState(DrawingState.MOUSE_OUT, event)
    }

    private canvasMouseMoveListener(event: MouseEvent) {
        this.changeCanvasDrawingState(DrawingState.MOUSE_MOVE, event)
    }

    private canvasTouchStartListener(event: TouchEvent) {
        event.preventDefault()

        this.changeCanvasDrawingState(DrawingState.MOUSE_DOWN, event.touches[0])
    }

    private canvasTouchMoveListener(event: TouchEvent) {
        event.preventDefault()

        this.changeCanvasDrawingState(DrawingState.MOUSE_MOVE, event.touches[0])
    }

    private canvasTouchEndListener(event: TouchEvent) {
        event.preventDefault()

        this.changeCanvasDrawingState(DrawingState.MOUSE_UP, event.touches[0])
    }

    private initCanvasMouseEvents() {
        this.canvas?.addEventListener('mousedown', this.canvasMouseDownListener)
        this.canvas?.addEventListener('mouseup', this.canvasMouseUpListener)
        this.canvas?.addEventListener('mouseout', this.canvasMouseOutListener)
        this.canvas?.addEventListener('mousemove', this.canvasMouseMoveListener)

        this.canvas?.addEventListener('touchstart', this.canvasTouchStartListener)
        this.canvas?.addEventListener('touchmove', this.canvasTouchMoveListener)
        this.canvas?.addEventListener('touchend', this.canvasTouchEndListener)
    }

    private initSubmitButtonOnClickListener() {
        let submitButton = document.getElementById("submitButton")

        submitButton?.addEventListener('click', () => {
            this.isErrorDisplaying = this.isCanvasBlank()

            let canvasAsDataUrl = this.canvas?.toDataURL()

            if (canvasAsDataUrl) {
                this.displayResult(NeuralAlgorithmRepository.getInstance().detectDisplayingNumber(canvasAsDataUrl))
            }
        })
    }

    private initClearButtonOnClickListener() {
        let clearButton = document.getElementById("clearButton")

        clearButton?.addEventListener('click', () => {
            this.changeCanvasDrawingState(DrawingState.CLEANING)
        })
    }

    mounted() {
        this.initCanvas()
        this.initCardWidthListener()
        this.initCanvasMouseEvents()
        this.initSubmitButtonOnClickListener()
        this.initClearButtonOnClickListener()
    }
}
</script>

<style scoped>
.neuralCanvas {
    border-radius: 0.5em;

    border: 3px solid #808080;
}

.resultCard {
    background: #8bc220;
    color: white;

    opacity: 0;

    display: none;
}

.resultCard.result-displaying {
    display: block;
    opacity: 1;
}
</style>
