import AntBase from "@/data/interfaces/ant/AntBase";
import {from, Observable, of, tap} from "rxjs";
import AntCell from "@/data/models/ant/AntCell";

class AntRepository extends AntBase {
    private static instance: AntRepository

    public static getInstance(): AntRepository {
        if (!AntRepository.instance) {
            AntRepository.instance = new AntRepository()
        }

        return AntRepository.instance
    }

    public mapState: Observable<AntCell[][]> = from([])
    public iterationCounter: Observable<number> = of(0)

    public provideDataForCalculation(cells: AntCell[][]): void {
        this.mapState.pipe(
            tap(mapStateValue => {
                mapStateValue = []
            })
        )
    }
}
