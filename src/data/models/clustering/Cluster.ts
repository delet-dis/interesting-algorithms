import Dot from "@/data/models/clustering/Dot";
class Cluster{
    curX:number
    curY:number
    arr:Dot[]
    lastX:number
    lastY:number
    constructor() {
        this.curX=-1
        this.curY=-1
        this.lastY=-1
        this.lastX=-1
        this.arr=[]
    }
    SetCenter(){
        let sumX=0
        let sumY=0
        let i=0
        for(; i<this.arr.length;sumX+=this.arr[i].xCoordinate,i++){
            // empty
        }
        i=0
        for(; i<this.arr.length;sumY+=this.arr[i].yCoordinate,i++){
            // empty
        }
        this.lastX=this.curX
        this.lastY=this.curY
        this.curX=sumX/this.arr.length
        this.curY=sumY/this.arr.length
    }
}
export default Cluster