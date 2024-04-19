const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

// Vitesse sur X
vx = 20;

// Vitesse sur Y
vy = -20;

//PommeX
let pommeX = 0;

//PommeY
let pommeY = 0;


let snake = [
    {
        x: 140,
        y: 150
    },
    {
        x: 120,
        y: 150
    },
    {
        x: 100,
        y: 150
    },
    {
        x: 80,
        y: 150
    }
]

function animation(){
    
    setTimeout(function (){

        clearCanvas();

        dessinApple()
        
        dessinSnake();

        runSnake();

        animation();
        
    }, 100);
}

animation();
createPomme();

function clearCanvas() {
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
}

function dessinSnakeMorceaux(morceau) {
    
    ctx.fillStyle = "#00fe14";
    ctx.strokeStyle = "black";
    ctx.fillRect(morceau.x, morceau.y, 20, 20);
    ctx.strokeRect(morceau.x, morceau.y, 20, 20);
}

function dessinSnake() {
    snake.forEach(morceau => {
        dessinSnakeMorceaux(morceau);
    })
}


function runSnake() {
    const head = {x: snake[0].x + vx, y: snake[0].y + vy};
    snake.unshift(head);
    
    const  snakeEatApple = snake[0].x === pommeX && snake[0].y === pommeY;
    
    if (snakeEatApple) {
        createPomme();
    } else {
        snake.pop();
    }
    
}
runSnake();

document.addEventListener("keydown", changeDirection);

function changeDirection(e) {
    
    const FLECHE_LEFT = 37;
    const FLECHE_RIGHT = 39;
    const FLECHE_TOP = 38;
    const FLECHE_BOTTOM = 40;

    const direction = e.keyCode;

    const top = vy === -20;
    const bottom = vy === 20;
    const right = vx === 20;
    const left = vx === -20;
    
    if (direction === FLECHE_LEFT && !right){vx = -20; vy = 0;}
    if (direction === FLECHE_TOP && !bottom){vx = 0; vy = -20;}
    if (direction === FLECHE_RIGHT && !left){vx = 20; vy = 0;}
    if (direction === FLECHE_BOTTOM && !top){vx = 0; vy = 20;}
    
}

function random(){
    return Math.round((Math.random() * 690) / 20) * 20;
}

function createPomme() {
    
    pommeX = random();
    pommeY = random();
    
    snake.forEach(function(part){
        
        const snakeOnApple = part.x == pommeX && part.y == pommeY;
        
        if (snakeOnApple) {
            createPomme();
        }
        
    })
    
    
}

function dessinApple() {
    ctx.fillStyle = "red";
    ctx.strokeStyle = "darkred";
    ctx.beginPath();
    ctx.arc(pommeX -10, pommeY, 5, 0, 4 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

