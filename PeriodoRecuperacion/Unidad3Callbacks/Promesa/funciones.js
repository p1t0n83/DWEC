function validarNombre(nombreValidado) {
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
    return new Promise((resuelve, rechazo) => {
        if (valida) {
            resuelve(nombreValidado);
        } else {
            rechazo("El nombre no es valido");
        }
    });


}

function validarPassword(passwordValidada) {
    let fallo = false;
    let mensaje = "";
    if (!tieneLongitud(8, passwordValidada)) {
        fallo = true;
        mensaje = "La contraseña debe como minimo longitud de 8";
    }
    if (!tieneMayuscula(passwordValidada) && !fallo) {
        fallo = true;
        mensaje = "La contraseña no tiene letras mayusculas";
    }
    if (!tieneMinusculas(passwordValidada) && !fallo) {
        fallo = true;
        mensaje = "La contraseña no tiene letras minusculas";
    }
    if (!tieneNumero(passwordValidada) && !fallo) {
        fallo = true;
        mensaje = "La contraseña no tiene numeros";
    }
    return new Promise((resuelve, rechazo) => {
        if (!fallo) {
            resuelve(passwordValidada);
        } else {
            rechazo(mensaje);
        }
    });
}




function tieneLongitud(longitud, valor) {
    if (valor.length >= longitud) {
        return true;
    } else {
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

function tieneMinusculas(valor) {
    for (let i = 0; i < valor.length; i++) {
        let char = valor.charAt(i);
        if (char.toUpperCase() == char) {
            return true;
        }
    }
    return false;
}

function tieneNumero(valor) {
    for (let i = 0; i < valor.length; i++) {
        let char = valor.charAt(i);
        for (let f = 0; f <= 9; f++) {
            if (char == f) {
                return true;
            }
        }
    }
    return false;
}

function validarEmail(emailValidado) {
    let fallo = false;
    let mensaje = "";
    let arroba = 0;
    for (let i = 0; i < emailValidado.length; i++) {
        if (emailValidado.charAt(i) == '@') {
            arroba = i;
        }
    }
    if (arroba > 0) {
        let partesEmail = emailValidado.split('@');
        let usuario = partesEmail[0];
        let dominio = partesEmail[1];
        if ((!usuario || !dominio) && !fallo) {
            fallo = true;
            mensaje = "El contenido del email no es valido por que falta contenido antes o despues del arroba";
        }

        let separacionPunto = dominio.split('.');
        if ((separacionPunto[1].length < 2 || separacionPunto[1].length > 3) && !fallo) {
            fallo = true;
            mensaje = "El contenido del email no es valido la extension no es correcta";
        }
    } else {
        error = true;
        mensaje = "El correo no tiene arroba";
    }

    return new Promise((resuelve, rechazo) => {
        if (!fallo) {
            resuelve(emailValidado);
        } else {
            rechazo(mensaje);
        }
    });

}

function validarFecha(fechaValidada) {
    let fechaActual = new Date();
    let nacimiento = new Date(fechaValidada);
    let anios = fechaActual.getFullYear() - nacimiento.getFullYear();
    let fallo = anios >= 18 && anios <= 24?false:true;
    return new Promise((resuelve, rechazo) => {
        if (!fallo) {
            resuelve(fechaValidada);
        } else {
            rechazo("La fecha no es valida");
        }
    });
}



export { validarNombre, validarPassword, validarEmail, validarFecha };