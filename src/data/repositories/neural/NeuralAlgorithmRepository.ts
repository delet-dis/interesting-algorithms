import NeuralInterface from "@/data/interfaces/neural/NeuralInterface";
import Network from "@/data/classes/Neural/Network";
import file from "raw-loader!../../raw/weights.txt";

class NeuralAlgorithmRepository implements NeuralInterface {
    private static instance: NeuralAlgorithmRepository

    public static getInstance(): NeuralAlgorithmRepository {
        if (!NeuralAlgorithmRepository.instance) {
            NeuralAlgorithmRepository.instance = new NeuralAlgorithmRepository()
        }

        return NeuralAlgorithmRepository.instance
    }

    detectDisplayingNumber(imageInBase64: string): number {
        const numberOfLayers = 3
        const layersSizes: number[] = [784, 256, 10]
        const network: Network = new Network(numberOfLayers, layersSizes)
        let predict;
        const mas: number[] = JSON.parse("[" + NeuralAlgorithmRepository.beautifyInputFile(file) + "]")
        network.readWeights(mas)
        return 0
    }

    private static beautifyInputFile(fileAsString: string): string {
        return fileAsString.replace('export default "', "")
            .replace('"', "")
            .replace("\\n", "")
            .replace(";", "")
    }
}

export default NeuralAlgorithmRepository
