<template>
    <div class="container" id="container">
        <div class="row">
            <div class="col-lg-3 col-md-12">
                <Card>
                    <LabyrinthDescription/>
                </Card>
                <Error id="error" :class="{'error-displaying':isErrorDisplaying}">
                    <h1>
                        Чего-то не хватает
                    </h1>
                    <p>
                        Стоит проверить наличие финиша и старта
                    </p>
                </Error>
            </div>
            <div class="col-lg-6 col-md-12">
                <Card class="cardCenter labyrinthCard" id="labyrinthCard">
                    <Labyrinth :labyrinthSizing="labyrinthSizing" ref="labyrinth"/>
                </Card>
            </div>
            <div class="col-lg-3 col-md-12">
                <Card>
                    <h1>
                        Конфигуратор лабиринта
                    </h1>

                    <p>
                        Размерность поля
                    </p>

                    <vue-slider v-model="labyrinthSizing" :disabled="!isConfigEditable" :dotSize="20" :max="29" :min="5"
                                :silent="true"/>

                    <div class="separator"/>

                    <button class="button button-border button-rounded"
                            :class="{'button-primary button-glow activeButton':isConfigEditable===true,
                            'button-flat nonActiveButton': isConfigEditable===false}"
                            id="generateButton">
                        Сгенерировать лабиринт
                    </button>

                    <div class="separator"/>

                    <button class="button button-border button-rounded"
                            :class="{'button-action activeButton':isConfigEditable===true,
                            'button-flat nonActiveButton': isConfigEditable===false}"
                            id="startPickingButton">
                        Установить старт
                    </button>

                    <div class="spacer"/>

                    <button class="button button-border button-rounded"
                            :class="{'button-caution activeButton':isConfigEditable===true,
                            'button-flat nonActiveButton': isConfigEditable===false}"
                            id="finishPickingButton">
                        Установить финиш
                    </button>

                    <div class="spacer"/>

                    <button class="button button-border button-rounded"
                            :class="{'button-inverse activeButton':isConfigEditable===true,
                            'button-flat nonActiveButton': isConfigEditable===false}"
                            id="borderPickingButton">
                        Установить границы
                    </button>

                    <div class="separator"/>

                    <button class="button button-border button-rounded"
                            :class="{'button-highlight activeButton':isConfigEditable===true,
                            'button-flat nonActiveButton': isConfigEditable===false}"
                            id="startButton">
                        Запустить
                    </button>

                    <div class="spacer"/>

                    <button class="button button-flat button-border button-rounded"
                            :class="{'activeButton':isConfigEditable===true,
                            'nonActiveButton': isConfigEditable===false}"
                            id="clearButton">
                        Очистить
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
import LabyrinthDescription from "@/ui/views/labyrinthView/components/LabyrinthDescription.vue";
import LabyrinthCell from "@/data/models/labyrinth/LabyrinthCell";
import LabyrinthGeneratorRepository from "@/data/repositories/labyrinth/LabyrinthGeneratorRepository";
import VueSlider from "vue-slider-component";
import 'vue-slider-component/theme/antd.css'
import LabyrinthCellType from "@/data/enums/LabyrinthCellType";
import CellDisplayType from "@/data/enums/CellDisplayType";
import Point from "@/data/models/Point";
import LabyrinthSolverRepository from "@/data/repositories/labyrinth/LabyrinthSolverRepository";
import LabyrinthSolution from "@/data/models/labyrinth/LabyrinthSolution";
import LabyrinthViewDisplayType from "@/ui/views/labyrinthView/enums/LabyrinthViewDisplayType";
import Error from "@/ui/components/error/Error.vue";
import Labyrinth from "@/ui/components/labyrinth/Labyrinth.vue";


@Options({
    components: {
        Labyrinth,
        LabyrinthDescription,
        VueSlider,
        Card,
        Error
    },
})
export default class LabyrinthView extends Vue {
    meta = setup(() => useMeta({
        title: '🗺',
        htmlAttrs: {lang: 'ru', amp: true}
    }))

    private isConfigEditable = true
    private labyrinthSizingField = 10
    private isErrorDisplaying = false

    private labyrinth: Labyrinth | null = null

    private get labyrinthSizing() {
        return this.labyrinthSizingField
    }

    private set labyrinthSizing(newValue: number) {
        this.labyrinthSizingField = newValue

        this.labyrinth?.resetCellsClasses()

        this.updateCellsCollection()
    }

    private updateCellsCollection() {
        if (this.labyrinth) {
            this.labyrinth.cells = document.getElementsByClassName(CellDisplayType.CELL)
        }
    }

    private generateLabyrinth() {
        this.labyrinth?.displayBorderCells<LabyrinthCell>(LabyrinthGeneratorRepository.getInstance().generateLabyrinth(this.labyrinthSizing))
    }

    private changeLabyrinthDisplayState(state: LabyrinthViewDisplayType) {
        if (this.isConfigEditable) {
            switch (state) {
                case LabyrinthViewDisplayType.FINISH_PICKING:
                case LabyrinthViewDisplayType.START_PICKING: {
                    this.labyrinth?.clearPreviousResult()
                    this.labyrinth?.removeBorderListener()
                }
            }

            switch (state) {
                case LabyrinthViewDisplayType.START_PICKING: {
                    this.labyrinth?.makeCellsSelectableForStart()

                    break
                }
                case LabyrinthViewDisplayType.FINISH_PICKING: {
                    this.labyrinth?.makeCellsSelectableForFinish()

                    break
                }

                case LabyrinthViewDisplayType.BORDERS_PICKING: {
                    this.labyrinth?.clearPreviousResult()
                    this.labyrinth?.makeCellsSelectableForBorders()

                    break
                }

                case LabyrinthViewDisplayType.DATA_SUBMITTING: {
                    this.labyrinth?.clearCells()
                    this.submitCellsToSolver()

                    break
                }

                case LabyrinthViewDisplayType.LABYRINTH_GENERATING: {
                    this.generateLabyrinth()

                    break
                }

                case LabyrinthViewDisplayType.LABYRINTH_CLEANING: {
                    this.labyrinth?.resetCellsClasses()

                    break
                }
            }
        }
    }

    private async displayLabyrinthPathsCells(solution: LabyrinthSolution) {
        let cells = solution.processedCells

        for (let i = 0; i < cells.length; i++) {
            let documentCell = document.getElementById(CellDisplayType.CELL + `-` + cells[i].point.x + `x` + cells[i].point.y)

            documentCell?.classList.add(CellDisplayType.WRONG_PATH_CELL)

            await new Promise(resolve => setTimeout(resolve, 300))
        }

        await this.displayLabyrinthCorrectPathCells(solution.correctPathCells)
    }

    private async displayLabyrinthCorrectPathCells(cells: LabyrinthCell[]) {
        for (let i = 0; i < cells.length; i++) {
            let documentCell = document.getElementById(CellDisplayType.CELL + `-` + cells[i].point.x + `x` + cells[i].point.y)

            documentCell?.classList.add(CellDisplayType.CORRECT_PATH_CELL)

            await new Promise(resolve => setTimeout(resolve, 100))
        }

        this.isConfigEditable = true
    }

    private initLabyrinth() {
        this.labyrinth = this.$refs.labyrinth as Labyrinth
    }

    private initStartPickingButtonOnclickListener() {
        let startButton = document.getElementById("startPickingButton")

        startButton?.addEventListener('click', () => {
            this.changeLabyrinthDisplayState(LabyrinthViewDisplayType.START_PICKING)
        })
    }

    private initFinishPickingButtonOnclickListener() {
        let finishButton = document.getElementById("finishPickingButton")

        finishButton?.addEventListener('click', () => {
            this.changeLabyrinthDisplayState(LabyrinthViewDisplayType.FINISH_PICKING)
        })
    }

    private initBorderPickingButtonOnclickListener() {
        let borderButton = document.getElementById("borderPickingButton")

        borderButton?.addEventListener('click', () => {
            this.changeLabyrinthDisplayState(LabyrinthViewDisplayType.BORDERS_PICKING)
        })
    }

    private initStartButtonOnClickListener() {
        let startButton = document.getElementById("startButton")

        startButton?.addEventListener('click', () => {
            this.changeLabyrinthDisplayState(LabyrinthViewDisplayType.DATA_SUBMITTING)
        })
    }

    private initClearButtonOnClickListener() {
        let clearButton = document.getElementById("clearButton")

        clearButton?.addEventListener('click', () => {
            this.changeLabyrinthDisplayState(LabyrinthViewDisplayType.LABYRINTH_CLEANING)
        })
    }

    private initGenerateButtonOnClickListener() {
        let generateButton = document.getElementById("generateButton")

        generateButton?.addEventListener('click', () => {
            this.changeLabyrinthDisplayState(LabyrinthViewDisplayType.LABYRINTH_GENERATING)
        })
    }

    private submitCellsToSolver() {
        let cellsArray: LabyrinthCell[][] = new Array(this.labyrinthSizing)

        for (let i = 0; i < this.labyrinthSizing; i++) {
            cellsArray[i] = new Array(this.labyrinthSizing)
        }

        let startCellPoint: Point | null = null
        let finishCellPoint: Point | null = null

        if (this.labyrinth) {
            Array.from(this.labyrinth.cells).forEach((cell) => {
                let point = this.labyrinth?.getCellCoordinates(cell)

                if (cell.classList.contains(CellDisplayType.START_CELL)) {
                    if (point) {
                        cellsArray[point.y][point.x] = (new LabyrinthCell(point, LabyrinthCellType.START_CELL))

                        startCellPoint = point

                        return
                    }
                }

                if (cell.classList.contains(CellDisplayType.FINISH_CELL)) {
                    if (point) {
                        cellsArray[point.y][point.x] = (new LabyrinthCell(point, LabyrinthCellType.FINISH_CELL))

                        finishCellPoint = point

                        return
                    }
                }

                if (cell.classList.contains(CellDisplayType.BORDER_CELL)) {
                    if (point) {
                        cellsArray[point.y][point.x] = (new LabyrinthCell(point, LabyrinthCellType.BORDER_CELL))

                        return
                    }
                }

                if (point) {
                    cellsArray[point.y][point.x] = (new LabyrinthCell(point, LabyrinthCellType.EMPTY_CELL))
                }
            })

            if (startCellPoint && finishCellPoint) {
                this.isErrorDisplaying = false

                let solverRepositoryResult = LabyrinthSolverRepository.getInstance().getLabyrinthSolution(cellsArray, startCellPoint, finishCellPoint)

                this.isConfigEditable = false

                this.displayLabyrinthPathsCells(solverRepositoryResult)
            } else {
                this.isErrorDisplaying = true
            }
        }
    }

    mounted() {
        this.initLabyrinth()
        this.initStartPickingButtonOnclickListener()
        this.initFinishPickingButtonOnclickListener()
        this.initBorderPickingButtonOnclickListener()
        this.initStartButtonOnClickListener()
        this.initClearButtonOnClickListener()
        this.initGenerateButtonOnClickListener()
    }
}
</script>

<style scoped>

</style>
