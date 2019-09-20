let srbattery3= document.getElementById('srbattery--3');
let srbattery3Little = document.getElementById('srbattery---3');
let srbattery3P1 = document.getElementById('srbattery--3.1');
let srbattery3P2 = document.getElementById('srbattery--3.2');
const previousSrc = "img/ReserveBattery3.jpg";
//------------------------------------------------//
function cambiarImg0() {
    srbattery3.src = srbattery3Little.src;
}
//------------------------------------------------//
function cambiarImg1() {
    srbattery3.src = srbattery3P1.src;   
}
//------------------------------------------------//
function cambiarImg2() {
    srbattery3.src = srbattery3P2.src;
}
//------------------------------------------------//
srbattery3Little.onmouseover = cambiarImg0;
srbattery3P1.onmouseover = cambiarImg1;
srbattery3P2.onmouseover = cambiarImg2;