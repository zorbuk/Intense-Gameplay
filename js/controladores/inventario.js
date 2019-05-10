if(mostrandoJuego){
    console.log("iniciando inventario...")
	var bolsa = [],objeto = []
	var objetos = document.getElementById("objetos"), bolsas = document.getElementById("bolsas") , objetoNuevo, bolsaNueva
	var maximoEspacioInventario=40, cantidadDeObjetosActuales=0
	var maximoBolsas=3, espacioQueIncrementan=10, cantidadDeBolsasActuales=0;

function añadirBolsa(){
	console.log("Expandiendo el inventario...")
	if(cantidadDeBolsasActuales<maximoBolsas){
		bolsaNueva="<div id='bolsa'><img class='bolsa' src='http://icongal.com/gallery/image/4260/bag_medical.png'></div>";
		bolsas.innerHTML+=bolsaNueva;
		cantidadDeBolsasActuales++;
		maximoEspacioInventario+=espacioQueIncrementan;
		console.log("Se ha expandido el inventario.")
	}else{
		console.log("Se ha alcanzado el límite de bolsas.")
	}
}

function añadirObjetoAlInventario(){
	console.log("Añadiendo un nuevo objeto al inventario...")
	if(cantidadDeObjetosActuales < maximoEspacioInventario){
	let randomItemGenerator = Math.random().toString(36).substring(7);
	//Calidad aleatoria
	objetoNuevo="<div id='objeto' onclick='alert(this.className)' class='"+randomItemGenerator+"'><img class='legendaryItem' src='http://vignette3.wikia.nocookie.net/wowwiki/images/b/b1/Ui-charactercreate-races_dwarf-female.png/revision/latest?cb=20070124142504'></div>";
	objetos.innerHTML+=objetoNuevo;
	cantidadDeObjetosActuales++;
	console.log("Objeto [" + randomItemGenerator + "] añadido.")
	}else{
		console.log("Se ha alcanzado la capacidad máxima del inventario.")
	}
}

/* events */
addEventListener("load", añadirBolsa);
}