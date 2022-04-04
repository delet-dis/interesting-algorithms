import NeuralInterface from "@/data/interfaces/neural/NeuralInterface";
import Network from "@/data/classes/Neural/Network";
import fs from "fs";
class NeuralAlgorithmRepository implements NeuralInterface {
    private static instance: NeuralAlgorithmRepository

    public static getInstance(): NeuralAlgorithmRepository {
        if (!NeuralAlgorithmRepository.instance) {
            NeuralAlgorithmRepository.instance = new NeuralAlgorithmRepository()
        }

        return NeuralAlgorithmRepository.instance
    }

    detectDisplayingNumber(imageInBase64: string): number {
        const L=3
        const size:number[]=[784,256,10]
        const NW:Network=new Network(L,size)
        let predict;
        const line:string=fs.readFileSync("weights1.txt",'utf8')
        const mas:number[]=JSON.parse("["+ line +"]")
        NW.ReadWeights(mas)
        return 0
    }
}

export default NeuralAlgorithmRepository
