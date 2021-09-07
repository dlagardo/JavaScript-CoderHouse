let edad2 = parseInt(prompt("Ingrese su edad : "));
let salir = 0;
let edad3 = 0;
let condicion = 1;
var valor = isNaN(edad2);;
while (condicion === 1) {
	
	if (valor === true) {
		console.log("Debe ingresar numero");
		alert(("Debe ingresar numero"));
	} else {
		if (edad2 < 18) {
			console.log("USTED ES MENOR DE EDAD");
			alert(("USTED ES MENOR DE EDAD"));
		} else {
			console.log("USTED ES Mayor DE EDAD");
			alert(("USTED ES Mayor DE EDAD"));
		}
	}

	let salir = parseInt(prompt(" Si Desea seguir presione 2: "));
	if (salir === 2) {

		let edad3 = parseInt(prompt("Ingrese su edad : "));
		edad2 = edad3;
	} else {
		condicion = 0;
		console.log("Gracias por su Visita");
		alert(("Gracias por su Visita"));
	}
	valor = isNaN(edad2);
}


	// let numero=prompt("Ingrese su edad : ");
	// if(isNaN(numero)==true){
	// alert(("false"));
	// }else{
	// alert(("true"));
	// }
	// let numero1=parseInt(prompt("Ingrese numero1: "));
	// let numero2=parseInt(prompt("Ingrese numero2: "));
	// if(numero1==numero2){
	// alert(("Son Iguales"));
	// }else{
	// 	if(numero1!== numero2){
	// 		alert(("No son Iguales"));
	// 	}

	// }