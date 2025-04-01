function jugarDados(numeroLados) {
  function valor() {
    return Math.floor(Math.random() * numeroLados) + 1;
  }
  return [valor(), valor()];
}

function tirarDados(numeroLados, tiradas) {
  let resultado = [];
  let victoriasJugador = 0;
  let victoriasMaquina = 0;
  for (let i = 0; i < tiradas; i++) {
    resultado.push(jugarDados(numeroLados));
    if (resultado[i][0] > resultado[i][1]) {
      resultado[i][2] = "jugador";
      victoriasJugador += 1;
    } else if (resultado[i][0] < resultado[i][1]) {
      resultado[i][2] = "maquina";
      victoriasMaquina += 1;
    } else {
      resultado[i][2] = "empate";
    }
    alert(resultado[i]);
  }
  alert("Victorias de la maquina: " + victoriasMaquina);
  alert("Victorias del jugador: " + victoriasJugador);
}



window.addEventListener("load", function () {
  let boton = this.getElementById("tirar");
  boton.addEventListener("click", function () {
    let numeroLados = parseInt(prompt("Numero de lados"));
    let tiradas = parseInt(prompt("tiradas"));

    tirarDados(numeroLados, tiradas);
  })
})