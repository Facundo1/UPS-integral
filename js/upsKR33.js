//GALLERY UPS1
let ups3 = document.getElementById('ups--3');
let ups3P1 = document.getElementById('ups--3.1');
let ups3P2 = document.getElementById('ups--3.2');
let ups3P3 = document.getElementById('ups--3.3');
let ups3P4 = document.getElementById('ups--3.4');
let ups3P5 = document.getElementById('ups--3.5');

const previousSrc = "img/ups3.jpg";

//------------------------------------------------//

function cambiarImg1() {
    ups3.src = ups3P1.src;
    
}

function devolverImg1() {
    ups3.src = previousSrc;
    ups3P1.src = "img/ups3-1.jpg";
}
//------------------------------------------------//
function cambiarImg2() {
    ups3.src = ups3P2.src;

}

function devolverImg2() {
    ups3.src = previousSrc;
    ups3P2.src = "img/ups3-2.jpg";
}
//------------------------------------------------//
function cambiarImg3() {
    ups3.src = ups3P3.src;

}

function devolverImg3() {
    ups3.src = previousSrc;
    ups3P3.src = "img/ups3-3.jpg";
}
//------------------------------------------------//
function cambiarImg4() {
    ups3.src = ups3P4.src;

}

function devolverImg4() {
    ups3.src = previousSrc;
    ups3P4.src = "img/ups3-4.jpg";
}
//------------------------------------------------//
function cambiarImg5() {
    ups3.src = ups3P5.src;

}

function devolverImg5() {
    ups3.src = previousSrc;
    ups3P5.src = "img/ups3-5.jpg";
}

//------------------------------------------------//

ups3P1.onclick = cambiarImg1;
ups3P1.onmouseout = devolverImg1;

ups3P2.onclick = cambiarImg2;
ups3P2.onmouseout = devolverImg2;

ups3P3.onclick = cambiarImg3;
ups3P3.onmouseout = devolverImg3;

ups3P4.onclick = cambiarImg4;
ups3P4.onmouseout = devolverImg4;

ups3P5.onclick = cambiarImg5;
ups3P5.onmouseout = devolverImg5;
