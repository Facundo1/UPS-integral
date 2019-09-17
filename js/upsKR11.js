//GALLERY UPS1
let ups1 = document.getElementById('ups--1');
let ups1Little = document.getElementById('ups---1');
let ups1P1 = document.getElementById('ups--1.1');
let ups1P2 = document.getElementById('ups--1.2');
const previousSrc = "img/ups1.jpg";
//------------------------------------------------//
function cambiarImg0() {
    ups1.src = ups1Little.src;
}
//------------------------------------------------//
function cambiarImg1() {
    ups1.src = ups1P1.src;   
}
//------------------------------------------------//
function cambiarImg2() {
    ups1.src = ups1P2.src;
}
//------------------------------------------------//
ups1Little.onmouseover = cambiarImg0;
ups1P1.onmouseover = cambiarImg1;
ups1P2.onmouseover = cambiarImg2;

