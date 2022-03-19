import ClusteringInterface from "@/data/interfaces/clustering/ClusteringInterface";
import Dot from "@/data/models/clustering/Dot";

class HierarchyClusteringRepository implements ClusteringInterface{
    private static instance: HierarchyClusteringRepository

    public static getInstance(): HierarchyClusteringRepository {
        if (!HierarchyClusteringRepository.instance) {
            HierarchyClusteringRepository.instance = new HierarchyClusteringRepository()
        }

        return HierarchyClusteringRepository.instance
    }

    splitByClusters(dots: Dot[], numberOfClusters: number): Dot[] {
        return [];
    }
}
