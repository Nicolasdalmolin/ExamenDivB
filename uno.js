
function mostrar()
{
	let nombre;
	let edad;
	let vacuna;
	let dosis;
	let sexo;
	let seguir;
	let promEdadRusa = 0;
	let acumEdadRusa = 0;
	let contRusa = 0;
	let edadMujerMayor;
	let nombreMujerMayor;
	let vacunaMujerMayor;
	let flagMujer = 1;
	let contAmericanaMayor = 0;
	let contAmericana = 0;
	let porcAmericanaMayor = 0;
	let contVacunados = 0;
	let contDosDosis = 0;
	let porcDosDosis = 0;
	let contChina = 0;
	let menosInoculada;
	let contMenosInoculada;

	do{ 
		nombre = prompt("Ingrese nombre: ");
		while(!(nombre.length >= 3 && nombre.length <=10)){
			nombre = prompt("Nombre fuera de rango. Reingrese nombre: ");
		}

		edad = parseInt(prompt("Ingrese edad: "));
		while (isNaN(edad) || edad < 12){
			edad = parseInt(prompt("Edad invalida. Reingrese edad: "));
		}

		if(edad <18){
			vacuna = "americana";
		}
		else{

		
		vacuna = prompt("Ingrese vacuna (rusa/china/americana)").toLowerCase();
		while(vacuna != "rusa" && vacuna != "china" && vacuna != "americana"){
			vacuna = prompt("Error. Reingrese vacuna (rusa/china/americana)").toLowerCase();
		}
	}
		dosis = prompt("Ingrese dosis (p/s)").toLowerCase();
		while(dosis != "p" && dosis != "s"){
		dosis = prompt("Error. Reingrese dosis (p/s): ").toLowerCase();
		}

		sexo = prompt("Ingrese sexo (f/m): ").toLowerCase();
		while(sexo != "f" && dosis != "m"){
		sexo = prompt("Error. Reingrese sexo (f/m): ").toLowerCase();
		}

		switch(vacuna){
			case "rusa":
				contRusa++;
				acumEdadRusa += edad;
				break;
			case "china":
				contChina++;
				break;
			case "americana":
				contAmericana++;
				if(edad >=18){
					contAmericanaMayor++;
				}
				break;
			}
			if(sexo == "f"){
				if(flagMujer || edad > edadMujerMayor){
					edadMujerMayor = edad;
					nombreMujerMayor = nombre;
					vacunaMujerMayor = vacuna;
					flagMujer = 0;
				}

			}
			
			if(dosis == "s"){
				contDosDosis++;	
			}
			contVacunados++;






		seguir = prompt("Quiere ingresar otro paciente?: ");
	} while (seguir == 's')

	if(contRusa != 0){
		promEdadRusa = acumEdadRusa / contRusa;
	}
	document.write("a- El promedio de edad de vacunados con rusa es: " + promEdadRusa + "<br>");

	if(flagMujer){
		document.write("b- No se ingresaron pacientes femeninos <br>");
	} else {
		document.write("b- La mayor paciente tiene " + edadMujerMayor + " años, se llama " + nombreMujerMayor + " y se vacuno " + vacunaMujerMayor + "<br>");
	}
	 
	if(contAmericana != 0){
	porcAmericanaMayor = contAmericanaMayor * 100 / contAmericana;
	}

	document.write("c- Porcentaje de mayores vacunados con la americana " + porcAmericanaMayor + "<br>");

	if(contDosDosis !=0){
		porcDosDosis = contDosDosis *100 / contVacunados;
	}

	document.write("d- Porcentaje de  vacunados con dos dosis " + porcDosDosis + "<br>");

	if( contChina < contRusa && contChina < contAmericana){
		menosInoculada = "china";
		contMenosInoculada = contChina;
	}else if(contRusa <= contChina && contRusa < contAmericana){
		menosInoculada = "rusa";
		contMenosInoculada = contRusa;
	}else {
		menosInoculada = "americana";
		contMenosInoculada = contAmericana;
	}
	document.write("e- La vacuna menos inculada es " + menosInoculada + " con " + contMenosInoculada + " aplicaciones <br>");

}
