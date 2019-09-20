let battery5 = document.getElementById('battery--5');
let battery5Little = document.getElementById('battery---5');
let battery5P1 = document.getElementById('battery--5.1');
let battery5P2 = document.getElementById('battery--5.2');
const previousSrc = "img/storageBattery5.jpg";
//------------------------------------------------//
function cambiarImg0() {
    battery5.src = battery5Little.src;
}
//------------------------------------------------//
function cambiarImg1() {
    battery5.src = battery5P1.src;   
}
//------------------------------------------------//
function cambiarImg2() {
    battery5.src = battery5P2.src;
}
//------------------------------------------------//
battery5Little.onmouseover = cambiarImg0;
battery5P1.onmouseover = cambiarImg1;
battery5P2.onmouseover = cambiarImg2;

