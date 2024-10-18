(function(){
  let numero=parseInt(prompt('Introduce un numero para ver su tabla de multiplicar'));
  let tabla='';
  for(let i=1;i<=10;++i){
    tabla+=`${i} * ${numero}= `+(i*numero)+`\n`;
  }
  alert(tabla);
let tabla2='';

  let n1=parseInt(prompt('Introduce el numero menor'));
  let n2=parseInt(prompt('Introduce el numero mayor'));
  for(let i=n1;i<=n2;++i){
    tabla2+=`${i} * ${numero}= `+(i*numero)+`\n`;
  }
  alert(tabla2);
})();