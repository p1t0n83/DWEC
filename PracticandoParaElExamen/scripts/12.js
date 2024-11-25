'use stric';

function tombola(){
    let numeroSecreto=Math.random()*100+1;
    let numero;
    let intentos=0;
    let acierto=false;
    do{
    numero=parseInt(prompt('Introduce un numero para ver si ganas, te quedan '+(5-intentos)+' para perder'));
    intentos++;
    if(numero>numeroSecreto){
        alert('El numero que has indicado es mayor que el secreto');
    }else if(numero<numeroSecreto){
        alert("El numero que has indicado es menor que el secreto");
    }else if(numero===numeroSecreto){
        alert("Felicidades indio!!!! Has acertado");
        acierto=true;
        break;
    }
    }while(intentos<5);
    if(intentos===5 && acierto===false){
    alert("eres un pringado guapo eh? no vales para nada, ni para acertar un numero");
    }
}
tombola();