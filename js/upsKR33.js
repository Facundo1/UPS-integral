//GALLERY UPS1
let ups3 = document.getElementById('ups--3');
let ups3Little = document.getElementById('ups---3')
let ups3P1 = document.getElementById('ups--3.1');
let ups3P2 = document.getElementById('ups--3.2');
let ups3P3 = document.getElementById('ups--3.3');
let ups3P4 = document.getElementById('ups--3.4');
let ups3P5 = document.getElementById('ups--3.5');
const previousSrc = "img/ups3.jpg";


//------------------------------------------------//

function cambiarImg0() {
    ups3.src = ups3Little.src;
    
}
//------------------------------------------------//

function cambiarImg1() {
    ups3.src = ups3P1.src;
    
}
//------------------------------------------------//
function cambiarImg2() {
    ups3.src = ups3P2.src;

}
//------------------------------------------------//
function cambiarImg3() {
    ups3.src = ups3P3.src;

}
//------------------------------------------------//
function cambiarImg4() {
    ups3.src = ups3P4.src;

}
//------------------------------------------------//
function cambiarImg5() {
    ups3.src = ups3P5.src;

}
//------------------------------------------------//
ups3Little.onmouseover = cambiarImg0;
ups3P1.onmouseover = cambiarImg1;
ups3P2.onmouseover = cambiarImg2;
ups3P3.onmouseover = cambiarImg3;
ups3P4.onmouseover = cambiarImg4;
ups3P5.onmouseover = cambiarImg5;

