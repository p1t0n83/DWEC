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
  const usuarios = await funciones.getValores("users");
  contenedorUsuarios.innerHTML = "";
  const tabla = document.createElement("div");
  tabla.className = "tabla4";
  contenedorUsuarios.appendChild(tabla);

  usuarios.slice(0, 5).forEach((usuario) => {
    const fila = document.createElement("div");
    fila.className = "row";
    fila.innerHTML = `
        <div class="column">${usuario.name}</div>
        <div class="column">${usuario.username}</div>
        <div class="column">${usuario.email}</div>
        <div class="column">${usuario.phone}</div>
    `;
    tabla.appendChild(fila);
  });
  const total = usuarios.length;
  const fila=document.createElement("p");
  fila.innerHTML=total;
  tabla.appendChild(fila);
}

async function generarTodos() {
  const contenedorTodos = document.getElementById("todos");
  const tareas = await funciones.getValores("todos");
  contenedorTodos.innerHTML = "";
  const tabla = document.createElement("div");
  tabla.className = "tabla2";
  contenedorTodos.appendChild(tabla);

  tareas.slice(0, 5).forEach((tarea) => {
    const fila = document.createElement("div");
    fila.className = "row";
    fila.innerHTML = `
            <div class="column">${tarea.title}</div>
            <div class="column">${tarea.completed}</div>
        `;
    tabla.appendChild(fila);
  });
  const total = tareas.length;
  const fila=document.createElement("p");
  fila.innerHTML=total;
  tabla.appendChild(fila);
}

async function generarPosts() {
  const contenedorPosts = document.getElementById("posts");
  const posts = await funciones.getValores("posts");
  contenedorPosts.innerHTML = "";
  const tabla = document.createElement("div");
  tabla.className = "tabla2";
  contenedorPosts.appendChild(tabla);

  posts.slice(0, 5).forEach((post) => {
    const fila = document.createElement("div");
    fila.className = "row";
    fila.innerHTML = `<div class="row">
        <div class="column">${post.title}</div>
        <div class="column">${post.body}</div>
        </div>`;

    tabla.appendChild(fila);
  });
  const total = posts.length;
  const fila=document.createElement("p");
  fila.innerHTML=total;
  tabla.appendChild(fila);
}

async function generarComentarios() {
  const contenedorComentarios = document.getElementById("comentarios");
  const comentarios = await funciones.getValores("comments");
  contenedorComentarios.innerHTML = "";
  const tabla = document.createElement("div");
  tabla.className = "tabla3";
  contenedorComentarios.appendChild(tabla);

  comentarios.slice(0, 5).forEach((comentario) => {
    const fila = document.createElement("div");
    fila.className = "row";
    fila.innerHTML = `<div class="row">
        <div class="column">${comentario.name}</div>
        <div class="column">${comentario.email}</div>
        <div class="column">${comentario.body}</div>
       
        </div>`;
    tabla.appendChild(fila);
  });
  const total = comentarios.length;
  const fila=document.createElement("p");
  fila.innerHTML=total;
  tabla.appendChild(fila);
}

async function generarAlbumes() {
  const contenedorAlbumes = document.getElementById("albumes");
  const albumes = await funciones.getValores("albums");
  contenedorAlbumes.innerHTML = "";
  const tabla = document.createElement("div");
  tabla.className = "tabla1";
  contenedorAlbumes.appendChild(tabla);

  albumes.slice(0, 5).forEach((album) => {
    const fila = document.createElement("div");
    fila.className = "row";
    fila.innerHTML = `<div class="row">
        <div class="column">${album.title}</div>
        </div>`;
    tabla.appendChild(fila);
  });
  const total = albumes.length;
  const fila=document.createElement("p");
  fila.innerHTML=total;
  tabla.appendChild(fila);
}

async function generarFotos() {
  const contenedorFotos = document.getElementById("fotos");
  const fotos = await funciones.getValores("photos");
  contenedorFotos.innerHTML = "";
  const tabla = document.createElement("div");
  tabla.className = "tabla3";
  contenedorFotos.appendChild(tabla);

  fotos.slice(0, 5).forEach((foto) => {
    const fila = document.createElement("div");
    fila.className = "row";
    fila.innerHTML = `<div class="row">
        <div class="column">${foto.title}</div>
        <div class="column">${foto.url}</div>
        <div class="column">${foto.thumbnailUrl}</div>
        </div>`;
    tabla.appendChild(fila);
  });
  const total = fotos.length;
  const fila=document.createElement("p");
  fila.innerHTML=total;
  tabla.appendChild(fila);
}
