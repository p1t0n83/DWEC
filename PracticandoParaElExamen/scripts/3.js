
(function () {
    let num = parseInt(prompt("Introduce la altura del cuadrado: ", 0));
    let resultado=new Array(num);
    for(let f=0;f<num;++f){
        let fila=[f];
        resultado[f]=fila; 
       for(let c=0;c<num;c++){
            fila[c]=(f===0 || f===num-1 || c===0 || c===num-1)?'*':' ';
        }  
    }

    for(let i of resultado){
        let result="";
       for(let j of i){
           result+=j;
       }
       console.log(result);
    }    
}
)();