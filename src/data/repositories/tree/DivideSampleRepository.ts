import CSVParserRepository from "./csv/CSVParserRepository"

export default class DivideSampleRepository {
    public static trainingSample: string[][] | null = null
    public static checkSample: string[][] | null = null

    public static init(inputData: string) {
        const sample = CSVParserRepository.getInstance().parseInputData(inputData)
        if (sample && sample.length > 10) {
            const dividePoint = Math.floor(sample.length * 0.7)
            DivideSampleRepository.trainingSample = sample.slice(0, dividePoint)
            DivideSampleRepository.checkSample = sample.slice(dividePoint, sample.length)
        }
           
    }

}