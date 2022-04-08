import Dot from "@/data/models/clustering/Dot"

interface ClusteringInterface {
    splitByClusters(dots: Dot[], numberOfClusters: number): Dot[]
}

export default ClusteringInterface
