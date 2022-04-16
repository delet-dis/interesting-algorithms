import CSVParserRepository from "./csv/CSVParserRepository"
import DividerRepositoryBase from "@/data/interfaces/tree/DividerRepositoryBase";

class DividerRepository extends DividerRepositoryBase {
    private static instance: DividerRepository

    public static getInstance(): DividerRepository {
        if (!DividerRepository.instance) {
            DividerRepository.instance = new DividerRepository()
        }

        return DividerRepository.instance
    }

    public trainingSample: string[][] | null = null
    public checkSample: string[][] | null = null

    public divideBySamples(inputData: string) {
        const sample = CSVParserRepository.getInstance().parseInputData(inputData)
        if (sample) {
            const dividePoint = Math.floor(sample.length * 0.5)
            this.trainingSample = sample.slice(0, dividePoint)
            this.checkSample = sample.slice(dividePoint, sample.length)
        }
    }
}

export default DividerRepository
