function verificacion() {
  let rango1 = parseInt(prompt("Inicio del rango"));
  let rango2 = parseInt(prompt("Fin del rango"));
  if (rango1 < rango2) {
    for (let numero = rango1; numero <= rango2; numero++) {
      let cumple = "";
      let primo=true;
      if(numero%5==0){
        cumple+=" Es multiplo de 5. "
      }
      if(numero%3==0){
        cumple+=" Es multiplo de 3. ";
      }
      for(let inicio=2;inicio<numero;inicio++){
        if(numero%inicio==0){
            primo=false;
        }
      }
      if(primo){
        cumple+=" Es primo. ";
      }
      if(cumple!=""){
         console.log("EL numero "+numero+cumple);
      }
    }
  }
}
verificacion();
