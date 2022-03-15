import LabyrinthSolution from "@/data/models/labyrinth/LabyrinthSolution";
import LabyrinthCell from "@/data/models/labyrinth/LabyrinthCell";
import LabyrinthGeneratorInterface from "@/data/interfaces/labyrinth/LabyrinthGeneratorInterface";

interface LabyrinthSolverInterface {
    getLabyrinthSolution(labyrinthCells: LabyrinthCell[][]): LabyrinthSolution
}

export default LabyrinthSolverInterface
