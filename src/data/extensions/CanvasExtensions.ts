export {};

declare global {
    interface HTMLCanvasElement {
        resizeToTwentyFivePx(this: HTMLCanvasElement): HTMLCanvasElement;
    }
}

HTMLCanvasElement.prototype.resizeToTwentyFivePx = function (this: HTMLCanvasElement) {
    const resizedCanvas = document.createElement('canvas')
    const resizedCanvasContext = resizedCanvas.getContext('2d')

    resizedCanvas.width = 25
    resizedCanvas.height = 25

    if (resizedCanvasContext) {
        resizedCanvasContext.drawImage(this, 0, 0, resizedCanvas.width, resizedCanvas.height)
    }

    return resizedCanvas
}
