//GALLERY UPS1
let ups8 = document.getElementById('ups--8');
let ups8P1 = document.getElementById('ups--8.1');
const previousSrc = "img/ups8.jpg";

//------------------------------------------------//

function cambiarImg1() {
    ups8.src = ups8P1.src;
    
}

function devolverImg1() {
    ups8.src = previousSrc;
    ups8P1.src = "img/ups8-1.jpg";
}

//------------------------------------------------//

ups8P1.onclick = cambiarImg1;
ups8P1.onmouseout = devolverImg1;


