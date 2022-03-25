<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-12">
                <Card>
                    <AntDescription/>
                </Card>
                <Error id="error" :class="{'error-displaying':isErrorDisplaying}">
                    <h1>
                        Чего-то не хватает
                    </h1>
                    <p>
                        Стоит проверить наличие центра колонии и точек еды
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
                        Конфигуратор алгоритма
                    </h1>

                    <button class="button button-border button-rounded"
                            :class="{'button-primary button-glow activeButton':isConfigEditable===true,
                            'button-flat nonActiveButton': isConfigEditable===false}"
                            id="generateButton">
                        Сгенерировать поле
                    </button>

                    <div class="separator"/>

                    <button class="button button-border button-rounded"
                            :class="{'button-action activeButton':isConfigEditable===true,
                            'button-flat nonActiveButton': isConfigEditable===false}"
                            id="colonyCenterPickingButton">
                        Установить центр колонии
                    </button>

                    <div class="spacer"/>

                    <button class="button button-border button-rounded"
                            :class="{'button-caution activeButton':isConfigEditable===true,
                            'button-flat nonActiveButton': isConfigEditable===false}"
                            id="foodPickingButton">
                        Установить точку еды
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
import {useMeta} from "vue-meta";
import Card from "@/ui/components/card/Card.vue";
import AntDescription from "@/ui/views/antView/components/AntDescription.vue";
import Error from "@/ui/components/error/Error.vue";
import Labyrinth from "@/ui/components/labyrinth/Labyrinth.vue";
import AntViewDisplayType from "@/ui/views/antView/enums/AntViewDisplayType";
import LabyrinthCell from "@/data/models/labyrinth/LabyrinthCell";
import Point from "@/data/models/Point";
import CellDisplayType from "@/data/enums/CellDisplayType";
import LabyrinthCellType from "@/data/enums/LabyrinthCellType";
import LabyrinthSolverRepository from "@/data/repositories/labyrinth/LabyrinthSolverRepository";

@Options({
    components: {
        Labyrinth,
        Error,
        AntDescription,
        Card
    },
})
export default class AntView extends Vue {
    meta = setup(() => useMeta({
        title: '🐜',
        htmlAttrs: {lang: 'ru', amp: true}
    }))

    private isErrorDisplaying = false
    private isConfigEditable = true

    private labyrinthSizing = 29

    private labyrinth: Labyrinth | null = null

    private generateLabyrinth() {
        // TODO: Add generator
        // this.labyrinth?.displayBorderCells(LabyrinthGeneratorRepository.getInstance().generateLabyrinth(this.labyrinthSizing))
    }

    private changeLabyrinthDisplayState(state: AntViewDisplayType) {
        if (this.isConfigEditable) {
            switch (state) {
                case AntViewDisplayType.FOOD_PICKING:
                case AntViewDisplayType.CENTER_PICKING: {
                    this.labyrinth?.clearPreviousResult()
                    this.labyrinth?.removeBorderListener()
                }
            }

            switch (state) {
                case AntViewDisplayType.CENTER_PICKING: {
                    this.labyrinth?.makeCellsSelectableForStart()

                    break
                }
                case AntViewDisplayType.FOOD_PICKING: {
                    // this.labyrinth?.makeCellsSelectableForFinish()

                    break
                }

                case AntViewDisplayType.BORDERS_PICKING: {
                    this.labyrinth?.clearPreviousResult()
                    this.labyrinth?.makeCellsSelectableForBorders()

                    break
                }

                case AntViewDisplayType.DATA_SUBMITTING: {
                    this.labyrinth?.clearCells()
                    this.submitCellsToAlgorithm()

                    break
                }

                case AntViewDisplayType.LABYRINTH_GENERATING: {
                    this.generateLabyrinth()

                    break
                }

                case AntViewDisplayType.LABYRINTH_CLEANING: {
                    this.labyrinth?.resetCellsClasses()

                    break
                }
            }
        }
    }

    private submitCellsToAlgorithm() {
        let cellsArray: LabyrinthCell[][] = new Array(this.labyrinthSizing)

        for (let i = 0; i < this.labyrinthSizing; i++) {
            cellsArray[i] = new Array(this.labyrinthSizing)
        }

        let startCellPoint: Point | null = null
        let foodCellPoints: Point[] = []

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

                if (cell.classList.contains(CellDisplayType.FOOD_CELL)) {
                    if (point) {
                        cellsArray[point.y][point.x] = (new LabyrinthCell(point, LabyrinthCellType.FOOD_CELL))

                        foodCellPoints.push(point)

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

            if (startCellPoint && foodCellPoints.length != 0) {
                this.isErrorDisplaying = false

                // let solverRepositoryResult = LabyrinthSolverRepository.getInstance().getLabyrinthSolution(cellsArray, startCellPoint, finishCellPoint)

                this.isConfigEditable = false

                // this.displayLabyrinthPathsCells(solverRepositoryResult)
            } else {
                this.isErrorDisplaying = true
            }
        }
    }

    private initLabyrinth() {
        this.labyrinth = this.$refs.labyrinth as Labyrinth
    }

    private initColonyCenterPickingButtonOnclickListener() {
        let colonyCenterPickingButton = document.getElementById("colonyCenterPickingButton")

        colonyCenterPickingButton?.addEventListener('click', () => {
            this.changeLabyrinthDisplayState(AntViewDisplayType.CENTER_PICKING)
        })
    }

    private initFoodPickingButtonOnclickListener() {
        let foodPickingButton = document.getElementById("foodPickingButton")

        foodPickingButton?.addEventListener('click', () => {
            this.changeLabyrinthDisplayState(AntViewDisplayType.FOOD_PICKING)
        })
    }

    private initBorderPickingButtonOnclickListener() {
        let borderButton = document.getElementById("borderPickingButton")

        borderButton?.addEventListener('click', () => {
            this.changeLabyrinthDisplayState(AntViewDisplayType.BORDERS_PICKING)
        })
    }

    private initStartButtonOnClickListener() {
        let startButton = document.getElementById("startButton")

        startButton?.addEventListener('click', () => {
            this.changeLabyrinthDisplayState(AntViewDisplayType.DATA_SUBMITTING)
        })
    }

    private initClearButtonOnClickListener() {
        let clearButton = document.getElementById("clearButton")

        clearButton?.addEventListener('click', () => {
            this.changeLabyrinthDisplayState(AntViewDisplayType.LABYRINTH_CLEANING)
        })
    }

    private initGenerateButtonOnClickListener() {
        let generateButton = document.getElementById("generateButton")

        generateButton?.addEventListener('click', () => {
            this.changeLabyrinthDisplayState(AntViewDisplayType.LABYRINTH_GENERATING)
        })
    }

    mounted() {
        this.initLabyrinth()
        this.initGenerateButtonOnClickListener()
        this.initColonyCenterPickingButtonOnclickListener()
        this.initFoodPickingButtonOnclickListener()
        this.initBorderPickingButtonOnclickListener()
        this.initStartButtonOnClickListener()
        this.initClearButtonOnClickListener()
    }
}
</script>

<style scoped>

</style>
