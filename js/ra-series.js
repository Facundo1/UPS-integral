let srbattery4= document.getElementById('srbattery--4');
let srbattery4Little = document.getElementById('srbattery---4');
let srbattery4P1 = document.getElementById('srbattery--4.1');
let srbattery4P2 = document.getElementById('srbattery--4.2');
const previousSrc = "img/ReserveBattery4.jpg";
//------------------------------------------------//
function cambiarImg0() {
    srbattery4.src = srbattery4Little.src;
}
//------------------------------------------------//
function cambiarImg1() {
    srbattery4.src = srbattery4P1.src;   
}
//------------------------------------------------//
function cambiarImg2() {
    srbattery4.src = srbattery4P2.src;
}
//------------------------------------------------//
srbattery4Little.onmouseover = cambiarImg0;
srbattery4P1.onmouseover = cambiarImg1;
srbattery4P2.onmouseover = cambiarImg2;