//Carga de valores iniciales del juego.
var widthMinimo = 1300;

this.resizeTo(100,100);
mostrandoJuego=false;
esconderJuego(true)


function comprobarResolucion() {
    if(window.innerWidth>widthMinimo){
        console.log("Tu resolución es correcta.")
    }else{
        console.log("Tu resolución no es compatible, deteniendo la carga del juego.")
        mostrandoJuego=false;
        esconderJuego(true);
        menuPrincipal.innerHTML = "Tu resolución de pantalla es insuficiente. ¡Hazla más grande!";
    }
}

addEventListener("load", comprobarResolucion);