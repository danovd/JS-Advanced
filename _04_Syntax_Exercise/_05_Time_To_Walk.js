function walk(steps, footprint, speedKmH){

let distance = steps * footprint;
let speed = speedKmH * 1000 / 3600;                
// Умножение по 1000 прави колко метра в час е скоростта,   
// а пък делено на 3600 е за да получим колко е скоростта в секунда, не в час
let rest = Math.floor(distance / 500) * 60;     
let time = (distance / speed) + rest;


// padStart(2, 0) -> докато не стигне до два символа да добавя 0-лички.

let hours = Math.floor(time / 3600).toFixed(0).padStart(2, '0');
let minutes = Math.floor(time / 60).toFixed(0).padStart(2, '0');
let seconds = (time % 60).toFixed(0).padStart(2, '0');


console.log(`${hours}:${minutes}:${seconds}`)
}



walk(30340, 1, 1);