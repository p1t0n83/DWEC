import * as funciones from "./funciones.js";

let pagina = 1;
let fotos = [];
let elementos = localStorage.getItem("elementosFotos");

async function obtenerDatos() {
  try {
    const response = new URLSearchParams(window.location.search);
    const idAlbum = response.get("albumid");
    if (idAlbum) {
      const response2 = await fetch(
        "https://jsonplaceholder.typicode.com/photos?albumId=" + idAlbum
      );
      fotos = await response2.json();
      paginador(fotos);
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
    fotos = await funciones.getValores("photos");
    elementos = parseInt(document.getElementById("elementos").value);
    let filtro = document.getElementById("filtro").value;
    if (filtro != "") {
      fotos = fotos.filter((foto) => {
        return (foto.title = filtro);
      });
      pagina = 1;
    }
    elementos == 1 ? (elementos = fotos.length) : (elementos = elementos);
    localStorage.setItem("elementosFotos", elementos);
    paginador(fotos);
  });

function paginador(fotos) {
  let paginasTotales = parseInt(fotos.length / elementos);
  let paginacion = document.getElementById("paginacion");
  paginacion.innerHTML = `
    <button id="anterior">Anterior</button>
    <span id="paginaActual"></span>
    <button id="siguiente">Siguiente</button>
  `;

  document.getElementById("anterior").addEventListener("click", function (e) {
    e.preventDefault();
    if (pagina - 1 > 0) {
      pagina--;
      mostrar(fotos);
    }
  });

  document.getElementById("siguiente").addEventListener("click", function (e) {
    e.preventDefault();
    if (pagina + 1 < paginasTotales) {
      pagina++;
      mostrar(fotos);
    }
  });

  mostrar(fotos);
}

function mostrar(fotos) {
  let inicio = (pagina - 1) * elementos;
  let fin = inicio + elementos;
  let contenedorFotos = document.getElementById("fotos");
  contenedorFotos.innerHTML = " ";
  let tabla = document.createElement("div");
  tabla.className = "tabla3";
  contenedorFotos.appendChild(tabla);
  fotos.slice(inicio, fin).forEach((foto) => {
    let fila = document.createElement("div");
    fila.className = "row";
    fila.innerHTML = `
       <div class="column">${foto.title}</div>
       <div class="column">${foto.url}</div>
       <div class="column">${foto.thumbnailUrl}</div>`;
    tabla.appendChild(fila);
  });
}
