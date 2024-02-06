/***************** JS for nav bar menu  **************************/

var side=document.getElementById("sideM");

function openMenu()
{
    side.style.right = "0";
    side.style.display="block";
}

function closeMenu()
{
    side.style.right = "-200px";
    side.style.display="none";
}