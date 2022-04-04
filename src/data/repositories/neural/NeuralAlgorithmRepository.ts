import NeuralInterface from "@/data/interfaces/neural/NeuralInterface";
import Network from "@/data/classes/Neural/Network";
import file from "raw-loader!../../raw/weights.txt";
import {base64alphabet} from "javascript-obfuscator/typings/src/constants/Base64Alphabet";
import * as buffer from "buffer";
import * as Buffer from "buffer";

class NeuralAlgorithmRepository implements NeuralInterface {
    private static instance: NeuralAlgorithmRepository

    public static getInstance(): NeuralAlgorithmRepository {
        if (!NeuralAlgorithmRepository.instance) {
            NeuralAlgorithmRepository.instance = new NeuralAlgorithmRepository()
        }

        return NeuralAlgorithmRepository.instance
    }

    detectDisplayingNumber(imageData: ImageData): number {
        const numberOfLayers = 3
        const layersSizes: number[] = [784, 256, 10]
        const network: Network = new Network(numberOfLayers, layersSizes)
        let predict;

        const mas: number[] = JSON.parse("[" + NeuralAlgorithmRepository.beautifyInputFile(file) + "]")
       // network.readWeights(mas)
        let s:string =imageInBase64
        console.log(s)
        s=s.replace("data:image/png;base64,","")
        return 0 //network.forwardFeed()
      //  imageInBase64.base64decode
    }

    private static beautifyInputFile(fileAsString: string): string {
        return fileAsString.replace('export default "', "")
            .replace('"', "")
            .replace("\\n", "")
            .replace(";", "")
            .replace("\\r", "")
    }
}

export default NeuralAlgorithmRepository
