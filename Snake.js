var finished = false;

var directions = {
    RIGHT: "RIGHT",
    LEFT: "LEFT",
    TOP: "TOP",
    BOTTOM: "BOTTOM"
};

function finishGame() {
    finished = true;
}

function starterArray(_xPos, _yPos) {
    return [{
        x: _xPos,
        y: _yPos
    }, {
        x: _xPos + this._width,
        y: _yPos
    }]
}

var Snake = function(_xPos, _yPos, _width, _color) {
    this._width = _width;
    this._color = _color;
    this.currLength = 2;
    this.direction = directions.RIGHT;
    this.previousDirection = directions.RIGHT;
    this._history = starterArray(_xPos, _yPos);
    this.speed = 3;
    
    this._draw = function() {
        switch (this.direction) {
            case directions.RIGHT:
                if (this.previousDirection != directions.LEFT) {
                    this._history.unshift({
                        x: this._history[0].x + this.speed,
                        y: this._history[0].y
                    })
                    this.previousDirection = directions.RIGHT;
                } else {
                    this.direction = directions.LEFT
                }
                break;
            case directions.LEFT:
                if (this.previousDirection != directions.RIGHT) {
                    this._history.unshift({
                        x: this._history[0].x - this.speed,
                        y: this._history[0].y
                    })
                    this.previousDirection = directions.LEFT;
                } else {
                    this.direction = directions.RIGHT;
                }
                break;
            case directions.TOP:
                if (this.previousDirection != directions.BOTTOM) {
                    this._history.unshift({
                        x: this._history[0].x,
                        y: this._history[0].y - this.speed
                    })
                    this.previousDirection = directions.TOP;
                } else {
                    this.direction = directions.BOTTOM;
                }
                break;
            case directions.BOTTOM:
                if (this.previousDirection != directions.TOP) {
                    this._history.unshift({
                        x: this._history[0].x,
                        y: this._history[0].y + this.speed
                    })
                    this.previousDirection = directions.BOTTOM;
                } else {
                    this.direction = directions.TOP;
                }
                break;

            default:
                alert("Some error happened before line 41. Please check it.")
        }
        if (this._history.length > this.currLength) {
            this._history.splice(this._history.length - 1)
        }

        if (this._history[0].x < 0 + this._width / 2 || this._history[0].x + this._width / 2 > width || this._history[0].y < 0 + this._width / 2 || this._history[0].y + this._width / 2 > height) {
            finishGame();
            alert("Thank you for playing this game, your score is " + this.currLength * floor(random(22, 28)));
        }
        for (var index = 0; index < this._history.length; index++) {
            fill(this._color);
            noStroke();
            ellipse(this._history[index].x, this._history[index].y, this._width, this._width)
        }
    }

    this.update = function() {
        if (!finished) {
            this._draw();
        }
        for (var index = 0; index < this._history.length; index++) {

        }
    }

    this.eatFood = function() {

    }
}