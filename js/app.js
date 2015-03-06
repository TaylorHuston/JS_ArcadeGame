var gridSize = 101; //Helper variable for the seize of movement squares

// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = 0;
    this.y = gridSize;
    this.speed = 1;
    
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += gridSize*dt;
    if (this.x > gridSize*6) {
        this.x = 0;
    }
    
}


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = gridSize * 2;
    this.y = gridSize * 4;
}

Player.prototype.update = function(e) {
    if (e == "left") {
        this.x -= gridSize;
    };
    if (e == "up") {
        this.y -= gridSize;
    };
    if (e == "right") {
        this.x += gridSize;
    };
    if (e == "down") {
        this.y += gridSize;
    };
    this.checkCollision();
    if(this.y < gridSize) {
        console.log("you win!");
    }
}

Player.prototype.checkCollision = function () {

}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(e) {
    console.log(e);
    this.update(e);
    
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player();
var allEnemies = new Array();
allEnemies.push(new Enemy());




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
