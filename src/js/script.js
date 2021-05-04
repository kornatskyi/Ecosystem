'use strict';

import Element from "./classes/Element.js";
import Creature from "./classes/Creature.js";

//Canvas setup
const canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');
const HEIGHT = 400;
const WEIGHT = 600;
canvas.width = 600;
canvas.height = 400;

//Make rulers
function setUpRulers() {
    const Ox = document.querySelector("#Ox");
    const Oy = document.querySelector("#Oy");
    const OxInContaienr = document.querySelector(".inner-x-container");
    const OyInContaienr = document.querySelector(".inner-y-container");
    const step = 10;
    for (let i = 0; i < WEIGHT; i += step) {
        let child = document.createElement("div");
        child.className = "inner-x-container";
        child.innerHTML = `<div class="number">${i}</div>`
        Ox.appendChild(child);

    }
    for (let i = 0; i < HEIGHT; i += step) {
        let child = document.createElement("div");
        child.className = "inner-y-container";
        child.innerHTML = `<div class="number">${i}</div>`
        Oy.appendChild(child);

    }
}
setUpRulers();


//Elements creation
const creature1 = new Creature(ctx);



creature1.arrowMove();


// creature1.lookAround()

    creature1.draw(ctx);

    // console.log(creature1.getNLineOfOuterTopCoordinates(1));
    // console.log(creature1.getNLineOfOuterRightCoordinates(1));
    // console.log(creature1.getNLineOfOuterLeftCoordinates(1));
    // console.log(creature1.getNLineOfOuterBottomCoordinates(1));







let gameInterval = setInterval(() => {
    ctx.clearRect(0, 0, WEIGHT, HEIGHT);
    ctx.fillStyle = "red";
    ctx.fillRect(33, 30, 40, 40);
    creature1.draw(ctx);



    creature1.visionCoordinates = [...creature1.getNLineOfOuterTopCoordinates(creature1.visionRange), ...creature1.getNLineOfOuterRightCoordinates(creature1.visionRange), ...creature1.getNLineOfOuterLeftCoordinates(creature1.visionRange), ...creature1.getNLineOfOuterBottomCoordinates(creature1.visionRange)]


    creature1.scanAround()
    ctx.fillStyle = "red"
    // creature1.randomMovement()

}, 50);

let slider = document.getElementById("interval-slider");
let intervalValueSpan = document.getElementById("inerval-value");
intervalValueSpan.innerHTML = 50 + " ms";
slider.oninput = function () {
    intervalValueSpan.innerHTML = this.value + " ms";
    if (this.value == 100) {
        clearInterval(gameInterval);
        return;
    }
    clearInterval(gameInterval);
    gameInterval = setInterval(() => {
    }, this.value)

}



