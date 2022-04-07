import ClusteringInterface from "@/data/interfaces/clustering/ClusteringInterface";
import Dot from "@/data/models/clustering/Dot";
import Cluster from "@/data/classes/clustering/Cluster";

class KMeansClusteringRepository implements ClusteringInterface {
    private static instance: KMeansClusteringRepository

    public static getInstance(): KMeansClusteringRepository {
        if (!KMeansClusteringRepository.instance) {
            KMeansClusteringRepository.instance = new KMeansClusteringRepository()
        }

        return KMeansClusteringRepository.instance
    }

    private clusters: Cluster[] = []

    private identifyCenters(k: number, allDots: Dot[]): void {
        const size = allDots.length
        const step = size / k

        let iterator = 0

        for (let j = 0; j < k; j++, iterator += step) {
            this.clusters[j].currentX = allDots[Math.floor(iterator)].xCoordinate
            this.clusters[j].currentY = allDots[Math.floor(iterator)].yCoordinate
        }
    }

    private bind(allDots: Dot[], clustersNumber: number): Dot[] {
        for (let i = 0; i < clustersNumber; i++) {
            this.clusters[i].dots = []
        }

        for (let i = 0; i < allDots.length; i++) {
            let minimalDistance = Number.MAX_VALUE
            let arrayPos = -1

            for (let j = 0; j < this.clusters.length; j++) {
                const currentDistance = Math.sqrt(Math.pow(allDots[i].xCoordinate - this.clusters[j].currentX, 2) +
                    Math.pow(allDots[i].yCoordinate - this.clusters[j].currentY, 2))

                if (currentDistance < minimalDistance) {
                    minimalDistance = currentDistance
                    allDots[i].kMeansIndex = j
                    arrayPos = j
                }
            }
            this.clusters[arrayPos].dots.push(allDots[i])

        }
        return allDots
    }

    splitByClusters(dots: Dot[], numberOfClusters: number): Dot[] {
        this.clusters = []

        for (let i = 0; i < numberOfClusters; i++) {
            this.clusters[i] = new Cluster()
        }

        this.identifyCenters(numberOfClusters, dots)

        let numberOfClustersToCheck = 0

        while (numberOfClustersToCheck != numberOfClusters) {
            numberOfClustersToCheck = 0

            dots = this.bind(dots, numberOfClusters)

            for (let j = 0; j < this.clusters.length; j++) {
                this.clusters[j].setCenter()
            }
            for (let p = 0; p < numberOfClusters; p++) {
                if (this.clusters[p].currentX == this.clusters[p].lastX && this.clusters[p].currentY == this.clusters[p].lastY)
                    numberOfClustersToCheck++
            }
        }
        return dots
    }
}

export default KMeansClusteringRepository
