import AntCell from "@/data/models/ant/AntCell";
import AntCellType from "@/data/enums/AntCellType";
interface AntLabyrinthGeneratorInterface {
    generateLabyrinth(size: number): AntCell[][]
}

export default AntLabyrinthGeneratorInterface
