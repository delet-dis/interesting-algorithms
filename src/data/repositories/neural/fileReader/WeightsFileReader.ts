import WeightsFileReaderInterface from "@/data/interfaces/neural/fileReader/WeightsFileReaderInterface";
import file from "raw-loader!../../../raw/weights.txt";

class WeightsFileReader implements WeightsFileReaderInterface {
    private static instance: WeightsFileReader

    public static getInstance(): WeightsFileReader {
        if (!WeightsFileReader.instance) {
            WeightsFileReader.instance = new WeightsFileReader()
        }

        return WeightsFileReader.instance
    }

    readWeightsFile(): string {
        return file.replace('export default "', "")
            .replace('"', "")
            .replace("\\n", "")
            .replace(";", "")
            .replace("\\r", "")
            .replaceAll(" ", ",")
    }
}

export default WeightsFileReader
