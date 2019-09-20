let battery3= document.getElementById('battery--3');
let battery3Little = document.getElementById('battery---3');
let battery3P1 = document.getElementById('battery--3.1');
let battery3P2 = document.getElementById('battery--3.2');
let battery3P3 = document.getElementById('battery--3.3')
const previousSrc = "img/storageBattery3.jpg";
//------------------------------------------------//
function cambiarImg0() {
    battery3.src = battery3Little.src;
}
//------------------------------------------------//
function cambiarImg1() {
    battery3.src = battery3P1.src;   
}
//------------------------------------------------//
function cambiarImg2() {
    battery3.src = battery3P2.src;
}
//------------------------------------------------//
function cambiarImg3() {
    battery3.src = battery3P3.src;
}
//------------------------------------------------//
battery3Little.onmouseover = cambiarImg0;
battery3P1.onmouseover = cambiarImg1;
battery3P2.onmouseover = cambiarImg2;
battery3P3.onmouseover = cambiarImg3;
