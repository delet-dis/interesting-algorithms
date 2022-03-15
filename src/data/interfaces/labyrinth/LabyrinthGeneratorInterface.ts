import LabyrinthCell from "@/data/models/labyrinth/LabyrinthCell";

interface LabyrinthGeneratorInterface {
    generateLabyrinth(width: number, height: number): LabyrinthCell[][]
}

export default LabyrinthGeneratorInterface
