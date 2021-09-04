let edad2=parseInt(prompt("Ingrese su edad : "));
	
	if(edad2<18 ){
       console.log("USTED ES MENOR DE EDAD");
       alert(("USTED ES MENOR DE EDAD"));
	}else{
 		console.log("USTED ES Mayor DE EDAD");
       alert(("USTED ES Mayor DE EDAD"));
	}

	let numero=prompt("Ingrese su edad : ");
	if(isNaN(numero)==true){
	alert(("false"));
	}else{
	alert(("true"));
	}
	let numero1=parseInt(prompt("Ingrese numero1: "));
	let numero2=parseInt(prompt("Ingrese numero2: "));
	if(numero1==numero2){
	alert(("Son Iguales"));
	}else{
		if(numero1!== numero2){
			alert(("No son Iguales"));
		}
	
	}