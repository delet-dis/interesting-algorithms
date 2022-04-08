import {BehaviorSubject} from "rxjs"
import AntCell from "@/data/models/ant/AntCell"

abstract class AntBase {
    abstract mapState: BehaviorSubject<AntCell[]>
    abstract iterationCounter: BehaviorSubject<number>
    abstract mapBestState: BehaviorSubject<AntCell[]>
    abstract isWorking: boolean

    abstract provideDataForCalculation(cells: AntCell[][], size: number): void
}

export default AntBase
