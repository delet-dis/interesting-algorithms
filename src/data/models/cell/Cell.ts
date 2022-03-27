import Point from "@/data/models/Point";
import LabyrinthCellType from "@/data/enums/LabyrinthCellType";
import AntCellType from "@/data/enums/AntCellType";

class Cell {
    constructor(public point: Point, public type: LabyrinthCellType | AntCellType) {
    }
}

export default Cell
