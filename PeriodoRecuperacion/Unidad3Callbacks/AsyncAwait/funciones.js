async function validarNombre(nombreValidado) {
  for (let i = 0; i < nombreValidado.length; i++) {
    let char = nombreValidado.charAt(i);
    if (!isNaN(char) && char !== " ") {
      throw new Error("El nombre no puede contener números");
    }
  }
  return nombreValidado;
}

async function validarPassword(passwordValidada) {
  if (!tieneLongitud(8, passwordValidada)) {
    throw new Error("La contraseña no cumple con la longitud indicada");
  }
  if (!tieneMayuscula(passwordValidada)) {
    throw new Error("La contraseña no tiene letras mayúsculas");
  }
  if (!tieneMinusculas(passwordValidada)) {
    throw new Error("La contraseña no tiene letras minúsculas");
  }
  if (!tieneNumero(passwordValidada)) {
    throw new Error("La contraseña no tiene números");
  }
  return passwordValidada;
}

async function validarEmail(valor) {
  const arroba = valor.indexOf('@');
  if (arroba <= 0) throw new Error("El email no contiene '@' en una posición válida");

  const partesEmail = valor.split('@');
  const usuario = partesEmail[0];
  const dominio = partesEmail[1];

  if (!usuario || !dominio) {
    throw new Error("El contenido del email no es válido (usuario o dominio vacío)");
  }

  const separacionPunto = dominio.split('.');
  if (separacionPunto.length < 2 || separacionPunto[1].length < 2 || separacionPunto[1].length > 3) {
    throw new Error("El contenido del email no es válido (dominio incorrecto)");
  }

  return valor;
}

async function validarFecha(valor) {
  const fechaActual = new Date();
  const nacimiento = new Date(valor);
  const anios = fechaActual.getFullYear() - nacimiento.getFullYear();

  if (anios >= 18 && anios <= 24) {
    return valor;
  } else {
    throw new Error("La fecha no es válida: ha de tener entre 18 y 24 años");
  }
}

function tieneLongitud(longitud, valor) {
  return valor.length >= longitud;
}

function tieneMayuscula(valor) {
  return /[A-Z]/.test(valor);
}

function tieneMinusculas(valor) {
  return /[a-z]/.test(valor);
}

function tieneNumero(valor) {
  return /\d/.test(valor);
}
