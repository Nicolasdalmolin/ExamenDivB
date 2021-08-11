function mostrar()
{
    let nacionalidad;
    let resultado;
    let edad;
    let cepa;
    let contPos = 0;
    let contNeg = 0;
    let cantCont = 0;
    let porcNeg = 0;
    let porcPos = 0;
    let contAlfa = 0;
    let contDelta = 0;
    let contBeta = 0;
    let edadMayorExtranjero;
    let flagExtCont = 1;
    let contArgDelta = 0;






    for (let i = 0; i < 8; i++){

        nacionalidad = prompt("Ingrese nacionalidad (argentino/extranjero): ");
        while(!(nacionalidad == "argentino" || nacionalidad == "extranjero")){
            nacionalidad = prompt("Nacionalidad incorrecta. Ingrese nuevamente: ");
        }

        
        resulado = prompt("Ingrese resultado (positivo/negativo): ");
        while(!(resultado == "positivo" || resultado == "negativo")){
            resulado = prompt("Resultado invalido. Reingrese resultado (positivo/negativo): ");
        }

        edad = parseInt(prompt("Ingrese edad (18/65): "));
        while(!(edad >= 18 && edad <= 65)){
            edad = parseInt(prompt("Reingrese edad (18/65): "));
        }

        if (resultado == negativo){
            contNeg++;
            cepa = "ninguna";
        }
        else {

            if( nacionalidad == "extranjero"){
                if(flagExtCont || edad > edadMayorExtranjero){
                    edadMayorExtranjero = edad;
                    flagExtCont = 0;
                }
            }
            else{
                if(cepa == "delta"){
                    contArgDelta++;
                }
            }

             contPos++;
            cepa = prompt("Ingrese cepa (delta/alfa/beta): ")
          while(!(cepa == "delta" || cepa == "alfa" || cepa == "beta")){
            cepa = prompt("Cepa invalida. Reingrese cepa (delta/alfa/beta): ")
          }
        }
        
        switch(cepa){
            case "alfa":
                contAlfa++;
                break;
            case "delta":
                contDelta++;
                break;
            case "beta":
                contBeta++;
                break;
            
            
        }   

        console.log(nacionalidad, resultado, edad, cepa);








    }
    
    
    porcPos = contPos * 100 / 8;
    porcNeg = contNeg * 100 / 8;

    document.write("El porcentaje de positivos es : " + porcPos + "<br>");
    document.write("El procentaje de negativo es: " + porcNeg + "<br>");





}
