//GALLERY UPS1
let ups8 = document.getElementById('ups--8');
let ups8Little = document.getElementById('ups---8')
let ups8P1 = document.getElementById('ups--8.1');
const previousSrc = "img/ups8.jpg";
//------------------------------------------------//
function cambiarImg0() {
    ups8.src = ups8Little.src;
}
//------------------------------------------------//
function cambiarImg1() {
    ups8.src = ups8P1.src;  
}
//------------------------------------------------//

ups8P1.onmouseover = cambiarImg1;
ups8Little.onmouseover = cambiarImg0;


