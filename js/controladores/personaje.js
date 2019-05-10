function cargarPersonajes(){
    var personajesTotales = localStorage.length;
    selectorDePersonajes.innerHTML = "";

    for (i = 0; i < personajesTotales; i++) { 
        agregarPersonaje="<p onclick='cargarPersonaje("+localStorage.obtener(i)['id'] +")' class='carta-personaje'><img class='icono-personaje' src='https://www.webarti.com/images/palette-ninja.png'> "+localStorage.obtener(i)['nombre'] +" - "+localStorage.obtener(i)['clase'] +" (Nivel "+localStorage.obtener(i)['nivel'] +")</p>";
        selectorDePersonajes.innerHTML+=agregarPersonaje;
    }
}
function creadorDePersonajes(nombre){
    var index = localStorage.length;
    var heroe = {
        id: index,
        nombre: nombre+index,
        clase: "ninja",
        nivel: 1,
        experiencia: 0
    }
    localStorage.almacenar(index, heroe)
    console.log(localStorage.obtener(index)["nombre"] + ", completo: "+ localStorage.getItem(index))
    cargarPersonajes()
}
function eliminarPersonaje(id){
   //todo.
    cargarPersonajes()
}
function cargarPersonaje(id){
    console.log("Cargando personaje: "+localStorage.obtener(id)['nombre'])
}
function limpiarBaseDeDatos(){
    localStorage.clear()
    console.log("Eliminados todos los datos almacenados.")
    cargarPersonajes()
}

var eliminarTodo = document.getElementById("eliminarTodo");
eliminarTodo.onclick = function() {limpiarBaseDeDatos()};
var crearPersonaje = document.getElementById("crearPersonaje");
crearPersonaje.onclick = function() {creadorDePersonajes("prueba")};
var crearPersonaje = document.getElementById("eliminarPersonaje");
crearPersonaje.onclick = function() {eliminarPersonaje("prueba")};

addEventListener("load", cargarPersonajes);