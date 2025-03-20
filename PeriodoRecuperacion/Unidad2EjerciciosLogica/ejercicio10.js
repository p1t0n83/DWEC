function contar(){
   let cadena="Bonjour mademoiselle Ante mi no hay nada mas que hacer El unico prodigio frances Se se vaya a la banca Mbappe Top Five Puro talento hay En mi Paris X Gen Mi protege debe florecer La vittese de Dieu en mi pies Voy Cuando aparezco en el campo No existe defensa alguna Que me iguale En un enfrentamiento me Encargo que bailen Se me hace muy lento el impacto de Kaiser No es que los engañe Pero no es mi culpa que esten llenos de aberturas Cuando la supernova los deja fuera Con esta velocidad Tu realidad se altera Claro gol si la GodSpeed De Loki acelera"
   let cadenalista=[];
   for(let i=0;i<cadena.length;i++){
     let caracter=cadena.charAt(i);
     if(!cadenalista[caracter]){
         cadenalista[caracter]=0;
     }
     cadenalista[caracter]++;
   }
   console.log(cadenalista);
}   
contar();