// pedimos las dos palabras
let palabra1 = prompt("Escribe la primera palabra");
let palabra2 = prompt("Escribe la segunda palabra");
//creamos la funcion a la que le pasamos 2 palabras para saber si son anagramas
function anagrama(palabra1, palabra2) {
    let anagrama = true;
    //primero miramos si son iguales ya que no contarian
    if ((palabra1 === palabra2) || palabra2.length > palabra1.length) {
        anagrama = false;
    } else {
        //creamos dos arrays asociativos para almacenar las letras de cada palabra y las veces que salen
        let palabra1Letras = [];
        let palabra2Letras = [];
        //primer for para ver la primera palabra
        for (let i = 0; i < palabra1.length; i++) {
            if (!palabra1Letras[palabra1[i]]) {
                palabra1Letras[palabra1[i]] = 0;
            }
            palabra1Letras[palabra1[i]] += 1;
        }
        //segundo for para ver la segunda palabra
        for (let i = 0; i < palabra2.length; i++) {
            if (!palabra2Letras[palabra2[i]]) {
                palabra2Letras[palabra2[i]] = 0;
            }
            palabra2Letras[palabra2[i]] += 1;
        }
        //for que va mirando si cada letra coincide en el numero de apariciones o si no existe, si alguno falla pasa a false Y sale con un break
        for (let i = 0; i < palabra1.length - 1; i++) {
            if ((palabra1Letras[palabra1[i]] !== palabra2Letras[palabra1[i]]) || (!palabra2Letras[palabra1[i]])) {
                anagrama = false;
                break;
            }
        }
    }
    if (anagrama) {
        alert("Las palabras son anagramas");
    } else {
        alert("No son anagramas");
    }

}
anagrama(palabra1, palabra2);