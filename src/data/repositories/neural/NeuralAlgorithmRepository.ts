import NeuralInterface from "@/data/interfaces/neural/NeuralInterface";

class NeuralAlgorithmRepository implements NeuralInterface {
    private static instance: NeuralAlgorithmRepository

    public static getInstance(): NeuralAlgorithmRepository {
        if (!NeuralAlgorithmRepository.instance) {
            NeuralAlgorithmRepository.instance = new NeuralAlgorithmRepository()
        }

        return NeuralAlgorithmRepository.instance
    }

    detectDisplayingNumber(imageInBase64: string): number {
        return 0
    }
}

export default NeuralAlgorithmRepository
