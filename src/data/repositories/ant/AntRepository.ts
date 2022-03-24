import AntBase from "@/data/interfaces/ant/AntBase";
import {from, Observable} from "rxjs";
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

    public provideDataForCalculation(cells: AntCell[][]): void {

    }
}
