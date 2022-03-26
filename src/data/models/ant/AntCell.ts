import Point from "@/data/models/Point";
import AntCellType from "@/data/enums/AntCellType";

class AntCell {
    constructor(public point: Point, public type: AntCellType, public nutritionalValue: number | null = null) {
    }
}

export default AntCell
