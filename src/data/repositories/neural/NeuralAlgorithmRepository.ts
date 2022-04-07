import NeuralInterface from "@/data/interfaces/neural/NeuralInterface";
import Network from "@/data/classes/neural/Network";

class NeuralAlgorithmRepository implements NeuralInterface {
    private static instance: NeuralAlgorithmRepository

    public static getInstance(): NeuralAlgorithmRepository {
        if (!NeuralAlgorithmRepository.instance) {
            NeuralAlgorithmRepository.instance = new NeuralAlgorithmRepository()
        }

        return NeuralAlgorithmRepository.instance
    }

    detectDisplayingNumber(imageData: ImageData): number {
        const network: Network = Network.getPreinstalledInstance()

        const imagePixels: number[] = []

        for (let i = 1; i <= imageData.data.length; i++) {
            if (i % 4 == 0) {
                if (imageData.data[i - 1] > 0) {
                    imagePixels.push(1)
                } else {
                    imagePixels.push(0)
                }
            }
        }

        network.setInput(imagePixels)
        return network.forwardFeed()
    }

    static beautifyInputFile(fileAsString: string): string {
        return fileAsString.replace('export default "', "")
            .replace('"', "")
            .replace("\\n", "")
            .replace(";", "")
            .replace("\\r", "")
            .replaceAll(" ", ",")
    }
}

export default NeuralAlgorithmRepository
