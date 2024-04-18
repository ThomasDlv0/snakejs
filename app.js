const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");


vx = 0;
vy = -10;

let snake = [
    {
        x: 140,
        y: 150
    },
    {
        x: 130,
        y: 150
    },
    {
        x: 120,
        y: 150
    },
    {
        x: 110,
        y: 150
    }
]

function animation(){
    
    setTimeout(function (){

        clearCanvas();

        dessinSnake();

        runSnake();

        animation();
        
    }, 100);
}

animation();

function clearCanvas() {
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
}

function dessinSnakeMorceaux(morceau) {
    
    ctx.fillStyle = "#00fe14";
    ctx.strokeStyle = "black";
    ctx.fillRect(morceau.x, morceau.y, 10, 10);
    ctx.strokeRect(morceau.x, morceau.y, 10, 10);
}

function dessinSnake() {
    snake.forEach(morceau => {
        dessinSnakeMorceaux(morceau);
    })
}


function runSnake() {
    const head = {x: snake[0].x + vx, y: snake[0].y + vy};
    snake.unshift(head);
    snake.pop();
}


