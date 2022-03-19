import ClusteringInterface from "@/data/interfaces/clustering/ClusteringInterface";
import Dot from "@/data/models/clustering/Dot";

class KMeansClusteringRepository implements ClusteringInterface{
    private static instance: KMeansClusteringRepository

    public static getInstance(): KMeansClusteringRepository {
        if (!KMeansClusteringRepository.instance) {
            KMeansClusteringRepository.instance = new KMeansClusteringRepository()
        }

        return KMeansClusteringRepository.instance
    }

    splitByClusters(dots: Dot[], numberOfClusters: number): Dot[] {
        return [];
    }
}
