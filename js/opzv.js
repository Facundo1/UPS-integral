let battery2 = document.getElementById('battery--2');
let battery2Little = document.getElementById('battery---2');
let battery2P1 = document.getElementById('battery--2.1');
let battery2P2 = document.getElementById('battery--2.2');
let battery2P3 = document.getElementById('battery--2.3')
let battery2P4 = document.getElementById('battery--2.4')
const previousSrc = "img/storageBattery2.jpg";
//------------------------------------------------//
function cambiarImg0() {
    battery2.src = battery2Little.src;
}
//------------------------------------------------//
function cambiarImg1() {
    battery2.src = battery2P1.src;   
}
//------------------------------------------------//
function cambiarImg2() {
    battery2.src = battery2P2.src;
}
//------------------------------------------------//
function cambiarImg3() {
    battery2.src = battery2P3.src;
}
//------------------------------------------------//
function cambiarImg4() {
    battery2.src = battery2P4.src;
}
//------------------------------------------------//
battery2Little.onmouseover = cambiarImg0;
battery2P1.onmouseover = cambiarImg1;
battery2P2.onmouseover = cambiarImg2;
battery2P3.onmouseover = cambiarImg3;
battery2P4.onmouseover = cambiarImg4;
