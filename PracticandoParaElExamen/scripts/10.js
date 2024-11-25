'use strict';
function Conteo(texto){
    //creamos un array para almacenar el caracter
  let resultado={};
  let longitud=texto.length;
  //un for que sea igual a la longitud de la cadena
  for(let i=0;i<longitud;i++){
    //si no existe en el JSON la key se crea
    if (!resultado[texto[i]]) {
        resultado[texto[i]] = 1;
    }
    //si ya existe, que existe por el if de arriba, se suma 1
    resultado[texto[i]]+=1;
  }
  console.log(resultado);
}
Conteo(prompt("Introduce el texto"));