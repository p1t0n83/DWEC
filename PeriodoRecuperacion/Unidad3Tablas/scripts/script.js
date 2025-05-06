import datos from "./datos.js";
let alumnos=datos;


function botones(){
    let botones=document.createElement('div');
    botones.innerHTML="<header><button id='tabla'>Tabla</button><button id='detalle'>Fichas</button></header>";
    document.body.appendChild(botones);
}
function vistaTabla() {

    let tabla = document.createElement('div');
    tabla.setAttribute('id', 'tabla');
    tabla.innerHTML+='<h1>Lista de alumnos</h1>';
    alumnos.forEach(alumno=>{
        tabla.innerHTML+=`<div id="fila"><div id="columna">Nombre: ${alumno.nombre}</div><div id="columna">Curso: ${alumno.curso}</div><div id="columna">Telefono: ${alumno.telefono}</div><div id="columna">Email: ${alumno.email}</div></div>`;
    });
    document.body.appendChild(tabla);
    
    
}

function vistaDetalles() {
    let tabla = document.createElement('div');
    tabla.setAttribute('id', 'contenedor');
    tabla.innerHTML+='<h1>Lista de alumnos</h1>';
    alumnos.forEach(alumno=>{
        tabla.innerHTML+=`<div id="tarjeta">
        <ul>
        <li${alumno.nombre}li>
        <li>${alumno.dni}<li>
        <li>${alumno.curso}<li>
        <li>${alumno.telefono}<li>
        <li>${alumno.email}<li>
        </ul></div>`;
    });
    document.body.appendChild(tabla);
    
}


window.addEventListener("load",function(){
    botones();
    let tabla=document.getElementById("tabla");
    let detalle=document.getElementById("detalle");
    tabla.addEventListener("click",function(e){
        document.body.innerHTML="";
        botones();
        vistaTabla();
    });

    detalle.addEventListener("click",function(e){
        document.body.innerHTML="";
        botones();
        vistaDetalles();
    });
});