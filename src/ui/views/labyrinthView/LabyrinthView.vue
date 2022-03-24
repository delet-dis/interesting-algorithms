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
                    <Labyrinth :labyrinthSizing="labyrinthSizing"/>
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
import CellDisplayType from "@/ui/views/labyrinthView/enums/CellDisplayType";
import Point from "@/data/models/Point";
import LabyrinthSolverRepository from "@/data/repositories/labyrinth/LabyrinthSolverRepository";
import LabyrinthSolution from "@/data/models/labyrinth/LabyrinthSolution";
import LabyrinthDisplayType from "@/ui/views/labyrinthView/enums/LabyrinthDisplayType";
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

    private cells = document.getElementsByClassName(CellDisplayType.CELL)

    private get labyrinthSizing() {
        return this.labyrinthSizingField
    }

    private set labyrinthSizing(newValue: number) {
        this.labyrinthSizingField = newValue

        this.resetCellsClasses()

        this.updateCellsCollection()
    }

    private startPickingListener = (event: Event) => {
        let cell = (event.target as Element)

        this.clearCells()
        cell.classList.remove(CellDisplayType.FINISH_CELL)
        cell.classList.remove(CellDisplayType.BORDER_CELL)
        cell.classList.add(CellDisplayType.START_CELL)

        this.removeStartListener()
    }

    private finishPickingListener = (event: Event) => {
        let cell = (event.target as Element)

        this.clearCells()
        cell.classList.remove(CellDisplayType.START_CELL)
        cell.classList.remove(CellDisplayType.BORDER_CELL)
        cell.classList.add(CellDisplayType.FINISH_CELL)

        this.removeFinishListener()
    }

    private borderPickingListener = (event: Event) => {
        let cell = (event.target as Element)

        cell.classList.remove(CellDisplayType.START_CELL)
        cell.classList.remove(CellDisplayType.FINISH_CELL)
        cell.classList.add(CellDisplayType.BORDER_CELL)
    }

    private removeStartListener() {
        Array.from(this.cells).forEach((cell) => {
            cell.removeEventListener('click', this.startPickingListener)
        })
    }

    private removeFinishListener() {
        Array.from(this.cells).forEach((cell) => {
            cell.removeEventListener('click', this.finishPickingListener)
        })
    }

    private removeBorderListener() {
        Array.from(this.cells).forEach((cell) => {
            cell.removeEventListener('click', this.borderPickingListener)
        })
    }

    private updateCellsCollection() {
        this.cells = document.getElementsByClassName(CellDisplayType.CELL)
    }

    private generateLabyrinth() {
        this.displayGeneratedCells(LabyrinthGeneratorRepository.getInstance().generateLabyrinth(this.labyrinthSizing))

        this.removeBorderListener()
    }

    private displayGeneratedCells(cells: LabyrinthCell[][]) {
        this.resetCellsClasses()

        cells.forEach((subArray) => {
                subArray.forEach((cell) => {
                    let documentCell = document.getElementById(CellDisplayType.CELL + `-` + cell.point.x + `x` + cell.point.y)

                    if (cell.type === LabyrinthCellType.BORDER_CELL) {
                        documentCell?.setAttribute("class", CellDisplayType.CELL + " " + CellDisplayType.BORDER_CELL)
                    }
                })
            }
        )
    }

    private changeLabyrinthDisplayState(state: LabyrinthDisplayType) {
        if (this.isConfigEditable) {
            switch (state) {
                case LabyrinthDisplayType.FINISH_PICKING:
                case LabyrinthDisplayType.START_PICKING: {
                    this.clearPreviousResult()
                    this.removeBorderListener()
                }
            }

            switch (state) {
                case LabyrinthDisplayType.START_PICKING: {
                    this.makeCellsSelectableForStart()

                    break
                }
                case LabyrinthDisplayType.FINISH_PICKING: {
                    this.makeCellsSelectableForFinish()

                    break
                }

                case LabyrinthDisplayType.BORDERS_PICKING: {
                    this.clearPreviousResult()
                    this.makeCellsSelectableForBorders()

                    break
                }

                case LabyrinthDisplayType.DATA_SUBMITTING: {
                    this.clearCells()
                    this.submitCellsToSolver()

                    break
                }

                case LabyrinthDisplayType.LABYRINTH_GENERATING: {
                    this.generateLabyrinth()

                    break
                }

                case LabyrinthDisplayType.LABYRINTH_CLEANING: {
                    this.resetCellsClasses()

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

    private static getCellCoordinates(cell: Element): Point {
        let regex = new RegExp("(\\d*)x(\\d*)", "g")

        let matches = [...cell.id.matchAll(regex)]

        return new Point(Number(matches[0][1]), Number(matches[0][2]))
    }

    private resetCellsClasses() {
        Array.from(this.cells).forEach((cell) => {
            cell.setAttribute("class", CellDisplayType.CELL)
        })
    }

    private clearCells() {
        Array.from(this.cells).forEach((cell) => {
            LabyrinthView.clearCell(cell)
        })
    }

    private static clearCell(cell: Element) {
        cell.classList.remove(CellDisplayType.STARTABLE_CELL)
        cell.classList.remove(CellDisplayType.FINISHABLE_CELL)
        cell.classList.remove(CellDisplayType.BORDERABLE_CELL)

        cell.classList.remove(CellDisplayType.CORRECT_PATH_CELL)
        cell.classList.remove(CellDisplayType.WRONG_PATH_CELL)
    }

    private makeCellsSelectableForStart() {
        Array.from(this.cells).forEach((cell) => {
            cell.classList.add(CellDisplayType.STARTABLE_CELL)
            cell.classList.remove(CellDisplayType.START_CELL)
            cell.classList.remove(CellDisplayType.BORDERABLE_CELL)

            cell.addEventListener('click', this.startPickingListener)
        })
    }

    private makeCellsSelectableForFinish() {
        Array.from(this.cells).forEach((cell) => {
            cell.classList.add(CellDisplayType.FINISHABLE_CELL)
            cell.classList.remove(CellDisplayType.FINISH_CELL)
            cell.classList.remove(CellDisplayType.BORDERABLE_CELL)

            cell.addEventListener('click', this.finishPickingListener)
        })
    }

    private makeCellsSelectableForBorders() {
        Array.from(this.cells).forEach((cell) => {
            cell.classList.add(CellDisplayType.BORDERABLE_CELL)

            cell.addEventListener('click', this.borderPickingListener)
        })
    }

    private clearPreviousResult() {
        Array.from(this.cells).forEach((cell) => {
            cell.classList.remove(CellDisplayType.WRONG_PATH_CELL)
            cell.classList.remove(CellDisplayType.CORRECT_PATH_CELL)
        })
    }

    private initStartPickingButtonOnclickListener() {
        let startButton = document.getElementById("startPickingButton")

        startButton?.addEventListener('click', () => {
            this.changeLabyrinthDisplayState(LabyrinthDisplayType.START_PICKING)
        })
    }

    private initFinishPickingButtonOnclickListener() {
        let finishButton = document.getElementById("finishPickingButton")

        finishButton?.addEventListener('click', () => {
            this.changeLabyrinthDisplayState(LabyrinthDisplayType.FINISH_PICKING)
        })
    }

    private initBorderPickingButtonOnclickListener() {
        let borderButton = document.getElementById("borderPickingButton")

        borderButton?.addEventListener('click', () => {
            this.changeLabyrinthDisplayState(LabyrinthDisplayType.BORDERS_PICKING)
        })
    }

    private initStartButtonOnClickListener() {
        let startButton = document.getElementById("startButton")

        startButton?.addEventListener('click', () => {
            this.changeLabyrinthDisplayState(LabyrinthDisplayType.DATA_SUBMITTING)
        })
    }

    private initClearButtonOnClickListener() {
        let clearButton = document.getElementById("clearButton")

        clearButton?.addEventListener('click', () => {
            this.changeLabyrinthDisplayState(LabyrinthDisplayType.LABYRINTH_CLEANING)
        })
    }

    private initGenerateButtonOnClickListener() {
        let generateButton = document.getElementById("generateButton")

        generateButton?.addEventListener('click', () => {
            this.changeLabyrinthDisplayState(LabyrinthDisplayType.LABYRINTH_GENERATING)
        })
    }

    private submitCellsToSolver() {
        let cellsArray: LabyrinthCell[][] = new Array(this.labyrinthSizing)

        for (let i = 0; i < this.labyrinthSizing; i++) {
            cellsArray[i] = new Array(this.labyrinthSizing)
        }

        let startCellPoint: Point | null = null
        let finishCellPoint: Point | null = null

        Array.from(this.cells).forEach((cell) => {
            let point = LabyrinthView.getCellCoordinates(cell)

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

    mounted() {
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
