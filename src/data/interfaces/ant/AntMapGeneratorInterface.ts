import AntCell from "@/data/models/ant/AntCell";
import AntCellType from "@/data/enums/AntCellType";
interface AntMapGeneratorInterface {
    generateMap(): AntCell[][]
}

export default AntMapGeneratorInterface