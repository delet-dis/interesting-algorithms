import LabyrinthCellType from "@/data/enums/LabyrinthCellType";
import Point from "@/data/models/Point";
import Cell from "@/data/models/cell/Cell";

class LabyrinthCell extends Cell {
    constructor(public point: Point, public type: LabyrinthCellType) {
        super(point, type)
    }
}

export default LabyrinthCell
