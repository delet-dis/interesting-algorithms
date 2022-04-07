import Dot from "@/data/models/clustering/Dot";

class Cluster {
    currentX = -1
    currentY = -1
    dots: Dot[] = []
    lastX = -1
    lastY = -1

    setCenter() {
        let sumX = 0
        let sumY = 0

        this.dots.forEach((dot) => {
            sumX += dot.xCoordinate
            sumY += dot.yCoordinate
        })

        this.lastX = this.currentX
        this.lastY = this.currentY

        this.currentX = sumX / this.dots.length
        this.currentY = sumY / this.dots.length
    }
}

export default Cluster
