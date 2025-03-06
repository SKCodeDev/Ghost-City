const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const gridSize = 20;
canvas.width = 400;
canvas.height = 400;
const easy = document.getElementById("idEasy")
const mid = document.getElementById("idMid")
const hard = document.getElementById("idHard")
const score = document.getElementById("idScore")

let snake = [
    { x: 160, y: 160 },
    { x: 140, y: 160 },
    { x: 120, y: 160 },
    { x: 100, y: 160 },
];

let dx = gridSize;
let dy = 0;

let food = spawnFood();

document.addEventListener("keydown", changeDirection);

function main() {
    if (gameOver())
    {
        alert("Game Over!");
        location.reload()
    }

    if(easy.selected == true)
    {
        setTimeout(() => {
            clearCanvas();
            drawFood();
            moveSnake();
            drawSnake();
            main();
        }, 200);
    }

    if(mid.selected == true)
    {
        setTimeout(() => {
            clearCanvas();
            drawFood();
            moveSnake();
            drawSnake();
            main();
        }, 100);
    }

    if(hard.selected == true)
    {
        setTimeout(() => {
            clearCanvas();
            drawFood();
            moveSnake();
            drawSnake();
            main();
        }, 50);
    }
}

function scoreCounter()
{
    score.innerHTML++
}

function clearCanvas() {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
    snake.forEach(drawSnakePart);
}

function drawSnakePart(snakePart) {
    let rand = document.getElementById("idRand")
    ctx.fillStyle = "rgb(0, 0, 206)";
    if(rand.selected == true)
        ctx.strokeStyle = "#000"
    else
    ctx.strokeStyle = "rgb(0, 0, 206)";

    ctx.fillRect(snakePart.x, snakePart.y, gridSize, gridSize);
    ctx.strokeRect(snakePart.x, snakePart.y, gridSize, gridSize);
}

function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        food = spawnFood();
    } else {
        snake.pop();
    }
}

function changeDirection(event) {
    const keyPressed = event.keyCode;

    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;

    const goingUp = dy === -gridSize;
    const goingDown = dy === gridSize;
    const goingRight = dx === gridSize;
    const goingLeft = dx === -gridSize;

    if (keyPressed === LEFT_KEY && !goingRight) {
        dx = -gridSize;
        dy = 0;
    }

    if (keyPressed === UP_KEY && !goingDown) {
        dx = 0;
        dy = -gridSize;
    }

    if (keyPressed === RIGHT_KEY && !goingLeft) {
        dx = gridSize;
        dy = 0;
    }

    if (keyPressed === DOWN_KEY && !goingUp) {
        dx = 0;
        dy = gridSize;
    }
}

function spawnFood() {
    let foodX = Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize;
    let foodY = Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize;

    snake.forEach(part => {
        if (part.x === foodX && part.y === foodY) {
            foodX = Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize;
            foodY = Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize;
        }
    });

    return { x: foodX, y: foodY };
}

function drawFood() {
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(food.x, food.y, gridSize, gridSize);
}

function gameOver() {
    for (let i = 4; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true;
    }

    const hitLeftWall = snake[0].x < 0;
    const hitRightWall = snake[0].x >= canvas.width;
    const hitToptWall = snake[0].y < 0;
    const hitBottomWall = snake[0].y >= canvas.height;

    return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall;
}
