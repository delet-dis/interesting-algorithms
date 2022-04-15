import AntBase from "@/data/interfaces/ant/AntBase"
import {BehaviorSubject} from "rxjs"
import AntCell from "@/data/models/ant/AntCell"
import Ant from "@/data/classes/ant/Ant"
import AntCellType from "@/data/enums/AntCellType"
import point from "@/data/models/Point"

class AntPathFinderRepository extends AntBase {
    private static instance: AntPathFinderRepository

    public static getInstance(): AntPathFinderRepository {
        if (!AntPathFinderRepository.instance) {
            AntPathFinderRepository.instance = new AntPathFinderRepository()
        }

        return AntPathFinderRepository.instance
    }
    private bestWayNutritionalValue=0.1
    private currentWay: AntCell[] = []
    private bestWay: AntCell[]=[]
    private labyrinth: AntCell[][]=[]
    private bestWayLength = Number.MAX_VALUE
    public mapState: BehaviorSubject<AntCell[]> = new BehaviorSubject<AntCell[]>([])
    public iterationCounter: BehaviorSubject<number> = new BehaviorSubject<number>(0)
    public mapBestState: BehaviorSubject<AntCell[]>=new BehaviorSubject<AntCell[]>([])
    public isWorking = true

    private intervalExecutorNumber: NodeJS.Timer | undefined = undefined

    public set setIsWorking(newValue: boolean) {
        this.isWorking = newValue

        if (!this.isWorking) {
            clearInterval()
        }
    }

    private clearPreviousResult() {
        this.currentWay = []
        this.bestWay= []
        this.bestWayLength = Number.MAX_VALUE
        this.mapState.next([])
        this.mapBestState.next([])
        this.iterationCounter.next(0)
    }

    public provideDataForCalculation(cells: AntCell[][], size: number): void {
         this.labyrinth = cells

        const colonySize = 2000

        let possibleDirections: AntCell[] = []
        const ants: Ant[] = []

        let startingPosition: AntCell = new AntCell(new point(-1, -1), AntCellType.EMPTY_CELL, 0, 0)

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (this.labyrinth[i][j].type == AntCellType.CENTER_CELL) {
                    startingPosition = this.labyrinth[i][j]
                }
            }
        }

        for (let i = 0; i < colonySize; i++) {
            ants[i] = new Ant(startingPosition)
        }

        this.intervalExecutorNumber = (setInterval(() => {
            if (this.isWorking) {
                for (let i = 0; i < ants.length; i++) {
                    for (; ;) {
                        possibleDirections = ants[i].findPossibleWays(this.labyrinth, size)

                        if (!ants[i].chooseDirection(this.labyrinth, possibleDirections)) {
                            if (ants[i].currentPosition.type == AntCellType.FOOD_CELL) {
                                if (ants[i].currentPosition.nutritionalValue) {
                                    ants[i].nutritionalValue = ants[i].currentPosition.nutritionalValue!
                                }
                            } else {
                                ants[i].nutritionalValue = 0
                            }
                            break
                        }
                        possibleDirections = []
                    }
                }

                for (let o = 0; o < size; o++) {
                    for (let p = 0; p < size; p++) {
                        this.labyrinth[o][p].numberOfPheromones = (0.95 * this.labyrinth[o][p].numberOfPheromones)
                    }
                }

                for (let i = 0; i < ants.length; i++) {
                    if (ants[i].nutritionalValue > 0) {

                            if(ants[i].way.length*(1/ants[i].nutritionalValue)<this.bestWayLength*(1/this.bestWayNutritionalValue)){
                            this.bestWayNutritionalValue=ants[i].nutritionalValue
                            this.bestWayLength = ants[i].way.length
                            this.bestWay=ants[i].way

                            }

                            this.currentWay = ants[i].way
                            this.currentWay.splice(0,1)
                        for (let j = 0; j < ants[i].way.length; j++) {
                            this.labyrinth[ants[i].way[j].point.y][ants[i].way[j].point.x].numberOfPheromones += ((Math.pow(ants[i].nutritionalValue,4)) / (Math.pow(ants[i].way.length,4)))
                        }
                    }
                }

                this.mapState.next(this.currentWay)
                this.mapBestState.next(this.bestWay)
                this.iterationCounter.next(this.iterationCounter.value + 1)

                for (let i = 0; i < ants.length; i++) {
                    ants[i].nutritionalValue = 0
                    ants[i].way = []
                    ants[i].currentPosition = startingPosition
                }
            } else {
                if(this.intervalExecutorNumber){
                    clearInterval(this.intervalExecutorNumber)
                }
                this.clearPreviousResult()
            }
        }, 150))
    }

}

export default AntPathFinderRepository
