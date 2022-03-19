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
                                :id="`table-cell-` + (firstIterator-1) + `x` + (secondIterator-1)" class="table-cell">
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

                    <button class="button button-border button-rounded generateButton"
                            :class="{'button-primary button-glow activeButton':isConfigEditable===true,
                            'button-flat nonActiveButton': isConfigEditable===false}" id="generateButton"
                            @click="generateLabyrinth">
                        Сгенерировать лабиринт
                    </button>

                    <div class="separator"/>

                    <button class="button button-border button-rounded generateButton"
                            :class="{'button-action activeButton':isConfigEditable===true,
                            'button-flat nonActiveButton': isConfigEditable===false}"
                            id="startPickingButton">
                        Установить старт
                    </button>

                    <div class="spacer"/>

                    <button class="button button-border button-rounded generateButton"
                            :class="{'button-caution activeButton':isConfigEditable===true,
                            'button-flat nonActiveButton': isConfigEditable===false}"
                            id="finishPickingButton">
                        Установить финиш
                    </button>

                    <div class="spacer"/>

                    <button class="button button-border button-rounded generateButton"
                            :class="{'button-inverse activeButton':isConfigEditable===true,
                            'button-flat nonActiveButton': isConfigEditable===false}">
                        Установить границы
                    </button>

                    <div class="separator"/>

                    <button class="button button-border button-rounded generateButton"
                            :class="{'button-highlight activeButton':isConfigEditable===true,
                            'button-flat nonActiveButton': isConfigEditable===false}">
                        Запустить
                    </button>

                    <div class="spacer"/>

                    <button class="button button-flat button-border button-rounded generateButton"
                            :class="{'activeButton':isConfigEditable===true,
                            'nonActiveButton': isConfigEditable===false}"
                            @click="clearCells">
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

     startPickingListener = (event: Event) => {
        let cell = (event.target as Element)

        LabyrinthView.clearCell(cell)
        cell.classList.remove('finish')
        cell.classList.remove('border')
        cell.classList.add('start')
        LabyrinthView.makeCellsNonSelectable()

        this.removeStartListener()
    }

     finishPickingListener = (event: Event) => {
        let cell = (event.target as Element)

        LabyrinthView.clearCell(cell)
        cell.classList.remove('start')
        cell.classList.remove('border')
        cell.classList.add('finish')
        LabyrinthView.makeCellsNonSelectable()

        this.removeFinishListener()
    }

    private labyrinthCells: LabyrinthCell[][] | null = null

    private get labyrinthSizing() {
        return this._labyrinthSizing
    }

    private set labyrinthSizing(newValue: number) {
        this._labyrinthSizing = newValue

        this.clearCells()
    }

    // private set setPickingState(newValue:PickingState) {
    //     let cells = document.getElementsByClassName(CellDisplayType.CELL)
    //
    //     switch(newValue){
    //         case PickingState.NONE:{
    //             Array.from(cells).forEach((cell) => {
    //                 cell.classList.remove(CellDisplayType.STARTABLE_CELL)
    //                 cell.classList.remove(CellDisplayType.FINISHABLE_CELL)
    //                 cell.classList.remove(CellDisplayType.BORDERABLE_CELL)
    //             })
    //
    //             this.pickingState = newValue
    //         }
    //
    //         case PickingState.START_PICKING:{
    //             Array.from(cells).forEach((cell) => {
    //                 cell.classList.add(CellDisplayType.STARTABLE_CELL)
    //                 cell.classList.remove('start')
    //
    //                 let listener = (event: Event) => {
    //                     let cell = (event.target as Element)
    //
    //                     LabyrinthView.clearCell(cell)
    //                     cell.classList.remove('finish')
    //                     cell.classList.remove('border')
    //                     cell.classList.add('start')
    //                     LabyrinthView.makeCellsNonSelectable()
    //                 }
    //
    //                 cell.addEventListener('click', listener)
    //             })
    //         }
    //     }
    // }

    private removeStartListener(){
        let cells = document.getElementsByClassName(CellDisplayType.CELL)

        Array.from(cells).forEach((cell) => {
            cell.removeEventListener('click', this.startPickingListener)
        })
    }

    private removeFinishListener(){
        let cells = document.getElementsByClassName(CellDisplayType.CELL)

        Array.from(cells).forEach((cell) => {
            cell.removeEventListener('click', this.finishPickingListener)
        })
    }

    private generateLabyrinth() {
        this.setLabyrinthCells(LabyrinthGeneratorRepository.getInstance().generateLabyrinth(this.labyrinthSizing))
    }

    private setLabyrinthCells(newValue: LabyrinthCell[][] | null) {
        this.labyrinthCells = newValue

        this.displayCells(this.labyrinthCells)
    }

    private displayCells(cells: LabyrinthCell[][] | null) {
        this.clearCells()

        if (cells !== null) {
            cells.forEach((subArray) => {
                    subArray.forEach((cell) => {
                        let documentCell = document.getElementById(CellDisplayType.CELL + `-` + cell.xCoordinate + `x` + cell.yCoordinate)

                        switch (cell.type) {
                            case LabyrinthCellType.BORDER_CELL: {
                                documentCell?.setAttribute("class", CellDisplayType.BORDER_CELL)
                                break
                            }

                            case LabyrinthCellType.START_CELL: {
                                documentCell?.setAttribute("class", CellDisplayType.START_CELL)
                                break
                            }

                            case LabyrinthCellType.FINISH_CELL: {
                                documentCell?.setAttribute("class", CellDisplayType.FINISH_CELL)
                                break
                            }
                        }
                    })
                }
            )
        }
    }

    private clearCells() {
        let cells = document.getElementsByClassName(CellDisplayType.CELL)

        Array.from(cells).forEach((cell) => {
            cell.setAttribute("class", CellDisplayType.CELL)
        })
    }

    private static initCardWidthListener() {
        let card = document.getElementById("labyrinthCard")

        LabyrinthView.updateCardSize(card)

        card?.addEventListener('resize', () => {
            LabyrinthView.updateCardSize(card)
        })
    }

    private static updateCardSize(card: HTMLElement | null) {
        if (card != null) {
            card.style.height = card.clientWidth + `px`
        }
    }

    private static makeCellsNonSelectable() {
        let cells = document.getElementsByClassName(CellDisplayType.CELL)

        Array.from(cells).forEach((cell) => {
            LabyrinthView.clearCell(cell)

            // cell.replaceWith(cell.cloneNode(false))
        })
    }

    private static clearCell(cell: Element) {
        cell.classList.remove(CellDisplayType.STARTABLE_CELL)
        cell.classList.remove(CellDisplayType.FINISHABLE_CELL)
        cell.classList.remove(CellDisplayType.BORDERABLE_CELL)
    }

    private makeCellsSelectableForStart() {
        let cells = document.getElementsByClassName(CellDisplayType.CELL)

        Array.from(cells).forEach((cell) => {
            cell.classList.add(CellDisplayType.STARTABLE_CELL)
            cell.classList.remove('start')

            cell.addEventListener('click', this.startPickingListener)
        })
    }

    private makeCellsSelectableForFinish() {
        let cells = document.getElementsByClassName(CellDisplayType.CELL)

        Array.from(cells).forEach((cell) => {
            cell.classList.add(CellDisplayType.FINISHABLE_CELL)
            cell.classList.remove('finish')

            cell.addEventListener('click', this.finishPickingListener)
        })
    }

    private static makeCellsSelectableForBorders() {
        let cells = document.getElementsByClassName(CellDisplayType.CELL)

        Array.from(cells).forEach((cell) => {
            cell.setAttribute("class", CellDisplayType.CELL + CellDisplayType.BORDERABLE_CELL)
        })
    }

    private initStartPickingButtonOnclickListener() {
        let startButton = document.getElementById("startPickingButton")

        startButton?.addEventListener('click', () => {
            this.makeCellsSelectableForStart()
        })
    }

    private initFinishPickingButtonOnclickListener() {
        let finishButton = document.getElementById("finishPickingButton")

        finishButton?.addEventListener('click', () => {
            this.makeCellsSelectableForFinish()
        })
    }

    mounted() {
        LabyrinthView.initCardWidthListener()
        this.initStartPickingButtonOnclickListener()
        this.initFinishPickingButtonOnclickListener()
    }
}
</script>

<style>
p {
    font-size: 20px;
}
</style>

<style scoped>
h1 {
    overflow-wrap: break-word;
}

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

.table-cell.border {
    border: 1px solid #545454;

    background-color: #545454;
}

.table-cell.start {
    border: 1px solid #A5DE37;

    background-color: #A5DE37;
}

.table-cell.finish {
    border: 1px solid #FF4351;

    background-color: #FF4351;
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

.separator {
    border-top: 2px solid #bbb;
    border-radius: 5px;

    margin-top: 1.4em;
    margin-bottom: 1.4em;
}

.spacer {
    height: 1.4em;
}

.button {
    font-size: 15px;
    width: 100%;
    overflow: hidden;
}
</style>
