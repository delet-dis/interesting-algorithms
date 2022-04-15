import LabyrinthCell from "@/data/models/labyrinth/LabyrinthCell"

interface LabyrinthGeneratorInterface {
    generateLabyrinth(size: number): LabyrinthCell[][]
}

export default LabyrinthGeneratorInterface
