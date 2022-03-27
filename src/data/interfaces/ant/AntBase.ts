import {Observable} from "rxjs";
import AntCell from "@/data/models/ant/AntCell";

abstract class AntBase {
    abstract mapState: Observable<AntCell[]>
    abstract iterationCounter: Observable<number>

    abstract provideDataForCalculation(cells: AntCell[][], size: number): void
}

export default AntBase
