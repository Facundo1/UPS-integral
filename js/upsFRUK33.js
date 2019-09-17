//GALLERY UPS4
let ups5 = document.getElementById('ups--5');
let ups5Little = document.getElementById('ups---5')
let ups5P1 = document.getElementById('ups--5.1');
let ups5P2 = document.getElementById('ups--5.2');
let ups5P3 = document.getElementById('ups--5.3');
const previousSrc = "img/ups5.jpg";
//------------------------------------------------//
function cambiarImg0() {
    ups5.src = ups5Little.src;

}
//------------------------------------------------//
function cambiarImg1() {
    ups5.src = ups5P1.src;

}
//----------------------------------------------//
function cambiarImg2() {
    ups5.src = ups5P2.src;

}
//------------------------------------------------//
function cambiarImg3() {
    ups5.src = ups5P3.src;

}
//------------------------------------------------//
ups5Little.onmouseover = cambiarImg0;
ups5P1.onmouseover = cambiarImg1;
ups5P2.onmouseover = cambiarImg2;
ups5P3.onmouseover = cambiarImg3;

