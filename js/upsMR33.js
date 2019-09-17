//GALLERY UPS4
let ups4 = document.getElementById('ups--4');
let ups4Little = document.getElementById('ups---4')
let ups4P1 = document.getElementById('ups--4.1');
let ups4P2 = document.getElementById('ups--4.2');
let ups4P3 = document.getElementById('ups--4.3');
const previousSrc = "img/ups4.jpg";
//------------------------------------------------//
function cambiarImg0() {
    ups4.src = ups4Little.src;
}
//------------------------------------------------//
function cambiarImg1() {
    ups4.src = ups4P1.src;
}
//------------------------------------------------//
function cambiarImg2() {
    ups4.src = ups4P2.src;

}
//------------------------------------------------//
function cambiarImg3() {
    ups4.src = ups4P3.src;
}
//------------------------------------------------//
ups4Little.onmouseover = cambiarImg0;
ups4P1.onmouseover = cambiarImg1;
ups4P2.onmouseover = cambiarImg2;
ups4P3.onmouseover = cambiarImg3;


