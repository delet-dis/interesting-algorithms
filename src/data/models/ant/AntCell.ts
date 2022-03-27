import Point from "@/data/models/Point";
import AntCellType from "@/data/enums/AntCellType";

class AntCell {
    constructor(public point: Point, public type: AntCellType, public pheromones: number, public usefulness:number) {
    }
}

export default AntCell
