
function validarNombre(nombreValidado, callback) {
    let valida = true;
    for (let i = 0; i < nombreValidado.length; i++) {
        let char = nombreValidado.charAt(i);
        for (let f = 0; f < 10; f++) {
            if (f.toString() == char) {
                valida = false;
                break;
            }
        }
    }
    if (valida) {
        callback(nombreValidado, null);
    } else {
        callback(null, new Error("El nombre no puede contener numeros"));
    }
}

function validarPassword(passwordValidada, callback) {
    if (!tieneLongitud(8, passwordValidada)) {
        callback(null, new Error("La contraseña no cumple con la longitud indicada"));
    }
    if (!tieneMayuscula(passwordValidada)) {
        callback(null, new Error("La contraseña no tiene letras mayusculas"));
    }
    if(!tieneMinusculas(passwordValidada)){
        callback(null,new Error("La contraseña no tiene letras minusculas"));
    }
    if(!tieneNumero(passwordValidada)){
        callback(null,new Error("La contraseña no tiene numeros"));
    }
    callback(passwordValidada,null);
}




function tieneLongitud(longitud, valor) {
    if(valor.length >= longitud){
        return true;
    }else{
        return false;
    }

}

function tieneMayuscula(valor) {
    for (let i = 0; i < valor.length; i++) {
        let char = valor.charAt(i);
        if (char.toUpperCase() == char) {
            return true;
        }
    }
    return false;
}

function tieneMinusculas(valor){
    for (let i = 0; i < valor.length; i++) {
        let char = valor.charAt(i);
        if (char.toUpperCase() == char) {
            return true;
        }
    }
    return false;
}

function tieneNumero(valor){
    for(let i=0;i<valor.length;i++){
         let char=valor.charAt(i);
         for(let f=0;f<=9;f++){
            if(char==f){
                return true;
            }
         }
    }
    return false;
}

function validarEmail(valor, callback) {
   
   let arroba=0;
   for(let i=0;i<valor.length;i++){
      if(valor.charAt(i)=='@'){
        arroba=i;
      }
   }
   if(arroba>0){
    let partesEmail=valor.split('@');
    let usuario=partesEmail[0];
    let dominio=partesEmail[1];
    if(!usuario || !dominio){
        callback(null,new Error("El contenido del email no es valido 1"));
    }

    let separacionPunto=dominio.split('.');
    if(separacionPunto[1].length<2 || separacionPunto[1].length>3){
        callback(null,new Error("El contenido del email no es valido 2")); 
    }
   }
   callback(valor,null);
}

function validarFecha(valor, callback) {
   let fechaActual=new Date();
   let nacimiento=new Date(valor);
  let anios=fechaActual.getFullYear()-nacimiento.getFullYear();
   if(anios>=18 && anios<=24){
      callback(valor,null);
   }else{
      callback(null,new Error("LA fecha no es valida ha de tener entre 18 y 24 años"));
   }
}


  
export {validarNombre,validarPassword,validarEmail,validarFecha};