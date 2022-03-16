import LabyrinthGeneratorInterface from "@/data/interfaces/labyrinth/LabyrinthGeneratorInterface";
import LabyrinthCell from "@/data/models/labyrinth/LabyrinthCell";
import LabyrinthCellType from "@/data/enums/LabyrinthCellType";

class LabyrinthGeneratorRepository implements LabyrinthGeneratorInterface{
    private static instance: LabyrinthGeneratorRepository;

    public static getInstance(): LabyrinthGeneratorRepository {
        if (!LabyrinthGeneratorRepository.instance) {
            LabyrinthGeneratorRepository.instance = new LabyrinthGeneratorRepository();
        }

        return LabyrinthGeneratorRepository.instance;
    }

    generateLabyrinth(width: number, height: number): LabyrinthCell[][] {

        function FindPossibleDirection(Maze:LabyrinthCell[][],list:number[], i:number, j:number):number[]{

            if(i+2<height && Maze[i+2][j].Type===LabyrinthCellType.BORDER_CELL){
                list.push((i+2)*width+j)
                Maze[i+2][j].Type=LabyrinthCellType.CAN_BECOME_EMPTY
            }

            if(i-2>=0 && Maze[i-2][j].Type===LabyrinthCellType.BORDER_CELL){
                list.push((i-2)*width+j)
                Maze[i-2][j].Type=LabyrinthCellType.CAN_BECOME_EMPTY
            }

            if(j+2<width && Maze[i][j+2].Type===LabyrinthCellType.BORDER_CELL){
                list.push((i)*width+j+2)
                Maze[i][j+2].Type=LabyrinthCellType.CAN_BECOME_EMPTY
            }

            if(j-2>=0 && Maze[i][j-2].Type===LabyrinthCellType.BORDER_CELL){
                list.push((i)*width+j-2)
                Maze[i][j-2].Type=LabyrinthCellType.CAN_BECOME_EMPTY
            }
            return list
        }

        function CreateWay(Maze:LabyrinthCell[][],position:number, positionNum:number):LabyrinthCell[][]{
            const j= positionNum%width
            const i=Math.floor(positionNum/width)
            const PossibleWays: Array<number>=[4,4,4,4]
            if(i+2<height && Maze[i+2][j].Type===LabyrinthCellType.EMPTY_CELL){
                PossibleWays[0]=0
            }
            if(i-2>=0 && Maze[i-2][j].Type===LabyrinthCellType.EMPTY_CELL){
                PossibleWays[1]=1
            }
            if(j+2<width && Maze[i][j+2].Type===LabyrinthCellType.EMPTY_CELL){
                PossibleWays[2]=2
            }
            if(j-2>=0 && Maze[i][j-2].Type===LabyrinthCellType.EMPTY_CELL){
                PossibleWays[3]=3
            }
            const firstRand:number=Math.floor(Math.random()*4)
            const secondRand:number=Math.floor(Math.random()*4)
            const b:number= PossibleWays[firstRand]
            PossibleWays[firstRand] = PossibleWays[secondRand]
            PossibleWays[secondRand] = b
            for(let m=0;m<4;m++){
                if(PossibleWays[m]===0){
                    Maze[i+1][j].Type=LabyrinthCellType.EMPTY_CELL
                    Maze[i][j].Type=LabyrinthCellType.EMPTY_CELL
                    break
                }
                if(PossibleWays[m]===1){
                    Maze[i-1][j].Type=LabyrinthCellType.EMPTY_CELL
                    Maze[i][j].Type=LabyrinthCellType.EMPTY_CELL
                    break
                }
                if(PossibleWays[m]===2){
                    Maze[i][j+1].Type=LabyrinthCellType.EMPTY_CELL
                    Maze[i][j].Type=LabyrinthCellType.EMPTY_CELL
                    break
                }
                if(PossibleWays[m]===3){
                    Maze[i][j-1].Type=LabyrinthCellType.EMPTY_CELL
                    Maze[i][j].Type=LabyrinthCellType.EMPTY_CELL
                    break
                }
            }
            return Maze
        }
      let Labyrinth:LabyrinthCell[][]=[]
      let list:number[]=[]
        for(let i=0;i<height;i++){
            Labyrinth[i]=[]
            for(let j=0; j<height; j++){
                Labyrinth[i][j]=new LabyrinthCell(j,i,LabyrinthCellType.BORDER_CELL)
            }
        }
        const a:number=Math.floor(Math.random()*height)
        const b:number=Math.floor(Math.random()*width)
        list=FindPossibleDirection(Labyrinth, list, a,b)
        Labyrinth[a][b].Type=LabyrinthCellType.EMPTY_CELL
        for(let s=0;s<Math.floor(Math.pow(Math.log(Math.sqrt(height*width)),1.5)*Math.sqrt(height*width));s++) {
            const k = Math.floor(Math.random() * list.length)
            const position = list[k]
            Labyrinth = CreateWay(Labyrinth, k, position)
        }
        return Labyrinth;

    }
}

