
var base = document.querySelectorAll(".celda");
var piezaSeleccionada = null;
var movimientos;

base.forEach(function(element){
	element.addEventListener('click',function(){
		
		if(piezaSeleccionada == null && element.getAttribute("name") != ""){
				piezaSeleccionada = element;
				element.style.textDecoration = "underline overline";
				movimientos = calcularMovimientos(piezaSeleccionada);
		}else{
			
			var oldx = piezaSeleccionada.getAttribute("posicionx");
			var oldy = piezaSeleccionada.getAttribute("posiciony");
			var old = document.querySelector("td[posicionX='"+oldx+"'][posicionY='"+oldy+"']");
			moverPieza(element,old);
			piezaSeleccionada = null;
			
		}

	});
});

function moverPieza(element,old){
	var posx = element.getAttribute("posicionX");
	var posy = element.getAttribute("posicionY");
	for(var i=0;i<movimientos.length;i++){
		if(movimientos[i][0] == posx && movimientos[i][1] == posy){
			setElement(element,old);
			setOld(element,old);
		}
	}
	old.style.textDecoration = "";
}
function setElement(element,old){
	element.innerText = old.textContent;
	element.style.textDecoration = "";
	element.setAttribute("name",old.getAttribute("name"));
	element.setAttribute("color",old.getAttribute("color"));
}

function setOld(element,old){
	old.style.border = "";
	old.setAttribute("name","");
	old.classList.toggle(old.getAttribute("color"));
	old.setAttribute("color","");
	old.innerText = "";
}

function calcularMovimientos(piezaSeleccionada){
	var pieza = piezaSeleccionada.getAttribute("name");
	var movimientos = [];
	if(pieza.toLowerCase().includes("torre")){
		var posx = piezaSeleccionada.getAttribute("posicionx");
		var posy = piezaSeleccionada.getAttribute("posiciony");
		var ownColor = piezaSeleccionada.getAttribute("color");
		
		for(var i=0;i<base.length;i++){
			var control = true;
			var basey = base[i].getAttribute("posicionY");
			var basex = base[i].getAttribute("posicionX");
			var fichaEnemiga = base[i].getAttribute("color");
			if(!(basey == posy && basex == posx)){
				if(basey == posy || basex == posx){
					var coordenadas = [basex,basey];
					if(base[i].getAttribute("name") != ""){

					}
					
					movimientos.push(coordenadas);
					
				}
			}
		}
		return movimientos;
	}
}

/*function calcularMovimientos(piezaSeleccionada){
	var pieza = piezaSeleccionada.getAttribute("name");
	var movimientos = [];
	if(pieza.toLowerCase().includes("torre")){
		var posx = piezaSeleccionada.getAttribute("posicionx");
		var posy = piezaSeleccionada.getAttribute("posiciony");
		var ownColor = piezaSeleccionada.getAttribute("color");

		var blockY = false;
		var blockX = false;
		for(var i=0;i<base.length;i++){
			var control = true;
			var basey = base[i].getAttribute("posicionY");
			var basex = base[i].getAttribute("posicionX");
			var fichaEnemiga = base[i].getAttribute("color");
			if(!(basey == posy && basex == posx)){
				if(basey == posy){
					
					if(base[i].getAttribute("name") != ""){
						blockY = true;
					}
				}else{
					blockY = false;
				}

				if(basex == posx){
					
					if(base[i].getAttribute("name") != ""){
						blockX = true;
					}
					
				}else{
					blockX = false;
				}

				if(!blockX || !blockY){
					var coordenadas = [basex,basey];
					movimientos.push(coordenadas);
				}
	
			}
			
				
		}
		return movimientos;
	}
}
*/