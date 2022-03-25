import LabyrinthCellType from "@/data/enums/LabyrinthCellType";
import Point from "@/data/models/Point";

class LabyrinthCell {
    constructor(public point: Point, public type: LabyrinthCellType) {
    }
}

export default LabyrinthCell
