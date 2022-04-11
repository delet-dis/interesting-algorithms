import CSVParserInterface from "@/data/interfaces/tree/csv/CSVParserInterface";

class CSVParserRepository implements CSVParserInterface {
    private static instance: CSVParserRepository

    public static getInstance(): CSVParserRepository {
        if (!CSVParserRepository.instance) {
            CSVParserRepository.instance = new CSVParserRepository()
        }

        return CSVParserRepository.instance
    }

    private countRows(inputData: string): number {
        let rows = 1;
        for (const char of inputData) {
            if(char == ",")
                rows++
            else if(char == "\n")
                break;
        }
        return rows;
    }

    public parseInputData(inputData: string): string[][] | null {       
        let column = 0
        let row = 0
        let parameterLen = 0
        const totalRows = this.countRows(inputData);
        const table: string[][] = []
        table.push(Array(totalRows).fill(""))
    
        for (const char of inputData) {
            if (char == ",") {
                if (!parameterLen)
                    return null
                row++
                parameterLen = 0
                continue
            }
    
            else if (char == "\n") { 
                if(row != totalRows - 1)
                    return null
                table.push(Array(totalRows).fill(""))
                column++
                row = 0
                continue
            }
            
            if(row >= totalRows)
                return null

            table[column][row] += char
            parameterLen++
        }

        if(inputData[inputData.length - 1] == '\n') 
            table.pop()
        else if(row != totalRows - 1 || !parameterLen)
            return null

        return table;
    }
}

export default CSVParserRepository
