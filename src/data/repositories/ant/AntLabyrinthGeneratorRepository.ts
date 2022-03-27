import AntCell from "@/data/models/ant/AntCell";
import AntCellType from "@/data/enums/AntCellType";
import point from "@/data/models/Point";
import AntLabyrinthGeneratorInterface from "@/data/interfaces/ant/AntLabyrinthGeneratorInterface";

class AntLabyrinthGeneratorRepository implements AntLabyrinthGeneratorInterface {
    private static instance: AntLabyrinthGeneratorRepository

    public static getInstance(): AntLabyrinthGeneratorRepository {
        if (!AntLabyrinthGeneratorRepository.instance) {
            AntLabyrinthGeneratorRepository.instance = new AntLabyrinthGeneratorRepository()
        }

        return AntLabyrinthGeneratorRepository.instance
    }

    generateLabyrinth(size: number): AntCell[][] {
        const Maze: AntCell[][] = []

        for (let i = 0; i < size; i++) {
            Maze[i] = []

            for (let j = 0; j < size; j++) {
                Maze[i][j] = new AntCell(new point(j, i), 10, AntCellType.EMPTY_CELL, 0)
            }
        }
        for (let i = 0; i < 20; i++) {
            let newWall = Math.random()
            if (newWall < 0.7) {
                let randx = Math.floor(Math.random() * 15)
                let randy = Math.floor(Math.random() * 15)
                Maze[randy][randx].type = AntCellType.BORDER_CELL
                for (let j = 0; j < 25; j++) {
                    newWall = Math.random()
                    if (newWall < 0.8) {
                        newWall = Math.random()
                        if (randy + 1 < size && newWall < 0.2) {
                            randy = randy + 1
                            Maze[randy][randx].type = AntCellType.BORDER_CELL
                        } else if (randy - 1 >= 0 && newWall < 0.2) {
                            randy = randy - 1
                            Maze[randy][randx].type = AntCellType.BORDER_CELL
                        } else if (randx + 1 < size && newWall < 0.25) {
                            randx = randx + 1
                            Maze[randy][randx].type = AntCellType.BORDER_CELL
                        } else if (randx - 1 >= 0 && newWall < 0.25) {
                            randx = randx - 1
                            Maze[randy][randx].type = AntCellType.BORDER_CELL
                        }
                    }
                }
            }
        }
        return Maze
    }
}

export default AntLabyrinthGeneratorRepository
