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

    private clusArr: Cluster[] = []

    private IdentifyCenters(k: number, allDots: Dot[]): void {
        const size = allDots.length
        const step = size / k
        let steper = 0
        for (let j = 0; j < k; j++, steper += step) {

            this.clusArr[j].curX = allDots[Math.floor(steper)].xCoordinate
            this.clusArr[j].curY = allDots[Math.floor(steper)].yCoordinate
        }

    }

    private Bind(allDots: Dot[], clustersNumber: number): Dot[] {
        for (let i = 0; i < clustersNumber; i++) {
            this.clusArr[i].arr = []
        }
        for (let i = 0; i < allDots.length; i++) {
            let minDist = 10000
            let arrayPos = -1
            for (let j = 0; j < this.clusArr.length; j++) {
                const curDist = Math.sqrt(Math.pow(allDots[i].xCoordinate - this.clusArr[j].curX, 2) + Math.pow(allDots[i].yCoordinate - this.clusArr[j].curY, 2))
                if (curDist < minDist) {
                    minDist = curDist
                    allDots[i].kMeansIndex = j
                    arrayPos = j
                }
            }
            this.clusArr[arrayPos].arr.push(allDots[i])

        }
        return allDots
    }

    splitByClusters(dots: Dot[], numberOfClusters: number): Dot[] {
        this.clusArr=[]
        for (let i = 0; i < numberOfClusters; i++)
            this.clusArr[i] = new Cluster()
        this.IdentifyCenters(numberOfClusters, dots)
        for (; ;) {
            let chk = 0
            dots = this.Bind(dots, numberOfClusters)

            for (let j = 0; j < this.clusArr.length; j++) {
                this.clusArr[j].SetCenter()
            }
            for (let p = 0; p < numberOfClusters; p++) {
                if (this.clusArr[p].curX == this.clusArr[p].lastX && this.clusArr[p].curY == this.clusArr[p].lastY)
                    chk++
            }

            if (chk == numberOfClusters) {
                break
            }
        }
        return dots;
    }
}

export default KMeansClusteringRepository
