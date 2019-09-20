let srbattery6= document.getElementById('srbattery--6');
let srbattery6Little = document.getElementById('srbattery---6');
let srbattery6P1 = document.getElementById('srbattery--6.1');
let srbattery6P2 = document.getElementById('srbattery--6.2');
let srbattery6P3 = document.getElementById('srbattery--6.3');
const previousSrc = "img/ReserveBattery6.jpg";
//------------------------------------------------//
function cambiarImg0() {
    srbattery6.src = srbattery6Little.src;
}
//------------------------------------------------//
function cambiarImg1() {
    srbattery6.src = srbattery6P1.src;   
}
//------------------------------------------------//
function cambiarImg2() {
    srbattery6.src = srbattery6P2.src;
}
//------------------------------------------------//
function cambiarImg3() {
    srbattery6.src = srbattery6P3.src;
}
//------------------------------------------------//
srbattery6Little.onmouseover = cambiarImg0;
srbattery6P1.onmouseover = cambiarImg1;
srbattery6P2.onmouseover = cambiarImg2;
srbattery6P3.onmouseover = cambiarImg3;