// Array para almacenar los trabajadores

let incremento = 2;

let trabajadores = [{
    codigo: 'E01',
    nombre: 'Iker Garcia Iturri',
    categoria: 3,
    contratacion: 1988

}, {
    codigo: 'E02',
    nombre: 'Angel',
    categoria: 2,
    contratacion: 1988
}
];

function listarTrabajadores() {
    for (trabajador of trabajadores) {
        alert(`Codigo de Trabajador: ${trabajador.codigo}\n 
        Nombre: ${trabajador.nombre}\n
        Categoria: ${trabajador.categoria}\n
        Contratacion: ${trabajador.contratacion}`);

    }
}

function creaTrabajador() {
    let codigo;
    if (incremento < 10) {
        codigo = `E0${++incremento}`;
    } else {
        codigo = `E${++incremento}`;
    }
   
    let trabajador = {};
    trabajador.codigo = codigo;
    trabajador.nombre = prompt("Nombre y apellidos");
    trabajador.categoria = parseInt(prompt("Categoria 1, 2 o 3"));
    trabajador.contratacion = parseInt(prompt("Año de contratacion"));

    trabajadores[trabajadores.length] = trabajador;
}

function borrarTrabajador() {
    let codigo = prompt('Código del trabajador a borrar:');
    let trabajador;
     // lo buscamos 
    for (let t of trabajadores) {
        if (t.codigo === codigo) {
            trabajador = t;
            break;
        }
    }
    //lo borramos
    if (trabajador) {
        let confirmacion = confirm("¿Estas seguro de que quieres eliminar al trabajador?");
        if (confirmacion) {
            trabajadores.splice(trabajadores.indexOf(trabajador), 1);
        }
    } else {
        alert("no se encontro");
    }

}


function modificarTrabajador(){
    let codigo = prompt('Código del trabajador a modificar:');
    let newCodigo;
    let modificado=false;
    if (incremento < 10) {
        newCodigo = `E0${++incremento}`;
    } else {
        newCodigo = `E${++incremento}`;
    }
    for(t of trabajadores){
        if(t.codigo===codigo){
            t.codigo=newCodigo;
             modificado=true;
             break;
           
        }
    }
   alert(modificado===true?"Se modifico el codigo":"No se modifico el codigo");
}

function calcularNominas(){
    let listado = {
        1: 0,
        2: 0,
        3: 0
    };
    let anioActual=parseInt(new Date().getFullYear());
    let total=0;
    for(trabajador of trabajadores){
       let sueldo=trabajador.categoria===1?1100:trabajador.categoria===2?1400:1900;
       let anti=anioActual-trabajador.contratacion;
        listado[trabajador.categoria]+=(sueldo+(sueldo*(anti*0.04)));
        total+=(sueldo+(sueldo*(anti*0.04)));
    } 
    for (let l in listado) {
        alert(`Total para categoría ${l}: ${listado[l]}`);
    }
  alert("El total es: "+total);
}

creaTrabajador();
listarTrabajadores();
borrarTrabajador();
listarTrabajadores();
modificarTrabajador();
listarTrabajadores();
calcularNominas();