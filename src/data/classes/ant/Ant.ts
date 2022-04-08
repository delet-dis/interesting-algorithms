import AntCell from "@/data/models/ant/AntCell"
import point from "@/data/models/Point"
import AntCellType from "@/data/enums/AntCellType"

class Ant {
    public way: AntCell[] = []
    public previousPosition: AntCell = new AntCell(new point(-1, -1), AntCellType.EMPTY_CELL, 0, 0)
    public currentPosition: AntCell
    public nutritionalValue = 0

    constructor(start: AntCell) {
        this.currentPosition = start
    }

    public findPossibleWays(maze: AntCell[][], size: number): AntCell[] {
        const possibleDirections: AntCell[] = []

        if (this.currentPosition.point.x + 1 < size &&
            this.way.every(check => check != maze[this.currentPosition.point.y][this.currentPosition.point.x + 1]) &&
            maze[this.currentPosition.point.y][this.currentPosition.point.x + 1].type != AntCellType.BORDER_CELL) {
            possibleDirections.push(maze[this.currentPosition.point.y][this.currentPosition.point.x + 1])
        }

        if (this.currentPosition.point.x - 1 >= 0 &&
            this.way.every(check => check != maze[this.currentPosition.point.y][this.currentPosition.point.x - 1]) &&
            maze[this.currentPosition.point.y][this.currentPosition.point.x - 1].type != AntCellType.BORDER_CELL) {
            possibleDirections.push(maze[this.currentPosition.point.y][this.currentPosition.point.x - 1])
        }

        if (this.currentPosition.point.y + 1 < size &&
            this.way.every(check => check != maze[this.currentPosition.point.y + 1][this.currentPosition.point.x]) &&
            maze[this.currentPosition.point.y + 1][this.currentPosition.point.x].type != AntCellType.BORDER_CELL) {
            possibleDirections.push(maze[this.currentPosition.point.y + 1][this.currentPosition.point.x])
        }

        if (this.currentPosition.point.y - 1 >= 0 &&
            this.way.every(check => check != maze[this.currentPosition.point.y - 1][this.currentPosition.point.x]) &&
            maze[this.currentPosition.point.y - 1][this.currentPosition.point.x].type != AntCellType.BORDER_CELL) {
            possibleDirections.push(maze[this.currentPosition.point.y - 1][this.currentPosition.point.x])
        }

        return possibleDirections
    }

    public chooseDirection(maze: AntCell[][], possibleDirections: AntCell[]): boolean {
        switch (possibleDirections.length) {
            case 1: {
                this.previousPosition = this.currentPosition

                this.way.push(this.currentPosition)

                this.currentPosition = possibleDirections[0]

                return this.currentPosition.type != AntCellType.FOOD_CELL
            }

            case 2: {
                const a = (Math.pow(possibleDirections[0].numberOfPheromones, 1)) /
                    (Math.pow(possibleDirections[0].numberOfPheromones, 1) +
                        Math.pow(possibleDirections[1].numberOfPheromones, 1))

                const rand = Math.random()

                if (rand < a) {
                    this.previousPosition = this.currentPosition
                    this.way.push(this.currentPosition)
                    this.currentPosition = possibleDirections[0]

                    if (this.currentPosition.type == AntCellType.FOOD_CELL) {
                        return false
                    }
                } else {
                    this.previousPosition = this.currentPosition
                    this.way.push(this.currentPosition)
                    this.currentPosition = possibleDirections[1]

                    if (this.currentPosition.type == AntCellType.FOOD_CELL) {
                        return false
                    }
                }
                return true
            }

            case 3: {
                const a = Math.pow(possibleDirections[0].numberOfPheromones, 2) /
                    ((Math.pow(possibleDirections[0].numberOfPheromones, 2) +
                        Math.pow(possibleDirections[1].numberOfPheromones, 2) +
                        Math.pow(possibleDirections[2].numberOfPheromones, 2)))

                const b = a + Math.pow(possibleDirections[1].numberOfPheromones, 2) /
                    ((Math.pow(possibleDirections[0].numberOfPheromones, 2) +
                        Math.pow(possibleDirections[1].numberOfPheromones, 2) +
                        Math.pow(possibleDirections[2].numberOfPheromones, 2)))

                const rand = Math.random()

                if (rand < a) {
                    this.previousPosition = this.currentPosition
                    this.way.push(this.currentPosition)
                    this.currentPosition = possibleDirections[0]

                    if (this.currentPosition.type == AntCellType.FOOD_CELL) {
                        return false
                    }

                } else if (rand < b) {
                    this.previousPosition = this.currentPosition
                    this.way.push(this.currentPosition)
                    this.currentPosition = possibleDirections[1]

                    if (this.currentPosition.type == AntCellType.FOOD_CELL) {
                        return false
                    }
                } else {
                    this.previousPosition = this.currentPosition
                    this.way.push(this.currentPosition)
                    this.currentPosition = possibleDirections[2]

                    if (this.currentPosition.type == AntCellType.FOOD_CELL) {
                        return false
                    }
                }
                return true
            }

            case 4: {
                const a = Math.pow(possibleDirections[0].numberOfPheromones, 2) /
                    ((Math.pow(possibleDirections[0].numberOfPheromones, 2) +
                        Math.pow(possibleDirections[1].numberOfPheromones, 2) +
                        Math.pow(possibleDirections[2].numberOfPheromones, 2) +
                        Math.pow(possibleDirections[3].numberOfPheromones, 2)))

                const b = a + Math.pow(possibleDirections[1].numberOfPheromones, 2) /
                    ((Math.pow(possibleDirections[0].numberOfPheromones, 2) +
                        Math.pow(possibleDirections[1].numberOfPheromones, 2) +
                        Math.pow(possibleDirections[2].numberOfPheromones, 2)) +
                        Math.pow(possibleDirections[3].numberOfPheromones, 2))

                const c = a + b + Math.pow(possibleDirections[2].numberOfPheromones, 2) /
                    ((Math.pow(possibleDirections[0].numberOfPheromones, 2) +
                        Math.pow(possibleDirections[1].numberOfPheromones, 2) +
                        Math.pow(possibleDirections[2].numberOfPheromones, 2)) +
                        Math.pow(possibleDirections[3].numberOfPheromones, 2))

                const rand = Math.random()

                if (rand < a) {
                    this.previousPosition = this.currentPosition
                    this.way.push(this.currentPosition)
                    this.currentPosition = possibleDirections[0]

                    if (this.currentPosition.type == AntCellType.FOOD_CELL) {
                        return false
                    }

                } else if (rand < b) {
                    this.previousPosition = this.currentPosition
                    this.way.push(this.currentPosition)
                    this.currentPosition = possibleDirections[1]

                    if (this.currentPosition.type == AntCellType.FOOD_CELL) {
                        return false
                    }
                } else if (rand < c) {
                    this.previousPosition = this.currentPosition
                    this.way.push(this.currentPosition)
                    this.currentPosition = possibleDirections[2]

                    if (this.currentPosition.type == AntCellType.FOOD_CELL) {
                        return false
                    }
                } else {
                    this.previousPosition = this.currentPosition
                    this.way.push(this.currentPosition)
                    this.currentPosition = possibleDirections[3]

                    if (this.currentPosition.type == AntCellType.FOOD_CELL) {
                        return false
                    }
                }
                return true
            }
        }
        return false
    }
}

export default Ant
