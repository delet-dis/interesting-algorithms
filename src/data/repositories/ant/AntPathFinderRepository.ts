import AntBase from "@/data/interfaces/ant/AntBase";
import {BehaviorSubject, from, map, Observable, of, tap} from "rxjs";
import AntCell from "@/data/models/ant/AntCell";
import Ant from "@/data/classes/ant/Ant";
import AntCellType from "@/data/enums/AntCellType";
import point from "@/data/models/Point";

class AntPathFinderRepository extends AntBase {
    private static instance: AntPathFinderRepository

    public static getInstance(): AntPathFinderRepository {
        if (!AntPathFinderRepository.instance) {
            AntPathFinderRepository.instance = new AntPathFinderRepository()
        }

        return AntPathFinderRepository.instance
    }

    public mapState: BehaviorSubject<AntCell[]> = new BehaviorSubject<AntCell[]>([])
    public iterationCounter: BehaviorSubject<number> = new BehaviorSubject<number>(0)

    public isWorking = true

    private intervalExecutorNumber: NodeJS.Timer | undefined = undefined

    public set setIsWorking(newValue: boolean) {
        this.isWorking = newValue

        if (!this.isWorking) {
            clearInterval()
        }
    }

    public provideDataForCalculation(cells: AntCell[][], size: number): void {
        const labyrinth: AntCell[][] = cells
        const colonySize = 2000
        let possDir: AntCell[] = []
        const colony: Ant[] = []
        let bestWay: AntCell[] = []
        let bestWayLength = 999
        let startpos: AntCell = new AntCell(new point(-1, -1), AntCellType.EMPTY_CELL, 0, 0)
        for (let i = 0; i < 15; i++) {
            for (let j = 0; j < 15; j++) {
                if (labyrinth[i][j].type == AntCellType.CENTER_CELL) {
                    startpos = labyrinth[i][j]
                }
            }
        }
        for (let i = 0; i < colonySize; i++) {
            colony[i] = new Ant(startpos)
        }

        this.intervalExecutorNumber = (setInterval(() => {
            if (this.isWorking) {
                for (let i = 0; i < colony.length; i++) {
                    for (; ;) {
                        possDir = colony[i].FindPossibleWays(labyrinth, size, colony.length)
                        if (!colony[i].ChooseDirection(labyrinth, possDir)) {
                            // console.log( colony[i].curPosition.point.x, colony[i].curPosition.point.y, possDir[0].point.x, possDir[0].point.y)
                            if (colony[i].curPosition.type == AntCellType.FOOD_CELL) {
                                if (colony[i].curPosition.nutritionalValue) {
                                    colony[i].foodUsefulness = colony[i].curPosition.nutritionalValue!
                                }
                                // console.log(colony[i].curPosition.nutritionalValue)
                            } else {
                                colony[i].foodUsefulness = 0


                            }
                            break
                        }
                        possDir = []
                    }
                }
                for (let o = 0; o < size; o++) {
                    for (let p = 0; p < size; p++) {
                        labyrinth[o][p].numberOfPheromones = (0.4 * labyrinth[o][p].numberOfPheromones)
                    }
                }
                for (let i = 0; i < colony.length; i++) {
                    // console.log(i, colony[i].way,  colony[i].curPosition)
                    if (colony[i].foodUsefulness > 0) {
                        if (colony[i].way.length < bestWayLength) {
                            bestWayLength = colony[i].way.length
                            bestWay = colony[i].way
                        }
                        for (let j = 0; j < colony[i].way.length; j++) {
                            labyrinth[colony[i].way[j].point.y][colony[i].way[j].point.x].numberOfPheromones += ((colony[i].foodUsefulness) / (colony[i].way.length))
                            // console.log(labyrinth[colony[i].way[j].yCoordinate][colony[i].way[j].xCoordinate].numberOfPheromones, 10 / colony[i].way.length, colony[i].way[j].yCoordinate,colony[i].way[j].xCoordinate)
                        }
                    }

                }

                this.mapState.next(bestWay)

                this.iterationCounter.next(this.iterationCounter.value + 1)

                for (let i = 0; i < colony.length; i++) {
                    colony[i].foodUsefulness = 0
                    colony[i].way = []
                    colony[i].curPosition = startpos
                }
            }else{
                clearInterval(this.intervalExecutorNumber!)
            }
        }, 100))
    }

}

export default AntPathFinderRepository
