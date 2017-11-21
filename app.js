//Create a div for the score
var countdiv = document.createElement('div');
countdiv.innerHTML = "Score: 0";
//Setting the style
countdiv.style.color = 'black';
countdiv.style.fontSize = "large";
//Add it
document.body.appendChild(countdiv);
//Create a playerScore variable
var playerScore = 0;
function writeScore() {
  countdiv.innerHTML = "Score: " + playerScore;
}

//Adding postions to global scope for random use
var yPositions = [55, 140, 225];
var xPositions = [-150, -250, -450, -950, -600];

//Create a random speed between 200 and 250
var speed = Math.floor((Math.random() * 50) + 200);

//Enemies our player must avoid
var Enemy = function() {
  //Variables applied to each of our instances go here,
  //we've provided one for you to get started
  //Making the enemy positions random, but forcing them on the ste
  this.x = xPositions[Math.floor(Math.random() * xPositions.length)];
  this.y = yPositions[Math.floor(Math.random() * yPositions.length)];
  //The image/sprite for our enemies, this uses
  //a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
  var speed = Math.floor((Math.random() * 50) + 200);
};

//Update the enemy's position, required method for game
//Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  //You should multiply any movement by the dt parameter
  //which will ensure the game runs at the same speed for
  //all computers.
  if (this.x < 500) {
    this.x = this.x + (speed * dt);
  }
  else {
    this.x = -50;
  }

  //A player hits a bug - algorithm: https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
  var playerDim = {x: player.x, y: player.y, width: 50, height: 50};
  var bugRect = {x: this.x, y: this.y, width: 80, height: 70};
  //Check for collisions
  if (playerDim.x < bugRect.x + bugRect.width && playerDim.x + playerDim.width > bugRect.x && playerDim.y < bugRect.y + bugRect.height && playerDim.height + playerDim.y > bugRect.y) {
    player.reset();
    //Set the score to zero
    playerScore = 0;
    writeScore();
  }
  //If a player makes it to the water, reset the bug and speed
  if (player.y < 20) {
    this.x = this.x + (speed * dt);
    this.x = xPositions[Math.floor(Math.random() * xPositions.length)];
    this.y = yPositions[Math.floor(Math.random() * yPositions.length)];
  }
};

//Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Now write your own player class
//This class requires an update(), render() and
//a handleInput() method.
var Player = function () {
  this.x = 200;
  this.y = 350;
  this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function() {
	//Play wins
	if (this.y < 20) {
  this.reset();
  //Increase the score if the player wins
  playerScore++;
  writeScore();
  }
};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(movement) {
  if(movement === 'left' && this.x > 0) {
    this.x = this.x - 50;
  }
  if(movement === 'right' && this.x < 400) {
    this.x = this.x + 50;
  }
  if(movement === 'up' && this.y > 3) {
    this.y = this.y - 50;
  }
  if(movement === 'down' && this.y < 400) {
    this.y = this.y + 50;
  }
};

//Resets the player
Player.prototype.reset = function() {
    this.x = 200;
    this.y = 350;
};

//Now instantiate your objects.
var bug1 = new Enemy();
var bug2 = new Enemy();
var bug3 = new Enemy();
var bug4 = new Enemy();
var bug5 = new Enemy();

//Place all enemy objects in an array called allEnemies
var allEnemies = [bug1, bug2, bug3, bug4, bug5];

//Place the player object in a variable called player
var player = new Player();

//This listens for key presses and sends the keys to your
//Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
