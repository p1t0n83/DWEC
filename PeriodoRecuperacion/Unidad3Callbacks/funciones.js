
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
        callback(passwordValidada, new Error("La contraseña no cumple con la longitud indicada"));
    }
    if (!tieneMayuscula(passwordValidada)) {
        callback(passwordValidada, new Error("La contraseña no tiene letras mayusculas"));
    }
    if(!tieneMinusculas(passwordValidada)){
        callback(passwordValidada,new Error("La contraseña no tiene letras minusculas"));
    }
    if(!tieneNumero(passwordValidada)){
        callback(passwordValidada,new Error("La contraseña no tiene numeros"));
    }
    callback(passwordValidada,null);
}




function tieneLongitud(longitud, valor) {
    return valor.length() < longitud;

}

function tieneMayuscula(valor) {
    for (let i = 0; i < valor.length(); i++) {
        let char = valor.charAt(i);
        if (char.toUpperCase() == char) {
            return true;
        }
    }
    return false;
}

function tieneMinusculas(valor){
    for (let i = 0; i < valor.length(); i++) {
        let char = valor.charAt(i);
        if (char.toUpperCase() == char) {
            return true;
        }
    }
    return false;
}

function tieneNumero(valor){

}

function validarEmail(valor, callback) {
   let detras="";
   let arroba=0;
   for(let i=0;i<valor.length();i++){
      if(valor.subString(i)=='@'){
        arroba=i;
      }
   }
   if(arroba>0){
    let partesEmail=valor.split('@');
    let usuario=partesEmail[0];
    let dominio=partesEmail[1];
    if(!usuario || !dominio){
        callback(emailValido,new Error("El contenido del email no es valido"));
    }

    let separacionPunto=dominio.spli('.');
    if(separacionPunto[0].length<1 || separacionPunto[1].length>2){
        callback(emailValido,new Error("El contenido del email no es valido")); 
    }
   }
   callback(emailValido,null);
}
function validarFecha(valor, callback) {

}


  
export {validarNombre,validarPassword};