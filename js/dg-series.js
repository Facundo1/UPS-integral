let battery1 = document.getElementById('battery--1');
let battery1Little = document.getElementById('battery---1');
let battery1P1 = document.getElementById('battery--1.1');
let battery1P2 = document.getElementById('battery--1.2');
let battery1P3 = document.getElementById('battery--1.3')
const previousSrc = "img/storageBattery1.jpg";
//------------------------------------------------//
function cambiarImg0() {
    battery1.src = battery1Little.src;
}
//------------------------------------------------//
function cambiarImg1() {
    battery1.src = battery1P1.src;   
}
//------------------------------------------------//
function cambiarImg2() {
    battery1.src = battery1P2.src;
}
//------------------------------------------------//
function cambiarImg3() {
    battery1.src = battery1P3.src;
}
//------------------------------------------------//
battery1Little.onmouseover = cambiarImg0;
battery1P1.onmouseover = cambiarImg1;
battery1P2.onmouseover = cambiarImg2;
battery1P3.onmouseover = cambiarImg3;
