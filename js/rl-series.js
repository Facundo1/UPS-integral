let srbattery5= document.getElementById('srbattery--5');
let srbattery5Little = document.getElementById('srbattery---5');
let srbattery5P1 = document.getElementById('srbattery--5.1');
let srbattery5P2 = document.getElementById('srbattery--5.2');
let srbattery5P3 = document.getElementById('srbattery--5.3');
let srbattery5P4 = document.getElementById('srbattery--5.4');
const previousSrc = "img/ReserveBattery5.jpg";
//------------------------------------------------//
function cambiarImg0() {
    srbattery5.src = srbattery5Little.src;
}
//------------------------------------------------//
function cambiarImg1() {
    srbattery5.src = srbattery5P1.src;   
}
//------------------------------------------------//
function cambiarImg2() {
    srbattery5.src = srbattery5P2.src;
}
//------------------------------------------------//
function cambiarImg3() {
    srbattery5.src = srbattery5P3.src;
}
//------------------------------------------------//
function cambiarImg4() {
    srbattery5.src = srbattery5P4.src;
}
//------------------------------------------------//
srbattery5Little.onmouseover = cambiarImg0;
srbattery5P1.onmouseover = cambiarImg1;
srbattery5P2.onmouseover = cambiarImg2;
srbattery5P3.onmouseover = cambiarImg3;
srbattery5P4.onmouseover = cambiarImg4;