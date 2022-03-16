import LabyrinthCellType from "@/data/enums/LabyrinthCellType";
import LabyrinthSolverInterface from "@/data/interfaces/labyrinth/LabyrinthSolverInterface";
import LabyrinthCell from "@/data/models/labyrinth/LabyrinthCell";
import LabyrinthSolution from "@/data/models/labyrinth/LabyrinthSolution";
import Point from "@/data/models/labyrinth/Point";
 

type pointParams = {
    coords: Point 
    fromStartToPoint: number
    wholePathLen: number
}


class LabyrinthSolverRepository implements LabyrinthSolverInterface{
    private static instance: LabyrinthSolverRepository;

    public static getInstance(): LabyrinthSolverRepository {
        if (!LabyrinthSolverRepository.instance) {
            LabyrinthSolverRepository.instance = new LabyrinthSolverRepository();
        }

        return LabyrinthSolverRepository.instance;
    }



    private distanceToFinish(curPos: Point, finish: Point) : number {
        return Math.abs(curPos.x - finish.x) + Math.abs(curPos.y - finish.y)
    }


    private sift(arr: pointParams[]){
        const len = arr.length
        let pos: number = len - 1
        let chld: number = pos - 1

        while(chld >= 0){
            if (chld - 1 >= 0 && arr[chld-1].wholePathLen < arr[chld].wholePathLen)
                chld--
            
            if(arr[pos].wholePathLen > arr[chld].wholePathLen){
                let tmp = arr[pos]
                arr[pos] = arr[chld]
                arr[chld] = tmp
            }

            else 
                break
            
            pos = chld
            chld = 2 * pos - len
        }
    }


    getLabyrinthSolution(labyrinthCells: LabyrinthCell[][], start: Point, finish: Point): LabyrinthSolution {
        let PATH_FOUND: boolean = false
        let processedCells: LabyrinthCell[] = []
        let minPathCells: LabyrinthCell[] = []

        const xLimit: number = labyrinthCells.length - 1
        const yLimit: number = labyrinthCells[0].length - 1 
        
        const NO_PARENT: Point = {x: -1, y: -1}
        let parents: Point[][] = new Array(labyrinthCells.length)
        for(let i = 0; i < labyrinthCells.length; i++){
            parents[i] = new Array(labyrinthCells[0].length).fill(NO_PARENT)
        }

        let pointsToCheck: pointParams[] = [{
            coords : start,
            fromStartToPoint: 0,
            wholePathLen: this.distanceToFinish(start, finish)
        }]
        let newPointsToCheck: Point[] = []
        
        while(pointsToCheck.length && !PATH_FOUND){

            const {coords: {x, y}, fromStartToPoint: prevPathLen} = pointsToCheck.pop()!

            if(x > 0 && parents[x - 1][y] == NO_PARENT && labyrinthCells[x - 1][y].type){
                parents[x - 1][y] = {x: x, y: y}
                newPointsToCheck.push({x: x-1, y: y})
            }

            if(x < xLimit && parents[x + 1][y] == NO_PARENT && labyrinthCells[x + 1][y].type){
                parents[x + 1][y] = {x: x, y: y}
                newPointsToCheck.push({x: x+1, y: y})
            }

            if(y > 0 && parents[x][y - 1] == NO_PARENT && labyrinthCells[x][y - 1].type){
                parents[x][y - 1] = {x: x, y: y}
                newPointsToCheck.push({x: x, y: y-1})    
            }

            if(y < yLimit && parents[x][y + 1] == NO_PARENT && labyrinthCells[x][y + 1].type){
                parents[x][y + 1] = {x: x, y: y}
                newPointsToCheck.push({x: x, y: y+1})  
            }


            newPointsToCheck.forEach((newPoint) => {
                if(newPoint == finish)
                    PATH_FOUND = true
                    
                pointsToCheck.push({
                    coords: newPoint,
                    fromStartToPoint: prevPathLen + 1,
                    wholePathLen: prevPathLen + this.distanceToFinish(newPoint, finish)                    
                })

                this.sift(pointsToCheck)

                processedCells.push(new LabyrinthCell(newPoint.x, newPoint.y, LabyrinthCellType.PATH_CELL))
            })

            newPointsToCheck = []
        }

        if(PATH_FOUND){
            let parent: Point = finish;

            while(parent != start){
                minPathCells.unshift(new LabyrinthCell(parent.x, parent.y, LabyrinthCellType.PATH_CELL))
                parent = parents[parent.x][parent.y]
            }
            minPathCells.unshift(new LabyrinthCell(parent.x, parent.y, LabyrinthCellType.PATH_CELL))
        }


        return new LabyrinthSolution(processedCells, minPathCells);
    }
}
