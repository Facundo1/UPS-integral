//GALLERY UPS1
let ups1 = document.getElementById('ups--1');
let ups1P1 = document.getElementById('ups--1.1');
let ups1P2 = document.getElementById('ups--1.2');
const previousSrc = "img/ups1.jpg";

//------------------------------------------------//
function cambiarImg1() {
    ups1.src = ups1P1.src;
    
}

function devolverImg1() {
    ups1.src = previousSrc;
    ups1P1.src = "img/ups1-1.jpg";
}
//------------------------------------------------//
function cambiarImg2() {
    ups1.src = ups1P2.src;

}

function devolverImg2() {
    ups1.src = previousSrc;
    ups1P2.src = "img/ups1-2.jpg";
}
//------------------------------------------------//

ups1P1.onclick = cambiarImg1;
ups1P1.onmouseout = devolverImg1;

ups1P2.onclick = cambiarImg2;
ups1P2.onmouseout = devolverImg2;
