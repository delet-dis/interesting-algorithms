import ClusteringInterface from "@/data/interfaces/clustering/ClusteringInterface"
import Dot from "@/data/models/clustering/Dot"
import LinkedList, {ListNode} from "@/data/classes/clustering/LinkedList"
import Cluster from "@/data/models/clustering/Cluster"

class HierarchyClusteringRepository implements ClusteringInterface {
    private static instance: HierarchyClusteringRepository

    public static getInstance(): HierarchyClusteringRepository {
        if (!HierarchyClusteringRepository.instance) {
            HierarchyClusteringRepository.instance = new HierarchyClusteringRepository()
        }

        return HierarchyClusteringRepository.instance
    }

    public splitByClusters(dots: Dot[], numberOfClusters: number): Dot[] {
        const clusters: LinkedList<Cluster> = new LinkedList<Cluster>()

        for (let i = 0; i < dots.length; i++) {
            clusters.pushBack(new Cluster(new LinkedList<Dot>(dots[i]), null, Number.MAX_VALUE, i))
        }

        const distances: number[][] = Array(dots.length)

        for (let i = 0; i < dots.length; i++) {
            distances[i] = Array(dots.length)
        }

        let globalMin = Number.MAX_VALUE
        let bestCluster!: ListNode<Cluster>
        let i = 0

        for (const firstCluster of clusters) {
            clusters.iteratorStartNode = firstCluster.nextNode

            let j = i + 1

            for (const secondCluster of clusters) {
                const distance = Math.sqrt(
                    Math.pow(dots[i].xCoordinate - dots[j].xCoordinate, 2) +
                    Math.pow(dots[i].yCoordinate - dots[j].yCoordinate, 2)
                )

                distances[i][j] = distance
                distances[j][i] = distance

                if (distance < firstCluster.data.minimalDistance) {
                    firstCluster.data.minimalDistance = distance
                    firstCluster.data.closest = secondCluster

                    if (distance < globalMin) {
                        globalMin = distance
                        bestCluster = firstCluster
                    }
                }

                if (distance < secondCluster.data.minimalDistance) {
                    secondCluster.data.minimalDistance = distance
                    secondCluster.data.closest = firstCluster
                }

                j++
            }

            i++
        }

        while (clusters.size != numberOfClusters) {
            if(bestCluster.data.closest){
                bestCluster.data.points.concatenate(bestCluster.data.closest.data.points)
            }
            bestCluster.data.minimalDistance = Number.MAX_VALUE

            //метод одиночной связи
            globalMin = Number.MAX_VALUE

            if(bestCluster.data.closest){
                const prevBest = bestCluster

                const bestClusterIndexInDistancesTable: number = bestCluster.data.distCol
                const closestToBestClusterIndex: number = bestCluster.data.closest.data.distCol

                clusters.remove(bestCluster.data.closest)

                for (const cluster of clusters) {
                    if (cluster === prevBest)
                        continue

                    const currentCluster: number = cluster.data.distCol
                    const newDistance: number = Math.min(distances[bestClusterIndexInDistancesTable][currentCluster],
                        distances[closestToBestClusterIndex][currentCluster])

                    distances[bestClusterIndexInDistancesTable][currentCluster] = newDistance
                    distances[currentCluster][bestClusterIndexInDistancesTable] = newDistance

                    if (newDistance < prevBest.data.minimalDistance) {
                        prevBest.data.minimalDistance = newDistance
                        prevBest.data.closest = cluster
                    }

                    if (newDistance <= cluster.data.minimalDistance) {
                        cluster.data.minimalDistance = newDistance
                        cluster.data.closest = prevBest
                    }

                    if (cluster.data.minimalDistance < globalMin) {
                        globalMin = cluster.data.minimalDistance
                        bestCluster = cluster
                    }
                }
            }
        }

        let clusterNumber = 0
        for (const cluster of clusters) {
            for (const dot of cluster.data.points)
                dot.data.hierarchyIndex = clusterNumber
            clusterNumber++
        }

        return dots
    }
}

export default HierarchyClusteringRepository
