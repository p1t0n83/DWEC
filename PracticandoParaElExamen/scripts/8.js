
(function(){
 let numero=parseInt(prompt("numero para su factorial"));
 let factorial=`${numero}`;
 let total=numero;
 for(let i=numero-1;i>=1;i--){
 factorial+='x'+i;
 total*=i;
 }
 factorial+="="+total;
 alert(factorial);
}

)();