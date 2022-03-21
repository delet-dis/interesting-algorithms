<template>
    <div class="container" id="container">
        <div class="row">
            <div class="col-lg-3 col-md-12">
                <Card>
                    <LabyrinthDescription/>
                </Card>
            </div>
            <div class="col-lg-6 col-md-12">
                <Card class="cardCenter labyrinthCard" id="labyrinthCard">
                    <table class="table cardCenterChild">
                        <tbody>
                        <tr v-for="firstIterator in labyrinthSizing" :key="firstIterator">
                            <td v-for="secondIterator in labyrinthSizing" :key="secondIterator"
                                :id="`table-cell-` + (secondIterator-1) + `x` + (firstIterator-1)" class="table-cell">
                                &nbsp;
                            </td>
                        </tr>
                        </tbody>
                    </table>
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
import "../../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import CellDisplayType from "@/ui/views/labyrinthView/enums/CellDisplayType";
import Point from "@/data/models/labyrinth/Point";
import LabyrinthSolverRepository from "@/data/repositories/labyrinth/LabyrinthSolverRepository";
import LabyrinthSolution from "@/data/models/labyrinth/LabyrinthSolution";


@Options({
    components: {
        LabyrinthDescription,
        VueSlider,
        Card
    },
})
export default class LabyrinthView extends Vue {
    meta = setup(() => useMeta({
        title: '🗺',
        htmlAttrs: {lang: 'ru', amp: true}
    }))

    private isConfigEditable = true
    private _labyrinthSizing = 10

    private cells = document.getElementsByClassName(CellDisplayType.CELL)

    private get labyrinthSizing() {
        return this._labyrinthSizing
    }

    private set labyrinthSizing(newValue: number) {
        this._labyrinthSizing = newValue

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

    private static updateCardSize(card: HTMLElement | null) {
        if (card) {
            card.style.height = card.clientWidth + `px`
        }
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
            if (this.isConfigEditable) {
                this.clearPreviousResult()
                this.removeBorderListener()
                this.makeCellsSelectableForStart()
            }
        })
    }

    private initFinishPickingButtonOnclickListener() {
        let finishButton = document.getElementById("finishPickingButton")

        finishButton?.addEventListener('click', () => {
            if (this.isConfigEditable) {
                this.clearPreviousResult()
                this.removeBorderListener()
                this.makeCellsSelectableForFinish()
            }
        })
    }

    private initBorderPickingButtonOnclickListener() {
        let borderButton = document.getElementById("borderPickingButton")

        borderButton?.addEventListener('click', () => {
            if (this.isConfigEditable) {
                this.clearPreviousResult()
                this.makeCellsSelectableForBorders()
            }
        })
    }

    private initStartButtonOnClickListener() {
        let startButton = document.getElementById("startButton")

        startButton?.addEventListener('click', () => {
            if (this.isConfigEditable) {
                this.clearCells()
                this.submitCellsToSolver()
            }
        })
    }

    private initClearButtonOnClickListener() {
        let clearButton = document.getElementById("clearButton")

        clearButton?.addEventListener('click', () => {
            if (this.isConfigEditable) {
                this.resetCellsClasses()
            }
        })
    }

    private initGenerateButtonOnClickListener() {
        let generateButton = document.getElementById("generateButton")

        generateButton?.addEventListener('click', () => {
            if (this.isConfigEditable) {
                this.generateLabyrinth()
            }
        })
    }

    private static initCardWidthListener() {
        let card = document.getElementById("labyrinthCard")

        LabyrinthView.updateCardSize(card)

        card?.addEventListener('resize', () => {
            LabyrinthView.updateCardSize(card)
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
            let solverRepositoryResult = LabyrinthSolverRepository.getInstance().getLabyrinthSolution(cellsArray, startCellPoint, finishCellPoint)

            this.isConfigEditable = false

            this.displayLabyrinthPathsCells(solverRepositoryResult)
        }
    }

    mounted() {
        LabyrinthView.initCardWidthListener()
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
