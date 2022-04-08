import Point from "@/data/models/Point"
import AntCellType from "@/data/enums/AntCellType"
import Cell from "@/data/models/cell/Cell"

class AntCell extends Cell {
    constructor(public point: Point, public type: AntCellType, public nutritionalValue: number | null=null , public numberOfPheromones: number = 1) {
        super(point, type)
    }
}

export default AntCell
