import LabyrinthSolution from "@/data/models/labyrinth/LabyrinthSolution";
import LabyrinthCell from "@/data/models/labyrinth/LabyrinthCell";
import Point from "@/data/models/Point";


interface LabyrinthSolverInterface {
    getLabyrinthSolution(labyrinthCells: LabyrinthCell[][], start: Point, finish: Point): LabyrinthSolution
}

export default LabyrinthSolverInterface
