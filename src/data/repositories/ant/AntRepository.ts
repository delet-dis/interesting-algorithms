import AntBase from "@/data/interfaces/ant/AntBase";
import {from, Observable, of, tap} from "rxjs";
import AntCell from "@/data/models/ant/AntCell";
import Ant from "@/data/models/ant/Ant";
import AntCellType from "@/data/enums/AntCellType";
import point from "@/data/models/Point";

class AntRepository extends AntBase {
    private static instance: AntRepository

    public static getInstance(): AntRepository {
        if (!AntRepository.instance) {
            AntRepository.instance = new AntRepository()
        }

        return AntRepository.instance
    }

    public mapState: Observable<AntCell[]> = from([])
    public iterationCounter: Observable<number> = of(0)

    public provideDataForCalculation(cells: AntCell[][]): void {
        const size=15
        const labyrinth:AntCell[][]=cells
        const colonySize=2000
        let possDir:AntCell[]=[]
        const colony:Ant[]=[]
        let bestWay:AntCell[]=[]
        let bestWayLength=999
        let startpos:AntCell=new AntCell(new point(-1,-1),AntCellType.EMPTY_CELL, 0,0)
        for(let i=0;i<15;i++){
            for(let j=0;j<15;j++){
                if(labyrinth[i][j].type==AntCellType.CENTER_CELL){
                    startpos=labyrinth[i][j]
                }
            }
        }

        for(let i=0;i<colonySize;i++){
            colony[i]=new Ant(startpos)
        }
        for(let s=0;s<100;s++) {
            for (let i = 0; i < colony.length; i++) {
                for (; ;) {
                    possDir = colony[i].FindPossibleWays(labyrinth, size, colony.length)
                    if (!colony[i].ChooseDirection(labyrinth, possDir)) {
                        if (colony[i].curPosition.type == AntCellType.FOOD_CELL) {
                            colony[i].foodUsefulness = colony[i].curPosition.usefulness

                        } else {
                            colony[i].foodUsefulness = 0


                        }
                        break
                    }
                    possDir=[]
                }
            }
            for (let o = 0; o < size; o++) {
                for (let p = 0; p < size; p++) {
                    labyrinth[o][p].pheromones = (0.4 * labyrinth[o][p].pheromones)
                }
            }
            for (let i = 0; i < colony.length; i++) {
                // console.log(i, colony[i].way,  colony[i].curPosition)
                if (colony[i].foodUsefulness>0) {
                    if(colony[i].way.length<bestWayLength){
                        bestWayLength=colony[i].way.length
                        bestWay=colony[i].way
                    }
                    for (let j = 0; j < colony[i].way.length; j++) {

                        labyrinth[colony[i].way[j].point.y][colony[i].way[j].point.x].pheromones += ((colony[i].foodUsefulness) / (colony[i].way.length))
                        // console.log(labyrinth[colony[i].way[j].yCoordinate][colony[i].way[j].xCoordinate].pheromones, 10 / colony[i].way.length, colony[i].way[j].yCoordinate,colony[i].way[j].xCoordinate)
                    }
                }

            }

                this.mapState.pipe(
                    tap(mapStateValue => {
                        mapStateValue = bestWay
                    })
                )

                this.iterationCounter.pipe(
                    tap(iterationCounterValue => {
                        iterationCounterValue=s
                    })
                )
            
            for (let i = 0; i < colony.length; i++) {
                colony[i].foodUsefulness=0
                colony[i].way=[]
                colony[i].curPosition=startpos
            }

        }

    }

}
