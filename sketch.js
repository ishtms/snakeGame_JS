var snake;
var food;
var speed;
var myParagraph
var data = "GO GO GO!"
function preload() {
    food = {
        x: random(30, width - 30),
        y: random(30, height - 30)
    }
    myParagraph = select('#para');
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
var myCanvas;

function setup() {
    snake = new Snake(width / 2, height / 2, 30, color(23, 44, 123));
    speed = map(snake.speed, 3, 23, 0, 10);
    createCanvas(window.innerWidth, window.innerHeight);
    background(123, 22, 230)
}
var featuring;

function draw() {
    background(123, 22, 230)
    var speed = map(snake.speed, 3, 24, 0, 10);
    returnFeaturedName();
    console.log(data);
    myParagraph.html(data);
    var colour;
    if (speed < 3) {
        colour = 'red'
    } else if (speed < 6) {
        colour = 'orange'
    } else if (speed < 9) {
        colour = 'green'
    } else {
        colour = color(random(0, 255));
    }
    stroke(colour);
    var _width = width - 150;
    rect(_width, 20, 100, 50);
    fill(colour);
    for (var index = 0; index < speed; index++) {
        rect(_width, 20, 10 + (speed * 10) - 1, 50)
    }
    noStroke();
    generateFood();
    checkFoodEaten();
    if (finished) {
        snake = new Snake(width / 2, height / 2, 30, color(23, 44, 123));
        finished = false;
    }
    snake._draw();
}
function returnFeaturedName() {
    if (speed == 0) {
        data = "GO GO GO!";
    } else if (speed <= 1) {
        data = "GREAT START";
    } else if (speed <= 2) {
        data = "DOING GREAT";
    } else if (speed <= 3) {
        data = "AWESOME";
    } else if (speed <= 4) {
        data = "WICKED STREAK";
    } else if (speed <= 5) {
        data = "OMG!!!!";
    } else if (speed <= 6) {
        data = "MONSTROUS";
    } else if (speed <= 7) {
        data = "BAZINGAAAA";
    } else if (speed <= 8) {
        data = "GODLIKE!!!"
    } else if (speed <= 9) {
        data = "YOU'RE CRAZY!!";
    } else{
        data = "INHUMAN!!!!";
    }
}

function generateFood() {
    fill(255);
    ellipse(food.x, food.y, 20, 20)
}

function checkFoodEaten() {
    speed = map(snake.speed, 3, 23, 0, 10);
    if (dist(snake._history[0].x, snake._history[0].y, food.x, food.y) < 20) {
        snake.currLength += 5;
        if (snake.speed < 24) {
            snake.speed += 1
        }
        food = {
            x: random(30, width - 30),
            y: random(30, height - 30)
        }
    }
}