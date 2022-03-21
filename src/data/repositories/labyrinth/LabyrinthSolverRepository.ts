import LabyrinthCellType from "@/data/enums/LabyrinthCellType";
import LabyrinthSolverInterface from "@/data/interfaces/labyrinth/LabyrinthSolverInterface";
import LabyrinthCell from "@/data/models/labyrinth/LabyrinthCell";
import LabyrinthSolution from "@/data/models/labyrinth/LabyrinthSolution";
import Point from "@/data/models/labyrinth/Point";


type pointParams = {
    coords: Point
    parent: Point
    fromStartToPoint: number
    wholePathLen: number
}


class LabyrinthSolverRepository implements LabyrinthSolverInterface {
    private static instance: LabyrinthSolverRepository;

    public static getInstance(): LabyrinthSolverRepository {
        if (!LabyrinthSolverRepository.instance) {
            LabyrinthSolverRepository.instance = new LabyrinthSolverRepository();
        }

        return LabyrinthSolverRepository.instance;
    }


    private static distanceToFinish(curPos: Point, finish: Point): number {
        return Math.abs(curPos.x - finish.x) + Math.abs(curPos.y - finish.y)
    }

    private static sift(arr: pointParams[]) {
        const len = arr.length
        let pos: number = len - 1
        let chld: number = pos - 1

        while (chld >= 0) {
            if (chld - 1 >= 0 && arr[chld - 1].wholePathLen < arr[chld].wholePathLen)
                chld--

            if (arr[pos].wholePathLen > arr[chld].wholePathLen) {
                const tmp = arr[pos]
                arr[pos] = arr[chld]
                arr[chld] = tmp
            } else
                break

            pos = chld
            chld = 2 * pos - len
        }
    }


    public getLabyrinthSolution(labyrinthCells: LabyrinthCell[][], start: Point, finish: Point): LabyrinthSolution {
        let pathFound = false
        const processedCells: LabyrinthCell[] = []
        const minPathCells: LabyrinthCell[] = []

        const xLimit: number = labyrinthCells.length - 1
        const yLimit: number = labyrinthCells[0].length - 1

        const noParent = new Point(0, 0)
        const parents: Point[][] = Array(labyrinthCells.length)
        for (let i = 0; i < labyrinthCells.length; i++)
            parents[i] = new Array(labyrinthCells[0].length).fill(noParent)
        

        const pointsToCheck: pointParams[] = [{
            coords: start,
            parent: new Point(0, 0),
            fromStartToPoint: 0,
            wholePathLen: LabyrinthSolverRepository.distanceToFinish(start, finish)
        }]
        let newPointsToCheck: Point[] = []

        while (pointsToCheck.length && !pathFound) {

            const {coords: curCell, parent: parent, fromStartToPoint: prevPathLen} = pointsToCheck.pop()!
            const {x, y} = curCell
            if(parents[y][x] != noParent)
                continue
                
            processedCells.push(new LabyrinthCell(curCell, LabyrinthCellType.PATH_CELL))
            parents[y][x] = parent

            if (x > 0 && parents[y][x - 1] == noParent && labyrinthCells[y][x - 1].type) 
                newPointsToCheck.push(new Point(x - 1, y))
            
            
            if (x < xLimit && parents[y][x + 1] == noParent && labyrinthCells[y][x + 1].type) 
                newPointsToCheck.push(new Point(x + 1, y))
            

            if (y > 0 && parents[y - 1][x] == noParent && labyrinthCells[y - 1][x].type) 
                newPointsToCheck.push(new Point(x, y - 1))
            

            if (y < yLimit && parents[y + 1][x] == noParent && labyrinthCells[y + 1][x].type) 
                newPointsToCheck.push(new Point(x, y + 1))         


            newPointsToCheck.every((newPoint) => {
                if (newPoint.x == finish.x && newPoint.y == finish.y) {
                    parents[finish.y][finish.x] = curCell
                    pathFound = true
                    return false
                }

                pointsToCheck.push({
                    coords: newPoint,
                    parent: curCell,
                    fromStartToPoint: prevPathLen + 1,
                    wholePathLen: prevPathLen + 1 + LabyrinthSolverRepository.distanceToFinish(newPoint, finish)
                })
                
                LabyrinthSolverRepository.sift(pointsToCheck)
                return true
            })

            newPointsToCheck = []
        }

        if (pathFound) {
            let parent: Point = parents[finish.y][finish.x];
            while (parent != start) {
                minPathCells.unshift(new LabyrinthCell(parent, LabyrinthCellType.PATH_CELL))
                parent = parents[parent.y][parent.x]
            }
        }

        processedCells.shift()  // without start
        return new LabyrinthSolution(processedCells, minPathCells);
    }
}

export default LabyrinthSolverRepository
