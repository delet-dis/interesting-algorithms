abstract class DividerRepositoryBase {
    abstract checkSample: string[][] | null
    abstract trainingSample: string[][] | null

    abstract divideBySamples(inputData: string): void
}

export default DividerRepositoryBase
