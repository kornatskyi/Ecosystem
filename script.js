'use strict';
//Canvas setup
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

ctx.fillStyle = "red"
ctx.fillRect(40, 40, 40, 40);
var data = ctx.getImageData(50, 50, 1, 1).data;
var rgb = [ data[0], data[1], data[2] ];
console.log(rgb);


class Canvas {

}


class Creature {
    constructor(x = 10, y = 10) {
        this.position = {
            x: x,
            y: y
        }
        this.width = 20;
        this.height = 20;
        this.color = 'rgba(90, 200, 200)';

    }
    draw(ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        ctx.stroke();
    }


    
    randomMovement() {
        switch (Math.floor(Math.random() * 4)) {
            case 0:
                this.position.x++;
                this.position.y++;
                break;
            case 1:
                this.position.x++;
                this.position.y--;
                break;
            case 2:
                this.position.x--;
                this.position.y++;
                break;
            case 3:
                this.position.x--;
                this.position.y--;
                break;

            default:
                break;
        }
    }

    update(deltaTime) {
        this.position.x++;
        this.position.y++;

    }

}
const creature1 = new Creature();
// creature1.draw(ctx);


// setInterval(() => {
//     creature1.moveRight()
// }, 100);


let lastTime = 0;

// function gameLoop(timestamp) {
//     let deltaTime = timestamp - lastTime;
//     // console.log(timestamp);
//     lastTime = timestamp;
//     // creature1.update(deltaTime);
//     requestAnimationFrame(gameLoop)
// }



// gameLoop();

// document.addEventListener("keydown", (event) => {
//     console.log(`key=${event.key},code=${event.code}`);
// });

document.addEventListener("keydown", (event) => {
    creature1.moveRight()
});

// let gameInterval = setInterval(() => {
//     creature1.draw(ctx);
//     creature1.randomMovement()
// }, 50);

let slider = document.getElementById("interval-slider");
let intervalValueSpan = document.getElementById("inerval-value");
intervalValueSpan.innerHTML = 50 + " ms";
slider.oninput = function () {
    intervalValueSpan.innerHTML = this.value + " ms";
    clearInterval(gameInterval);
    gameInterval = setInterval(() => {
        creature1.draw(ctx);
        creature1.randomMovement()
    }, this.value)

}



