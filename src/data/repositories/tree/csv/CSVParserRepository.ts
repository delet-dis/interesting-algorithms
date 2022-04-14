import CSVParserInterface from "@/data/interfaces/tree/csv/CSVParserInterface";

class CSVParserRepository implements CSVParserInterface {
    private static instance: CSVParserRepository

    public static getInstance(): CSVParserRepository {
        if (!CSVParserRepository.instance) {
            CSVParserRepository.instance = new CSVParserRepository()
        }

        return CSVParserRepository.instance
    }

    private numberCheck(str: string): boolean {
        return !isNaN(Number(str))  
    }

    public parseInputData(inputData: string): string[][] | null {       
        let column = 0
        let row = 0
        let parameterLen = 0
        inputData = inputData.trim()

        const isNumber: boolean[] = []
        let totalRows = 1
        let curParameter = ""
        for (const char of inputData) {
            if (char == ",") {
                totalRows++
                isNumber.push(this.numberCheck(curParameter))
                curParameter = ""
                continue
            }
                
            else if (char == "\n") {
                isNumber.push(this.numberCheck(curParameter))
                break;
            }
                
            curParameter += char
        }
        if(totalRows != isNumber.length)
            isNumber.push(this.numberCheck(curParameter))


        curParameter = ""
        const table: string[][] = []
        table.push(Array(totalRows).fill(""))
        for (const char of inputData) {
            if (char == ",") {
                if (!parameterLen || this.numberCheck(table[column][row]) != isNumber[row])
                    return null
                row++
                parameterLen = 0
                continue
            }
    
            else if (char == "\n") { 
                if(row != totalRows - 1 || !parameterLen || this.numberCheck(table[column][row]) != isNumber[row])
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
        else if(row != totalRows - 1 || !parameterLen || this.numberCheck(table[column][row]) != isNumber[row])
            return null


        return table;
    }
}

export default CSVParserRepository
