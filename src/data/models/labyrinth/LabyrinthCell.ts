import LabyrinthCellType from "@/data/enums/LabyrinthCellType";

class LabyrinthCell {
    X:number
    Y:number
    Type:LabyrinthCellType
    constructor(public xCoordinate: number, public yCoordinate: number, public type: LabyrinthCellType) {
        this.X=xCoordinate
        this.Y=yCoordinate
        this.Type=type
    }
}

export default LabyrinthCell
