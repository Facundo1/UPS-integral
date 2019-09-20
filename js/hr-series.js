let srbattery2= document.getElementById('srbattery--2');
let srbattery2Little = document.getElementById('srbattery---2');
let srbattery2P1 = document.getElementById('srbattery--2.1');
let srbattery2P2 = document.getElementById('srbattery--2.2');
const previousSrc = "img/ReserveBattery2.jpg";
//------------------------------------------------//
function cambiarImg0() {
    srbattery2.src = srbattery2Little.src;
}
//------------------------------------------------//
function cambiarImg1() {
    srbattery2.src = srbattery2P1.src;   
}
//------------------------------------------------//
function cambiarImg2() {
    srbattery2.src = srbattery2P2.src;
}
//------------------------------------------------//
srbattery2Little.onmouseover = cambiarImg0;
srbattery2P1.onmouseover = cambiarImg1;
srbattery2P2.onmouseover = cambiarImg2;