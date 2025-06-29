const gameBoard = document.getElementById('game-board');
const scoreDisplay = document.getElementById('score');

let snake = [{x: 15, y: 15}]; // The snake is a list of coordinates
let dx = 0;  // x direction
let dy = -1; // y direction
let foodX;   // Food's x position
let foodY;   // Food's y position
let score = 0;
let gameOver = false;
let gameInterval;

function startGame() {
    if (gameOver) {
        // Reset the game if it's over
        score = 0;
        snake = [{x: 15, y: 15}];
        dx = 0;
        dy = -1;
        gameOver = false;
    }

    createFood();
    scoreDisplay.textContent = "Score: 0"; // Reset score display

    clearInterval(gameInterval); // Clear any existing interval
    gameInterval = setInterval(moveSnake, 200);
}

function moveSnake() {
    if (gameOver) return;

    const headX = snake[0].x + dx;
    const headY = snake[0].y + dy;

    if (isOutOfBound(headX, headY) || isEatingItself({x: headX, y: headY})) {
        gameOver = true;
        clearInterval(gameInterval); // Stop the game loop
        alert('Game Over! Score: ' + score);
        return;
    }

    snake.unshift({x: headX, y: headY}); // add new head position to the snake

    if (headX === foodX && headY === foodY) {
        createFood();  // If snake eats the food, then create a new one
        score++;
        scoreDisplay.textContent = "Score: " + score; // Update the score display
    } else {
        snake.pop();  // Remove tail of snake when it doesn't eat anything
    }

    drawGameBoard();
}

function isOutOfBound(x, y) {
    return x < 0 || x >= 30 || y < 0 || y >= 30;  // Assuming the game board is 30x30
}

function isEatingItself(head) {
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) return true;
    }
    return false;
}

function createFood() {
    foodX = Math.floor(Math.random() * 30); // x position of the new food
    foodY = Math.floor(Math.random() * 30); // y position of the new food
    while (snake.some(segment => segment.x === foodX && segment.y === foodY)) {
        // Ensure food doesn't spawn on the snake
        foodX = Math.floor(Math.random() * 30);
        foodY = Math.floor(Math.random() * 30);
    }
}

function drawGameBoard() {
    gameBoard.innerHTML = ""; // Clear the board before redrawing

    // Draw snake segments
    for (let i = 0; i < snake.length; i++) {
        const element = document.createElement('div');
        element.classList.add('snake');
        element.style.left = snake[i].x * 10 + 'px';
        element.style.top = snake[i].y * 10 + 'px';
        gameBoard.appendChild(element);
    }

    // Draw food
    if (foodX !== undefined && foodY !== undefined) {
        const foodElement = document.createElement('div');
        foodElement.classList.add('food');
        foodElement.style.left = foodX * 10 + 'px';
        foodElement.style.top = foodY * 10 + 'px';
        gameBoard.appendChild(foodElement);
    }
}

// Key event listeners for movement control
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            if(dy !== 1){ // Prevent going directly opposite direction
                dx = 0;
                dy = -1;
            }
            break;
        case 'ArrowDown':
            if(dy !== -1){ // Prevent going directly opposite direction
                dx = 0;
                dy = 1;
            }
            break;
        case 'ArrowLeft':
            if(dx !== 1){ // Prevent going directly opposite direction
                dx = -1;
                dy = 0;
            }
            break;
        case 'ArrowRight':
            if(dx !== -1){ // Prevent going directly opposite direction
                dx = 1;
                dy = 0;
            }
            break;
    }
});

// Start the game when the page loads
