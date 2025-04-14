let altura = 9;
if (altura % 2 === 0) {
    console.log("La altura debe ser un número impar.");
  } else {
let figura = "";

// un for para la altura

  //for para la parte de arriba llega hasta la mitad
  for (let fila = 0; fila < altura / 2; fila++) {
    //guardamos la linea
    let linea = "";
    //for para los espacios
    for (let espacios = 0; espacios < fila; espacios++) {
      linea += " ";
    }
    //for para los asteriscos
    for (let asteriscos = altura - 2 * fila ; asteriscos > 0; asteriscos--) {
      linea += "*";
    }
    figura += linea + "\n";
  }

  //for para la parte de abajo
  for (let fila = altura / 2+1; fila < altura; fila++) {
    //guardamos la linea
    let linea = "";
    //for para los espacios
    for (let espacios = altura-fila-1; espacios>0; espacios--) {
      linea += " ";
    }
    //for para los asteriscos
    for (let asteriscos =1; asteriscos <(fila+2)-(altura-fila); asteriscos++) {
      linea += "*";
    }
    figura += linea + "\n";
  }


console.log(figura);
  }