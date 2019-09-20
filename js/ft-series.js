let srbattery1= document.getElementById('srbattery--1');
let srbattery1Little = document.getElementById('srbattery---1');
let srbattery1P1 = document.getElementById('srbattery--1.1');
let srbattery1P2 = document.getElementById('srbattery--1.2');
const previousSrc = "img/ReserveBattery1.jpg";
//------------------------------------------------//
function cambiarImg0() {
    srbattery1.src = srbattery1Little.src;
}
//------------------------------------------------//
function cambiarImg1() {
    srbattery1.src = srbattery1P1.src;   
}
//------------------------------------------------//
function cambiarImg2() {
    srbattery1.src = srbattery1P2.src;
}
//------------------------------------------------//
srbattery1Little.onmouseover = cambiarImg0;
srbattery1P1.onmouseover = cambiarImg1;
srbattery1P2.onmouseover = cambiarImg2;
