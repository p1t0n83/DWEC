function jugarDados(numeroLados){    
  function valor(){
    return Math.floor(Math.random() * numeroLados) + 1;
  }
  return [valor(),valor()];
  }



let lados=parseInt(prompt("Numero de lados"));
let numeroTiradas=parseInt(prompt("Numero de tiradas"));

function tirarDados(lados,numeroTiradas){
  let resultado=[];
  let victoriasJugador=0;
  let victoriasMaquina=0;
  for(let i=0;i<numeroTiradas;i++){
    resultado.push(jugarDados(lados));
    if(resultado[i][0]>resultado[i][1]){
      victoriasJugador++;
      resultado[i][2]="jugador";
    }else if(resultado[i][0]<resultado[i][1]){
      victoriasMaquina++;
      resultado[i][2]="maquina";
    }else{
      resultado[i][2]="empate";
    }
    alert("Jugador: "+resultado[i][0]+" Maquina: "+resultado[i][1]+" Ganador de la ronda: "+resultado[i][2]);
  }
  alert ("Resultado final, Victorias maquina: "+victoriasMaquina+" Victorias jugador: "+victoriasJugador);
}

tirarDados(lados,numeroTiradas);