function agruparLetras(cadena){
let agrupado={};
for(let i=0;i<cadena.length;i++){
    if(!agrupado[cadena[i]]){
        agrupado[cadena[i]]=0;
    }
    agrupado[cadena[i]]++;
}
for (let llave in agrupado) {
    console.log(`${llave}: ${agrupado[llave]}`);    
    }
}


let cadena='tienen habilidades, si ya lo sabia, no se encariñen de mas por que muy pronto seran mias, ahora que ya regrese tokyo tiene su artilleria, bienvenido a nuestra boda crees que no te invitaria, se deborara a los invitados, todo para hacerte mas feliz,pienso darle un gran significado, a por que vivir';
agruparLetras(cadena);