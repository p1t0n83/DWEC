import * as funciones from "./funciones.js";

let pagina = 1;
let elementos = 5;
let usuarios = [];
const entidad = "users"; // puedes cambiarlo o hacerlo dinámico

// Al iniciar, intenta recuperar preferencia guardada
if (localStorage.getItem(`${entidad}_elementos`)) {
  elementos = parseInt(localStorage.getItem(`${entidad}_elementos`));
  document.getElementById("elementos").value = elementos;
}

// Evento al hacer clic en botón "Mostrar"
document
  .getElementById("btnelemento")
  .addEventListener("click", async function (e) {
    e.preventDefault();
    let seleccion = parseInt(document.getElementById("elementos").value);
    let filtro = document.getElementById("filtro").value;
    // Guardamos lo que seleccionó el usuario (aunque sea "1" = Todos)
    localStorage.setItem(`${entidad}_elementos`, seleccion);
   usuarios = await funciones.getValores(entidad);

if (filtro !== "") {
  usuarios = usuarios.filter(usuario => usuario.name === filtro);
}
    // Si seleccionó "Todos" (valor = 1), mostramos todos los usuarios
    elementos = seleccion === 1 ? usuarios.length : seleccion;

    pagina = 1;
    generarPaginador();
    mostrarPagina();
  });

function generarPaginador() {
  const paginacion = document.getElementById("paginacion");
  paginacion.innerHTML = `
    <button id="anterior">Anterior</button>
    <span id="paginaActual"></span>
    <button id="siguiente">Siguiente</button>
  `;

  document.getElementById("anterior").addEventListener("click", () => {
    if (pagina > 1) {
      pagina--;
      mostrarPagina();
    }
  });

  document.getElementById("siguiente").addEventListener("click", () => {
    const totalPaginas = Math.ceil(usuarios.length / elementos);
    if (pagina < totalPaginas) {
      pagina++;
      mostrarPagina();
    }
  });
}

function mostrarPagina() {
  const contenedorUsuarios = document.getElementById("usuarios");
  contenedorUsuarios.innerHTML = "";

  const tabla = document.createElement("div");
  tabla.className = "tabla5";
  contenedorUsuarios.appendChild(tabla);

  const totalPaginas = Math.ceil(usuarios.length / elementos);
  const inicio = (pagina - 1) * elementos;
  const fin = inicio + elementos;
  const usuariosPagina = usuarios.slice(inicio, fin);

  usuariosPagina.forEach((usuario) => {
    const fila = document.createElement("div");
    fila.className = "row";
    fila.innerHTML = `
      <div class="column">${usuario.name}</div>
      <div class="column">${usuario.username}</div>
      <div class="column">${usuario.email}</div>
      <div class="column">${usuario.phone}</div>
     
    `;

    let botones=document.createElement("div");
    botones.className="column";
    let boton1=document.createElement("div");
    botones.appendChild(boton1);
    boton1.innerHTML=`
    <form action="todos.html" method="get">
    <input type="hidden" value="${usuario.id}" name="userid">
    <button type="submit">Ver pendientes</button>
    </form>`;
     let boton2=document.createElement("div");
    botones.appendChild(boton2);
    boton2.innerHTML=`
    <form action="albumes.html" method="get">
    <input type="hidden" value="${usuario.id}" name="userid">
    <button type="submit">Ver albumes</button>
    </form>`;
     let boton3=document.createElement("div");
    botones.appendChild(boton3);
    boton3.innerHTML=`
    <form action="posts.html" method="get">
    <input type="hidden" value="${usuario.id}" name="userid">
    <button type="submit">Ver posts</button>
    </form>`;
    fila.appendChild(botones);
    tabla.appendChild(fila);
  });

  const totalP = document.createElement("p");
  totalP.textContent = `Total de usuarios: ${usuarios.length}`;
  tabla.appendChild(totalP);

  const spanPagina = document.getElementById("paginaActual");
  const btnAnterior = document.getElementById("anterior");
  const btnSiguiente = document.getElementById("siguiente");

  spanPagina.textContent = `Página ${pagina} de ${totalPaginas}`;
  btnAnterior.disabled = pagina === 1;
  btnSiguiente.disabled = pagina === totalPaginas;
}
