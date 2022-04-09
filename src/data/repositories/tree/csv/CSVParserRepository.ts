import CSVParserInterface from "@/data/interfaces/tree/csv/CSVParserInterface";

class CSVParserRepository implements CSVParserInterface {
    private static instance: CSVParserRepository

    public static getInstance(): CSVParserRepository {
        if (!CSVParserRepository.instance) {
            CSVParserRepository.instance = new CSVParserRepository()
        }

        return CSVParserRepository.instance
    }

    parseInputData(inputData: string): string[][] {
        return [];
    }
}

export default CSVParserRepository
