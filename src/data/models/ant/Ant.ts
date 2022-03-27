import AntCell from "@/data/models/ant/AntCell";
import point from "@/data/models/Point";
import AntCellType from "@/data/enums/AntCellType";

class Ant{
    public way:AntCell[]
    public previousPosition:AntCell
    public curPosition:AntCell
    public foodUsefulness:number
    constructor(start:AntCell) {
        this.previousPosition=new AntCell(new point(-1, -1),AntCellType.EMPTY_CELL, 0,0)
        this.foodUsefulness=0
        this.way=[]
        this.curPosition=start
    }
    public FindPossibleWays(Maze:AntCell[][],size:number, antNumber:number):AntCell[]{
        const possibleDirections:AntCell[]=[]
        if(this.curPosition.point.x+1<size && this.way.every(check=>check!=Maze[this.curPosition.point.y][this.curPosition.point.x+1]) && Maze[this.curPosition.point.y][this.curPosition.point.x+1].type!=AntCellType.BORDER_CELL){
            possibleDirections.push(Maze[this.curPosition.point.y][this.curPosition.point.x+1])
        }
        if(this.curPosition.point.x-1>=0 && this.way.every(check=>check!=Maze[this.curPosition.point.y][this.curPosition.point.x-1]) && Maze[this.curPosition.point.y][this.curPosition.point.x-1].type!=AntCellType.BORDER_CELL){
            possibleDirections.push(Maze[this.curPosition.point.y][this.curPosition.point.x-1])
        }
        if(this.curPosition.point.y+1<size && this.way.every(check=>check!=Maze[this.curPosition.point.y+1][this.curPosition.point.x]) && Maze[this.curPosition.point.y+1][this.curPosition.point.x].type!=AntCellType.BORDER_CELL){
            possibleDirections.push(Maze[this.curPosition.point.y+1][this.curPosition.point.x])
        }
        if(this.curPosition.point.y-1>=0 && this.way.every(check=>check!=Maze[this.curPosition.point.y-1][this.curPosition.point.x]) && Maze[this.curPosition.point.y-1][this.curPosition.point.x].type!=AntCellType.BORDER_CELL){
            possibleDirections.push(Maze[this.curPosition.point.y-1][this.curPosition.point.x])
        }
        return possibleDirections
    }
    public ChooseDirection(Maze:AntCell[][],possibleDirections:AntCell[]):boolean{
        //console.log((possibleDirections.length))
       //[this.curPosition.point.y][this.curPosition.point.x].type=AntCellType.BE_ON_WAY
        if(possibleDirections.length==1){
            this.previousPosition=this.curPosition
            this.way.push(this.curPosition)
            this.curPosition=possibleDirections[0]
            if(this.curPosition.type==AntCellType.FOOD_CELL){
                return false
            }
            return true
        }

        if(possibleDirections.length==2){
            const a=((Math.pow(possibleDirections[0].pheromones,1))/(Math.pow(possibleDirections[0].pheromones,1)+Math.pow(possibleDirections[1].pheromones,1)))
            // console.log(a,Math.pow(possibleDirections[0].pheromones,2)+0.5, (Math.pow(possibleDirections[0].pheromones,2)+Math.pow(possibleDirections[1].pheromones,2)+1), "kk")
            const rand=Math.random()
            if(rand<a){
                this.previousPosition=this.curPosition
                this.way.push(this.curPosition)
                this.curPosition=possibleDirections[0]
                if(this.curPosition.type==AntCellType.FOOD_CELL){
                    return false
                }
            }
            else{
                this.previousPosition=this.curPosition
                this.way.push(this.curPosition)
                this.curPosition=possibleDirections[1]
                if(this.curPosition.type==AntCellType.FOOD_CELL){
                    return false
                }
            }
            return true
        }

        if(possibleDirections.length==3){
           const a = (Math.pow(possibleDirections[0].pheromones,1)/((Math.pow(possibleDirections[0].pheromones,1)+Math.pow(possibleDirections[1].pheromones,1)+Math.pow(possibleDirections[2].pheromones,1))))
            const b = a + (Math.pow(possibleDirections[1].pheromones,1)/((Math.pow(possibleDirections[0].pheromones,1)+Math.pow(possibleDirections[1].pheromones,1)+Math.pow(possibleDirections[2].pheromones,1))))
            const rand=Math.random()
            // console.log(a, b)
            if(rand<a){
                this.previousPosition=this.curPosition
                this.way.push(this.curPosition)
                this.curPosition=possibleDirections[0]
                if(this.curPosition.type==AntCellType.FOOD_CELL){
                    return false
                }

            }
            else if(rand<b){
                this.previousPosition=this.curPosition
                this.way.push(this.curPosition)
                this.curPosition=possibleDirections[1]
                if(this.curPosition.type==AntCellType.FOOD_CELL){
                    return false
                }
            }
            else{
                this.previousPosition=this.curPosition
                this.way.push(this.curPosition)
                this.curPosition=possibleDirections[2]
                if(this.curPosition.type==AntCellType.FOOD_CELL){
                    return false
                }
            }
            return true
        }
        return false
    }

}
export default Ant