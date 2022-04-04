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
        console.log(NeuralAlgorithmRepository.beautifyInputFile(file) )
        const mas: number[] = JSON.parse("[" + NeuralAlgorithmRepository.beautifyInputFile(file) + "]")
        console.log(imageData.data)
        const imagePixels:number[]=[]
        for (let i=1;i<=imageData.data.length;i++){
            if(i%4==0){
                if (imageData.data[i-1]>0){
                imagePixels.push(1)
                }
                else {
                    imagePixels.push(0)
                }
            }
        }
        console.log(imagePixels)
        network.readWeights(mas)
        return network.forwardFeed()
    }

    private static beautifyInputFile(fileAsString: string): string {
        return fileAsString.replace('export default "', "")
            .replace('"', "")
            .replace("\\n", "")
            .replace(";", "")
            .replace("\\r", "")
            .replaceAll(" ",",")
    }
}

export default NeuralAlgorithmRepository
