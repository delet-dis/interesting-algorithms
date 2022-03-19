<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-12">
                <Card>
                    <LabyrinthDescription/>
                </Card>
            </div>
            <div class="col-lg-6 col-md-12">
                <Card class="cardCenter labyrinthCard">
                    <table class="table cardCenterChild">
                        <tbody>
                        <tr v-for="firstIterator in labyrinthSizing" :key="firstIterator">
                            <td v-for="secondIterator in labyrinthSizing" :key="secondIterator"
                                :id="`table-cell-` + (firstIterator-1) + `x` + (secondIterator-1)" class="table-cell">&nbsp;
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

                    <vue-slider v-model="labyrinthSizing" :disabled="!isConfigEditable" :dotSize="20" :max="40" :min="5"
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
                            'button-flat nonActiveButton': isConfigEditable===false}">
                        Установить старт
                    </button>

                    <div class="spacer"/>

                    <button class="button button-border button-rounded generateButton"
                            :class="{'button-caution activeButton':isConfigEditable===true,
                            'button-flat nonActiveButton': isConfigEditable===false}">
                        Установить финиш
                    </button>

                    <div class="spacer"/>

                    <button class="button button-border button-rounded generateButton"
                            :class="{'button-inverse activeButton':isConfigEditable===true,
                            'button-flat nonActiveButton': isConfigEditable===false}">
                        Установить границы
                    </button>

                    <div class="separator"/>

                    <button class="button button-flat button-border button-rounded generateButton"
                            :class="{'activeButton':isConfigEditable===true,
                            'nonActiveButton': isConfigEditable===false}">
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

    isConfigEditable = true

    labyrinthSizing = 10

    private labyrinthCells: LabyrinthCell[][] | null = null

    private generateLabyrinth() {
        this.setLabyrinthCells(LabyrinthGeneratorRepository.getInstance().generateLabyrinth(this.labyrinthSizing))
    }

    private setLabyrinthCells(newValue: LabyrinthCell[][] | null) {
        this.labyrinthCells = newValue

        this.displayCells(this.labyrinthCells)
    }

    private displayCells(cells: LabyrinthCell[][] | null) {
        LabyrinthView.clearCells()

        if (cells !== null) {
            cells.forEach((subArray) => {
                    subArray.forEach((cell) => {
                        let documentCell = document.getElementById(`table-cell-` + cell.xCoordinate + `x` + cell.yCoordinate)

                        switch (cell.type) {
                            case LabyrinthCellType.BORDER_CELL: {
                                documentCell?.setAttribute("class", "table-cell border")
                                break
                            }

                            case LabyrinthCellType.START_CELL: {
                                documentCell?.setAttribute("class", "table-cell start")
                                break
                            }

                            case LabyrinthCellType.FINISH_CELL: {
                                documentCell?.setAttribute("class", "table-cell finish")
                                break
                            }
                        }
                    })
                }
            )
        }
    }

    private static clearCells() {
        let cells = document.getElementsByClassName("table-cell")

        Array.from(cells).forEach((cell) => {
            cell.setAttribute("class", "table-cell")
        })
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
    width: 30vw;
    height: 30vw;

    border-spacing: 0;
}

.table-cell {
    border: 1px solid black;
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

.separator {
    border-top: 2px solid #bbb;
    border-radius: 5px;

    margin-top: 1.4em;
    margin-bottom: 1.4em;
}

.button {
    font-size: 15px;
    width: 100%;
    overflow: hidden;
}

.spacer {
    height: 1.4em;
}
</style>
