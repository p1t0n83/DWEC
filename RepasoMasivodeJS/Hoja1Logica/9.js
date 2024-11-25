function agrupar (...valores){
    let agrupado={};
    for(let i=0;i<valores.length;i++){
        let tipo=typeof(valores[i]);
        if(!agrupado[tipo]){
            agrupado[tipo]=[];
        }
        agrupado[tipo]+=valores[i]+". ";
    }
    for(let valor in agrupado){
        console.log(agrupado[valor]);
    }
}
let valores=["iker Garcia Iturri",19,true,false,5.4,'o',undefined];
agrupar(...valores);