
  let guardar=document.getElementById("guardar");
  guardar.addEventListener("click",function(){
    
function validarNombre(valor,callback){
    let valida=true;
    for(let i=0;i<valor.length;i++){
        let char=valor.charAt(i);
        for(let f=0;f<10;f++){
            if(f.toString()==char){
                valida=false;
                break;
            }
        }
    }
    if(valida){
        callback(valor,null);
    }else{
        callback(null,new Error("El nombre no puede contener numeros"));
    }
} 

function validarPassword(valor,callback){
    let validaMayus=true;
    let validaMinus=true;
    let validaNum=true;
    let validaLongitud=true;
}

function validarEmail(valor,callback){

}
function validarFecha(valor,callback){

}

let nombre=document.getElementById("nombre").value;
validarNombre(nombre,(exito,rechazada)=>{
    if(exito){
        let password=document.getElementById("password");
        validarPassword();
    }else{
        console.log(rechazada.message);
        alert('Error: ' + rechazada.message);
    }
});


  })
