// Canvas setup
const gameArea = {
    canvas: document.getElementById("game"),
    start: function () {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.context = this.canvas.getContext("2d");
    }
}
// Wait till DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    startGame();
});
/********* Game functions down here alert*********/
var cols = 20;
var rows = 20;
var boxSizeWidht = window.innerWidth/cols;
var boxSizeHeight = window.innerHeight/rows;
var boxes = [];
while (boxes.push([]) < cols);
function startGame() {
    gameArea.start();
    drawGrid();
    checkUserMouse();
}
function drawGrid() {
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if (i%2 == j%2) {
                boxes[i][j] = new Box(i*boxSizeWidht, j*boxSizeHeight, 'blue', boxSizeWidht, boxSizeHeight);
            } else {
                boxes[i][j] = new Box(i*boxSizeWidht, j*boxSizeHeight, 'red', boxSizeWidht, boxSizeHeight);
            }    
        }
    }
    return boxes;
}
function checkUserMouse() {
    gameArea.canvas.addEventListener('mousemove', (e) => {
        checkColision(e, type = 'desktop');
    });
    gameArea.canvas.addEventListener('touchmove', (e) => {
        checkColision(e, type = 'tablet');
    });
}
function checkColision(e, type) {
    if (type === 'desktop') {
        mouseX = e.clientX;
        mouseY = e.clientY;
    } else if (type === 'tablet') {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
    }
    console.log(mouseX, mouseY);
    mouseHypot = parseInt(Math.hypot(mouseX, mouseY));
    boxes.forEach((elm) => {
        elm.forEach((elm) => {
            let x = elm.x;
            let y = elm.y;
            let left = parseInt(y + elm.height);
            let top = parseInt(x + elm.width);
            let elemHypot = parseInt(Math.hypot(x, y));
            if 
            ( 
                (mouseY <= left && mouseX <= top)
                &&
                (mouseY > y && mouseX > x)
                &&
                (mouseHypot >= elemHypot)

            ) {
                elm.remove();
            }

        }); 
    });
}