import LabyrinthCellType from "@/data/enums/LabyrinthCellType";

class LabyrinthCell {
    constructor(public xCoordinate: number, public yCoordinate: number, public type: LabyrinthCellType) {
    }
}

export default LabyrinthCell
