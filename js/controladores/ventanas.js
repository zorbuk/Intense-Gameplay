var menuPrincipal = document.getElementById("menuPrincipal"), mostrandoMenuPrincipal;
var juego = document.getElementById("juego"), mostrandoJuego;
var selectorDePersonajes = document.getElementById("selectorDePersonajes"), mostrandoSelectorDePersonajes;
var botonesSelectorDePersonajes = document.getElementById("botonesSelectorDePersonajes"), mostrandoBotonesSelectorDePersonajes;

function esconderMenu(bool){
    if(bool)
        menuPrincipal.style.display= 'none';
    else
        menuPrincipal.style.display= 'block';
}
function esconderJuego(bool){
    if(bool)
        juego.style.display= 'none';
    else
        juego.style.display= 'block';
}