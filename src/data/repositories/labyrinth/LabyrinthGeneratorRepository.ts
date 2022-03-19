import LabyrinthGeneratorInterface from "@/data/interfaces/labyrinth/LabyrinthGeneratorInterface";
import LabyrinthCell from "@/data/models/labyrinth/LabyrinthCell";
import LabyrinthCellType from "@/data/enums/LabyrinthCellType";


class LabyrinthGeneratorRepository implements LabyrinthGeneratorInterface {
    private static instance: LabyrinthGeneratorRepository

    private static list: number[] = []

    public static getInstance(): LabyrinthGeneratorRepository {
        if (!LabyrinthGeneratorRepository.instance) {
            LabyrinthGeneratorRepository.instance = new LabyrinthGeneratorRepository()
        }

        return LabyrinthGeneratorRepository.instance
    }

    private static findPossibleDirection(size: number, maze: LabyrinthCell[][], list: number[], i: number, j: number): number[] {
        if (i + 2 < size && maze[i + 2][j].type === LabyrinthCellType.BORDER_CELL) {
            list.push((i + 2) * size + j)
            maze[i + 2][j].type = LabyrinthCellType.CAN_BECOME_EMPTY
        }

        if (i - 2 >= 0 && maze[i - 2][j].type === LabyrinthCellType.BORDER_CELL) {
            list.push((i - 2) * size + j)
            maze[i - 2][j].type = LabyrinthCellType.CAN_BECOME_EMPTY
        }

        if (j + 2 < size && maze[i][j + 2].type === LabyrinthCellType.BORDER_CELL) {
            list.push((i) * size + j + 2)
            maze[i][j + 2].type = LabyrinthCellType.CAN_BECOME_EMPTY
        }

        if (j - 2 >= 0 && maze[i][j - 2].type === LabyrinthCellType.BORDER_CELL) {
            list.push((i) * size + j - 2)
            maze[i][j - 2].type = LabyrinthCellType.CAN_BECOME_EMPTY
        }

        return list
    }

    private static createWay(size: number, maze: LabyrinthCell[][], position: number, positionNum: number): LabyrinthCell[][] {
        const j = positionNum % size
        const i = Math.floor(positionNum / size)

        const possibleWays: Array<number> = [4, 4, 4, 4]

        if (i + 2 < size && maze[i + 2][j].type === LabyrinthCellType.EMPTY_CELL) {
            possibleWays[0] = 0
        }

        if (i - 2 >= 0 && maze[i - 2][j].type === LabyrinthCellType.EMPTY_CELL) {
            possibleWays[1] = 1
        }

        if (j + 2 < size && maze[i][j + 2].type === LabyrinthCellType.EMPTY_CELL) {
            possibleWays[2] = 2
        }

        if (j - 2 >= 0 && maze[i][j - 2].type === LabyrinthCellType.EMPTY_CELL) {
            possibleWays[3] = 3
        }

        const firstRand: number = Math.floor(Math.random() * 4)
        const secondRand: number = Math.floor(Math.random() * 4)

        const helper: number = possibleWays[firstRand]
        possibleWays[firstRand] = possibleWays[secondRand]
        possibleWays[secondRand] = helper

        for (let m = 0; m < 4; m++) {
            if (possibleWays[m] === 0) {
                maze[i + 1][j].type = LabyrinthCellType.EMPTY_CELL
                maze[i][j].type = LabyrinthCellType.EMPTY_CELL
                break
            }

            if (possibleWays[m] === 1) {
                maze[i - 1][j].type = LabyrinthCellType.EMPTY_CELL
                maze[i][j].type = LabyrinthCellType.EMPTY_CELL
                break
            }

            if (possibleWays[m] === 2) {
                maze[i][j + 1].type = LabyrinthCellType.EMPTY_CELL
                maze[i][j].type = LabyrinthCellType.EMPTY_CELL
                break
            }

            if (possibleWays[m] === 3) {
                maze[i][j - 1].type = LabyrinthCellType.EMPTY_CELL
                maze[i][j].type = LabyrinthCellType.EMPTY_CELL
                break
            }
        }
        LabyrinthGeneratorRepository.list.splice(position, 1)
        LabyrinthGeneratorRepository.list =
            LabyrinthGeneratorRepository.findPossibleDirection(size, maze, LabyrinthGeneratorRepository.list, i, j)

        return maze
    }

    public generateLabyrinth(size: number): LabyrinthCell[][] {

        let labyrinth: LabyrinthCell[][] = []
        LabyrinthGeneratorRepository.list=[]
        for (let i = 0; i < size; i++) {
            labyrinth[i] = []

            for (let j = 0; j < size; j++) {
                labyrinth[i][j] = new LabyrinthCell(j, i, LabyrinthCellType.BORDER_CELL)
            }
        }

        const a: number = Math.floor(Math.random() * size)
        const b: number = Math.floor(Math.random() * size)

        LabyrinthGeneratorRepository.list =
            LabyrinthGeneratorRepository.findPossibleDirection(size, labyrinth, LabyrinthGeneratorRepository.list, a, b)

        labyrinth[a][b].type = LabyrinthCellType.EMPTY_CELL

        for (let s = 0; s < Math.floor(Math.pow(Math.log(size), 1.5) * size); s++) {
            const k = Math.floor(Math.random() * LabyrinthGeneratorRepository.list.length)
            const position = LabyrinthGeneratorRepository.list[k]
            labyrinth = LabyrinthGeneratorRepository.createWay(size, labyrinth, k, position)
        }

        return labyrinth
    }
}

export default LabyrinthGeneratorRepository
