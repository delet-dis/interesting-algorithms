import ClusteringInterface from "@/data/interfaces/clustering/ClusteringInterface";
import Dot from "@/data/models/clustering/Dot";
import List, {ListNode} from "@/data/models/clustering/DoubleLinkedList";
import Point from "@/data/models/labyrinth/Point";

type Cluster = {
    points: List < Dot >
        closest ? : ListNode < Cluster >
        minDist: number
    distCol: number
}

class HierarchyClusteringRepository implements ClusteringInterface {
    private static instance: HierarchyClusteringRepository

    public static getInstance(): HierarchyClusteringRepository {
        if (!HierarchyClusteringRepository.instance) {
            HierarchyClusteringRepository.instance = new HierarchyClusteringRepository()
        }

        return HierarchyClusteringRepository.instance
    }

    public splitByClusters(dots: Dot[], numberOfClusters: number): Dot[] {
        const clusters: List < Cluster > = new List < Cluster > ()
        for (let i = 0; i < dots.length; i++) {
            clusters.push_back({
                points: new List < Dot > (dots[i]),
                minDist: 99999,
                distCol: i
            })
        }


        const distances: number[][] = Array(dots.length)
        for (let i = 0; i < dots.length; i++)
            distances[i] = Array(dots.length)
        let globalMin: number = 9999
        let bestCluster!: ListNode < Cluster > // will be init in next cycle
            let i = 0

        for (let cl1 of clusters) {
            clusters.iteratorStartNode = cl1.nextNode
            let j = i + 1
            for (let cl2 of clusters) {
                const distance = Math.sqrt(
                    Math.pow(dots[i].xCoordinate - dots[j].xCoordinate, 2) +
                    Math.pow(dots[i].yCoordinate - dots[j].yCoordinate, 2)
                )
                distances[i][j] = distance
                distances[j][i] = distance

                if (distance < cl1.data.minDist) {
                    cl1.data.minDist = distance
                    cl1.data.closest = cl2
                    if (distance < globalMin) {
                        globalMin = distance
                        bestCluster = cl1
                    }
                }

                if (distance < cl2.data.minDist) {
                    cl2.data.minDist = distance
                    cl2.data.closest = cl1
                }

                j++
            }

            i++
        }

        while (clusters.size != numberOfClusters) {
            clusters.remove(bestCluster.data.closest!)
            bestCluster.data.points.concat(bestCluster.data.closest!.data.points)
            bestCluster.data.minDist = 9999

            //метод одиночной связи
            globalMin = 9999
            const prevBest = bestCluster
            const bcl: number = bestCluster.data.distCol
            const cbcl: number = bestCluster.data.closest!.data.distCol
            for (let cl of clusters) {
                if (cl === prevBest)
                    continue

                const ncl: number = cl.data.distCol
                const newDistance: number =
                    (distances[bcl][ncl] + distances[cbcl][ncl] - Math.abs(distances[bcl][ncl] - distances[cbcl][ncl])) / 2
                distances[bcl][ncl] = newDistance
                distances[ncl][bcl] = newDistance

                if (newDistance < prevBest.data.minDist) {
                    prevBest.data.minDist = newDistance
                    prevBest.data.closest = cl
                }

                if (newDistance < cl.data.minDist) {
                    cl.data.minDist = newDistance
                    cl.data.closest = bestCluster
                }

                if (cl.data.minDist < globalMin) {
                    globalMin = cl.data.minDist
                    bestCluster = cl
                }
            }

        }

        let clusterNum = 0
        for (let cl of clusters) {
            for (let dot of cl.data.points)
                dot.data.hierarchyIndex = clusterNum
            clusterNum++
        }


        return dots;
    }
}