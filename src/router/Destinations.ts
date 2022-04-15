import SidebarLinkEntity from "@/data/models/SidebarLinkEntity"

class Destinations {
    static readonly destinationsList: SidebarLinkEntity[] = [
        new SidebarLinkEntity("/", "fa-solid fa-house", "Главная", 0),
        new SidebarLinkEntity("/labyrinthAlgorithm", "fa-solid fa-location-arrow", "А*", 1),
        new SidebarLinkEntity("/clusteringAlgorithm", "fa-solid fa-boxes-stacked", "Алгоритм\nкластеризации", 2),
        new SidebarLinkEntity("/geneticAlgorithm", "fa-solid fa-dna", "Генетический\nалгоритм", 3),
        new SidebarLinkEntity("/antAlgorithm", "fa-solid fa-bug", "Муравьиный\nалгоритм", 4),
        new SidebarLinkEntity("/treeAlgorithm", "fa-solid fa-code-branch", "Дерево\nрешений", 5),
        new SidebarLinkEntity("/neuralAlgorithm", "fa-solid fa-brain", "Нейронная\nсеть", 6),
    ]
}

export default Destinations
