// Obstacles
class Box {
    constructor(x , y , color, sizeX, sizeY){
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = sizeX;
        this.height = sizeY;
        gameArea.context.fillStyle = this.color;
        gameArea.context.fillRect(this.x, this.y, this.width, this.height);
    }

    remove() {
        gameArea.context.clearRect(this.x, this.y, this.width, this.height);
    }

}