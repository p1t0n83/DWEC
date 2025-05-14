import * as funciones from "./funciones.js";

async function index() {
    await generarUsuarios();     
    await generarTodos();        
    await generarPosts();         
    await generarComentarios();  
    await generarAlbumes();      
    await generarFotos();        
}
index();



async function generarUsuarios() {
    const contenedorUsuarios = document.getElementById("usuarios");
    const usuarios = await funciones.getUsers("users");
    contenedorUsuarios.innerHTML = "";
    const tabla = document.createElement("div");
    tabla.className = "tabla4";
    contenedorUsuarios.appendChild(tabla);

    for (let key in usuarios) {
        const fila = document.createElement("div");
        fila.className = "row";
        fila.innerHTML = `<div class="row">
        <div class="column">${usuarios[key]['name']}</div>
        <div class="column">${usuarios[key]['username']}</div>
        <div class="column">${usuarios[key]['email']}</div>
        <div class="column">${usuarios[key]['phone']}</div>
        </div>`;
        tabla.appendChild(fila);
    }
}

async function generarTodos(){
     const contenedorTodos = document.getElementById("todos");
    const tareas = await funciones.getUsers("todos");
    contenedorTodos.innerHTML = "";
    const tabla = document.createElement("div");
    tabla.className = "tabla2";
    contenedorTodos.appendChild(tabla);

    for (let key in tareas) {
        const fila = document.createElement("div");
        fila.className = "row";
        fila.innerHTML = `<div class="row">
        <div class="column">${tareas[key]['title']}</div>
        <div class="column">${tareas[key]['completed']}</div>
        </div>`;

        tabla.appendChild(fila);
    }
}

async function generarPosts(){
     const contenedorPosts = document.getElementById("posts");
    const posts = await funciones.getUsers("posts");
    contenedorPosts.innerHTML = "";
    const tabla = document.createElement("div");
    tabla.className = "tabla2";
    contenedorPosts.appendChild(tabla);

    for (let key in posts) {
        const fila = document.createElement("div");
        fila.className = "row";
        fila.innerHTML = `<div class="row">
        <div class="column">${posts[key]['title']}</div>
        <div class="column">${posts[key]['body']}</div>
        </div>`;

        tabla.appendChild(fila);
    }
}


async function generarComentarios() {
    const contenedorComentarios = document.getElementById("comentarios");
    const comentarios = await funciones.getUsers("comments");
    contenedorComentarios.innerHTML = "";
    const tabla = document.createElement("div");
    tabla.className = "tabla3";
    contenedorComentarios.appendChild(tabla);

    for (let key in comentarios) {
        const fila = document.createElement("div");
        fila.className = "row";
        fila.innerHTML = `<div class="row">
        <div class="column">${comentarios[key]['name']}</div>
        <div class="column">${comentarios[key]['email']}</div>
        <div class="column">${comentarios[key]['body']}</div>
       
        </div>`;
        tabla.appendChild(fila);
    }
}

async function generarAlbumes(){
     const contenedorAlbumes = document.getElementById("albumes");
    const albumes = await funciones.getUsers("albums");
    contenedorAlbumes.innerHTML = "";
    const tabla = document.createElement("div");
    tabla.className = "tabla1";
    contenedorAlbumes.appendChild(tabla);

    for (let key in albumes) {
        const fila = document.createElement("div");
        fila.className = "row";
        fila.innerHTML = `<div class="row">
        <div class="column">${albumes[key]['title']}</div>
        </div>`;
        tabla.appendChild(fila);
    }
}

async function generarFotos() {
    const contenedorFotos = document.getElementById("fotos");
    const fotos = await funciones.getUsers("photos");
    contenedorFotos.innerHTML = "";
    const tabla = document.createElement("div");
    tabla.className = "tabla3";
    contenedorFotos.appendChild(tabla);

    for (let key in fotos) {
        const fila = document.createElement("div");
        fila.className = "row";
        fila.innerHTML = `<div class="row">
        <div class="column">${fotos[key]['title']}</div>
        <div class="column">${fotos[key]['url']}</div>
        <div class="column">${fotos[key]['thumbnailUrl']}</div>
       
        </div>`;
        tabla.appendChild(fila);
    }
}