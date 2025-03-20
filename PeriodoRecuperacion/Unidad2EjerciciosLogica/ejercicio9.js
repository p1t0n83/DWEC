let cosas = [5, "hola", true, 5.5, "adiós", 42, false, { nombre: "Juan" }, [1, 2, 3]];

agrupamiento(...cosas);


function agrupamiento(...cosas) {

  let ordenados = [];

  for (let i = 0; i < cosas.length; i++) {
    let tipo = typeof cosas[i];
    if (!ordenados[tipo]) {
      ordenados[tipo] = "";
    }
    ordenados[tipo] += cosas[i]+"->Posicion: "+i+". ||";
  }
  console.log(ordenados);
}
