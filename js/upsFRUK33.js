//GALLERY UPS4
let ups5 = document.getElementById('ups--5');
let ups5P1 = document.getElementById('ups--5.1');
let ups5P2 = document.getElementById('ups--5.2');
let ups5P3 = document.getElementById('ups--5.3');
const previousSrc = "img/ups5.jpg";

//------------------------------------------------//
function cambiarImg1() {
    ups5.src = ups5P1.src;

}

function devolverImg1() {
    ups5.src = previousSrc;
    ups5P1.src = "img/ups5-1.jpg";
}
//------------------------------------------------//
function cambiarImg2() {
    ups5.src = ups5P2.src;

}

function devolverImg2() {
    ups5.src = previousSrc;
    ups5P2.src = "img/ups5-2.jpg";
}
//------------------------------------------------//
function cambiarImg3() {
    ups5.src = ups5P3.src;

}

function devolverImg3() {
    ups5.src = previousSrc;
    ups5P3.src = "img/ups5-3.jpg";
}

//------------------------------------------------//
ups5P1.onclick = cambiarImg1;
ups5P1.onmouseout = devolverImg1;

ups5P2.onclick = cambiarImg2;
ups5P2.onmouseout = devolverImg2;

ups5P3.onclick = cambiarImg3;
ups5P3.onmouseout = devolverImg3;

