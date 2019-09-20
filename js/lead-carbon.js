let battery4= document.getElementById('battery--4');
let battery4Little = document.getElementById('battery---4');
let battery4P1 = document.getElementById('battery--4.1');
let battery4P2 = document.getElementById('battery--4.2');
const previousSrc = "img/storageBattery4.jpg";
//------------------------------------------------//
function cambiarImg0() {
    battery4.src = battery4Little.src;
}
//------------------------------------------------//
function cambiarImg1() {
    battery4.src = battery4P1.src;   
}
//------------------------------------------------//
function cambiarImg2() {
    battery4.src = battery4P2.src;
}
//------------------------------------------------//
battery4Little.onmouseover = cambiarImg0;
battery4P1.onmouseover = cambiarImg1;
battery4P2.onmouseover = cambiarImg2;

