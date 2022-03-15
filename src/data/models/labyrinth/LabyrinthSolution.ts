import LabyrinthCell from "@/data/models/labyrinth/LabyrinthCell";

class LabyrinthSolution {
    constructor(public processedCells: LabyrinthCell[], public correctPathCells: LabyrinthCell[]) {
    }
}

export default LabyrinthSolution
