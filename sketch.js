var snake;

function mousePressed() {
    snake.currLength += 5;
}

function keyPressed(key) {
    switch (key.code) {
        case "ArrowRight":
            moveSnake("RIGHT");
            break;
        case "ArrowLeft":
            moveSnake("LEFT");
            break;
        case "ArrowUp":
            moveSnake("TOP")
            break;
        case "ArrowDown":
            moveSnake("BOTTOM")
            break;
            alert("Something is wrong with the event handling in sketch.js line 17.")
    }
}

function moveSnake(_direction) {
    snake.direction = _direction;
}

function setup() {
    var body = select('body');
    body.style('overflow', 'none')
    createCanvas(window.innerWidth, window.innerHeight);
    background(123, 22, 230)
    snake = new Snake(width / 2, height / 2, 30, color(23, 44, 123));
}

function draw() {
    background(123, 22, 230)
    if (finished) {
        snake = new Snake(width / 2, height / 2, 30, color(23, 44, 123));
        finished = false;
    }
    snake._draw();

}