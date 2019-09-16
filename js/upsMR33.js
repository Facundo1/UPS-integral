//GALLERY UPS4
let ups4 = document.getElementById('ups--4');
let ups4P1 = document.getElementById('ups--4.1');
let ups4P2 = document.getElementById('ups--4.2');
let ups4P3 = document.getElementById('ups--4.3');
const previousSrc = "img/ups4.jpg";



function cambiarImg1() {
    ups4.src = ups4P1.src;

}

function devolverImg1() {
    ups4.src = previousSrc;
    ups4P1.src = "img/ups4-1.jpg";
}
//------------------------------------------------//
function cambiarImg2() {
    ups4.src = ups4P2.src;

}

function devolverImg2() {
    ups4.src = previousSrc;
    ups4P2.src = "img/ups4-2.jpg";
}
//------------------------------------------------//
function cambiarImg3() {
    ups4.src = ups4P3.src;

}

function devolverImg3() {
    ups4.src = previousSrc;
    ups4P3.src = "img/ups4-3.jpg";
}

//------------------------------------------------//
ups4P1.onclick = cambiarImg1;
ups4P1.onmouseout = devolverImg1;

ups4P2.onclick = cambiarImg2;
ups4P2.onmouseout = devolverImg2;

ups4P3.onclick = cambiarImg3;
ups4P3.onmouseout = devolverImg3;

