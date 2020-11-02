let canvas = document.getElementById("snake");
console.log(canvas)
let context = canvas.getContext("2d");
// https://developer.mozilla.org/pt-BR/docs/Web/API/CanvasRenderingContext2D

//console.log(context)

let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

//console.log(snake)

function criarBG(){
    context.fillStyle = "lightgreen";
    // https://www.w3schools.com/tags/canvas_fillstyle.asp
    context.fillRect(0, 0, 16 * box, 16 * box);
    // https://www.w3schools.com/tags/canvas_fillrect.asp
}

function criarCobrinha(){
    for (i = 0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

criarBG();
criarCobrinha();


