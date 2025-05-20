import * as funciones from "./funciones.js";

let pagina = 1;
let comentarios = [];
let elementos = parseInt(localStorage.getItem("elementosComentarios"));

async function obtenerDatos() {
  try {
    // Sin await response es una promesa
    const params = new URLSearchParams(window.location.search);
    const postId = params.get("postid");

    if (postId) {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments?postId=" + postId
      );
      comentarios = await response.json();
      paginador(comentarios);
    }
  } catch (error) {
    console.error("Error al realizar la solicitud:", error.message);
  }
}
obtenerDatos();

document
  .getElementById("btnelemento")
  .addEventListener("click", async function (e) {
    e.preventDefault();

    let filtro = document.getElementById("filtro").value;
    comentarios = await funciones.getValores("comments");
    if (filtro != "") {
      comentarios = comentarios.filter((comentario) => {
        return comentario.name == filtro;
      });
      pagina = 1;
    }
    elementos = parseInt(document.getElementById("elementos").value);
    elementos == 1 ? (elementos = comentarios.length) : (elementos = elementos);
    localStorage.setItem("elementosComentarios", elementos);
    paginador(comentarios);
  });

function paginador() {
  let paginasTotales = parseInt(comentarios.length / elementos);
  let paginador = document.getElementById("paginacion");
  paginador.innerHTML = `
    <button id="anterior">Anterior</button>
    <span id="paginaActual"></span>
    <button id="siguiente">Siguiente</button>
  `;

  document.getElementById("anterior").addEventListener("click", function (e) {
    e.preventDefault();
    if (pagina - 1 > 0) {
      pagina--;
      mostrar(comentarios);
    }
  });

  document.getElementById("siguiente").addEventListener("click", function (e) {
    e.preventDefault();
    if (pagina + 1 < paginasTotales) {
      pagina++;
      mostrar(comentarios);
    }
  });
  mostrar(comentarios);
}

function mostrar(comentarios) {
  let inicio = (pagina - 1) * elementos;
  let final = inicio + elementos;
  let contenedorComentarios = document.getElementById("comentarios");
  contenedorComentarios.innerHTML = "";
  let tabla = document.createElement("div");
  tabla.className = "tabla3";
  contenedorComentarios.appendChild(tabla);
  comentarios.slice(inicio, final).forEach((comentario) => {
    let fila = document.createElement("div");
    fila.className = "row";
    fila.innerHTML = `
     <div class="column">${comentario.name}</div>
      <div class="column">${comentario.email}</div>
      <div class="column">${comentario.body}</div>`;

    tabla.appendChild(fila);
  });
}
