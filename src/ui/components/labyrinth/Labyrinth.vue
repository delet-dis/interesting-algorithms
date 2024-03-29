<template>
    <table class="table cardCenterChild" id="table">
        <tbody>
        <tr v-for="firstIterator in getLabyrinthSizing" :key="firstIterator">
            <td v-for="secondIterator in getLabyrinthSizing" :key="secondIterator"
                :id="`table-cell-` + (secondIterator-1) + `x` + (firstIterator-1)" class="table-cell">
                &nbsp;
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import {Options, prop, Vue} from "vue-class-component"
import Card from "@/ui/components/card/Card.vue"
import SidebarLinkEntity from "@/data/models/SidebarLinkEntity"
import CellDisplayType from "@/data/enums/CellDisplayType"
import LabyrinthCellType from "@/data/enums/LabyrinthCellType"
import Point from "@/data/models/Point"
import Cell from "@/data/models/cell/Cell"
import AntCellType from "@/data/enums/AntCellType"

class Props {
    labyrinthSizing: SidebarLinkEntity = prop({
        required: true,
    })
}

@Options({
    components: {Card},
})
export default class Labyrinth extends Vue.with(Props) {
    cells = document.getElementsByClassName(CellDisplayType.CELL)

    foodNutritionalValue = 0

    private updateCellsCollection() {
        this.cells = document.getElementsByClassName(CellDisplayType.CELL)
    }

    public get getCells() {
        this.updateCellsCollection()
        return this.cells
    }

    private startPickingListener = (event: Event) => {
        this.removeFoodListener()

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

    private foodPickingListener = (event: Event) => {
        let cell = (event.target as Element)

        cell.classList.remove(CellDisplayType.START_CELL)
        cell.classList.remove(CellDisplayType.BORDER_CELL)

        if (cell.classList.contains(CellDisplayType.FINISH_CELL)) {
            cell.classList.remove(CellDisplayType.FINISH_CELL)

            cell.removeAttribute("data-nutritionalValue")
        } else {
            cell.classList.add(CellDisplayType.FINISH_CELL)

            cell.setAttribute("data-nutritionalValue", this.foodNutritionalValue.toString())
        }
    }

    private borderPickingListener = (event: Event) => {
        this.removeFoodListener()

        let cell = (event.target as Element)

        cell.classList.remove(CellDisplayType.START_CELL)
        cell.classList.remove(CellDisplayType.FINISH_CELL)

        if (cell.classList.contains(CellDisplayType.BORDER_CELL)) {
            cell.classList.remove(CellDisplayType.BORDER_CELL)
        } else {
            cell.classList.add(CellDisplayType.BORDER_CELL)
        }
    }

    private get getLabyrinthSizing() {
        Labyrinth.updateCardSize()

        return this.labyrinthSizing
    }

    displayBorderCells<T extends Cell>(cells: T[][]) {
        this.removeBorderListener()

        this.resetCellsClasses()

        cells.forEach((subArray) => {
                subArray.forEach((cell) => {
                    let documentCell = document.getElementById(CellDisplayType.CELL + `-` + cell.point.x + `x` + cell.point.y)

                    if (cell.type === LabyrinthCellType.BORDER_CELL || cell.type === AntCellType.BORDER_CELL) {
                        documentCell?.setAttribute("class", CellDisplayType.CELL + " " + CellDisplayType.BORDER_CELL)
                    }
                })
            }
        )
    }

    getCellCoordinates(cell: Element): Point {
        let regex = new RegExp("(\\d*)x(\\d*)", "g")

        let matches = [...cell.id.matchAll(regex)]

        return new Point(Number(matches[0][1]), Number(matches[0][2]))
    }

    private static updateCardSize() {
        let card = document.getElementById("labyrinthCard")
        let table = document.getElementById("table")

        if (card && table) {
            card.style.height = card.clientWidth + `px`
            card.style.height = table.clientHeight + 20 + `px`
        }
    }

    private static initCardWidthListener() {
        Labyrinth.updateCardSize()

        window?.addEventListener("resize", () => {
            Labyrinth.updateCardSize()
        })
    }

    makeCellsSelectableForStart() {
        Array.from(this.cells).forEach((cell) => {
            cell.classList.add(CellDisplayType.STARTABLE_CELL)
            cell.classList.remove(CellDisplayType.START_CELL)
            cell.classList.remove(CellDisplayType.BORDERABLE_CELL)
            cell.classList.remove(CellDisplayType.FINISHABLE_CELL)

            cell.addEventListener("click", this.startPickingListener)
        })
    }

    makeCellsSelectableForFinish() {
        Array.from(this.cells).forEach((cell) => {
            cell.classList.add(CellDisplayType.FINISHABLE_CELL)
            cell.classList.remove(CellDisplayType.FINISH_CELL)
            cell.classList.remove(CellDisplayType.BORDERABLE_CELL)

            cell.addEventListener("click", this.finishPickingListener)
        })
    }

    makeCellsSelectableForFood() {
        Array.from(this.cells).forEach((cell) => {
            cell.classList.add(CellDisplayType.FINISHABLE_CELL)
            cell.classList.remove(CellDisplayType.BORDERABLE_CELL)

            cell.addEventListener("click", this.foodPickingListener)
        })
    }

    makeCellsSelectableForBorders() {
        Array.from(this.cells).forEach((cell) => {
            cell.classList.add(CellDisplayType.BORDERABLE_CELL)

            cell.addEventListener("click", this.borderPickingListener)
        })
    }

    clearPreviousResult() {
        Array.from(this.cells).forEach((cell) => {
            cell.classList.remove(CellDisplayType.WRONG_PATH_CELL)
            cell.classList.remove(CellDisplayType.CORRECT_PATH_CELL)
        })
    }

    resetCellsClasses() {
        Array.from(this.cells).forEach((cell) => {
            cell.setAttribute("class", CellDisplayType.CELL)

            cell.removeAttribute("data-nutritionalValue")
        })
    }

    clearCells() {
        Array.from(this.cells).forEach((cell) => {
            Labyrinth.clearCell(cell)
        })
    }

    private static clearCell(cell: Element) {
        cell.classList.remove(CellDisplayType.STARTABLE_CELL)
        cell.classList.remove(CellDisplayType.FINISHABLE_CELL)
        cell.classList.remove(CellDisplayType.BORDERABLE_CELL)

        cell.classList.remove(CellDisplayType.CORRECT_PATH_CELL)
        cell.classList.remove(CellDisplayType.WRONG_PATH_CELL)
    }

    removeStartListener() {
        Array.from(this.cells).forEach((cell) => {
            cell.removeEventListener("click", this.startPickingListener)
        })
    }

    removeFinishListener() {
        Array.from(this.cells).forEach((cell) => {
            cell.removeEventListener("click", this.finishPickingListener)
        })
    }

    removeFoodListener() {
        Array.from(this.cells).forEach((cell) => {
            cell.removeEventListener("click", this.foodPickingListener)
        })
    }

    removeBorderListener() {
        Array.from(this.cells).forEach((cell) => {
            cell.removeEventListener("click", this.borderPickingListener)
        })
    }

    mounted() {
        Labyrinth.initCardWidthListener()
        this.updateCellsCollection()
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
    border: 1px solid #fc888f;

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
