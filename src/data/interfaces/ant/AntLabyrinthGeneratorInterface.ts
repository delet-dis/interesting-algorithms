import AntCell from "@/data/models/ant/AntCell";

interface AntLabyrinthGeneratorInterface {
    generateLabyrinth(size: number): AntCell[][]
}

export default AntLabyrinthGeneratorInterface
