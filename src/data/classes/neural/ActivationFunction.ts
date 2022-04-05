class ActivationFunction {
    public static use(pixelsValues: number[], numberOfElements: number): number[] {
        for (let i = 0; i < numberOfElements; i++) {
            if (pixelsValues[i] < 0) {
                pixelsValues[i] *= 0.01
            } else if (pixelsValues[i] > 1) {
                pixelsValues[i] = 1. + 0.01 * (pixelsValues[i] - 1.)
            }
        }

        return pixelsValues
    }
}

export default ActivationFunction
