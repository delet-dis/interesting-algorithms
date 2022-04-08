import Matrix from "@/data/classes/neural/Matrix"
import ActivationFunction from "@/data/classes/neural/ActivationFunction"
import WeightsFileReader from "@/data/repositories/neural/fileReader/WeightsFileReader"

class Network {
    private static instance: Network

    public static getPreinstalledInstance(): Network {
        if (!Network.instance) {
            const numberOfLayers = 3
            const layersSizes: number[] = [784, 256, 10]

            Network.instance = new Network(numberOfLayers, layersSizes)

            this.instance.readWeights(JSON.parse("[" + WeightsFileReader.getInstance().readWeightsFile() + "]"))
        }

        return Network.instance
    }

    private readonly numberOfLayers: number

    private readonly size: number[]
    private readonly weights: Matrix[]
    private readonly bios: number[][]
    private readonly neuronValues: number[][]
    private readonly neuronErrors: number[][]
    private readonly neuronBiosValues: number[]

    constructor(numberOfLayers: number, size: number[]) {
        this.weights = []
        this.bios = []
        this.neuronValues = []
        this.neuronErrors = []
        this.neuronBiosValues = []
        this.numberOfLayers = numberOfLayers
        this.size = size

        for (let i = 0; i < this.numberOfLayers - 1; i++) {
            this.bios[i] = []
            this.weights[i] = new Matrix(size[i + 1], size[i])
            this.weights[i].random()

            for (let j = 0; j < size[i + 1]; j++) {
                this.bios[i][j] = (Math.random() * 50) * 0.06 / (this.size[i] + 15)
            }
        }

        for (let i = 0; i < this.numberOfLayers; i++) {
            this.neuronValues[i] = []
            this.neuronErrors[i] = []
        }

        for (let i = 0; i < numberOfLayers; i++) {
            this.neuronBiosValues[i] = 1
        }
    }

    setInput(values: number[]) {
        for (let i = 0; i < this.size[0]; i++) {
            this.neuronValues[0][i] = values[i]
        }
    }

    forwardFeed(): number {
        for (let k = 1; k < this.numberOfLayers; k++) {
            this.neuronValues[k] = this.weights[k - 1].multiply(this.neuronValues[k - 1], this.neuronValues[k])
            this.neuronValues[k] = Matrix.sumOfVectors(this.neuronValues[k], this.bios[k - 1], this.size[k])
            this.neuronValues[k] = ActivationFunction.use(this.neuronValues[k], this.size[k])
        }
        return this.searchMaxIndex(this.neuronValues[this.numberOfLayers - 1])
    }

    searchMaxIndex(value: number[]): number {
        let max = value[0]
        let prediction = 0
        let tempValue: number

        for (let i = 0; i < this.size[this.numberOfLayers - 1]; i++) {
            tempValue = value[i]

            if (tempValue > max) {
                prediction = i
                max = tempValue
            }
        }

        return prediction
    }

    readWeights(weights: number[]) {
        let s = 0
        for (let i = 0; i < this.numberOfLayers - 1; i++) {
            for (let j = 0; j < this.weights[i].rowNumber; j++) {
                for (let k = 0; k < this.weights[i].columnNumber; k++) {
                    this.weights[i].matrix[j][k] = weights[s]
                    s++
                }
            }
        }

        for (let i = 0; i < this.numberOfLayers - 1; i++) {
            for (let j = 0; j < this.size[i + 1]; j++) {
                this.bios[i][j] = weights[s]
                s++
            }
        }
    }
}

export default Network
