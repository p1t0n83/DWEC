import * as funciones from "./funciones.js";

let pagina = 1;
let albumes = [];
let elementos = parseInt(localStorage.getItem("elementosAlbumes"));

/* Petición GET con async/await y try-catch */
async function obtenerDatos() {
  try {
    // Sin await response es una promesa
    const response = new URLSearchParams(window.location.search);
    const userid =  response.get("userid");
    console.log(userid);
    if (userid) {
      const response2 = await fetch(
        "https://jsonplaceholder.typicode.com/albums?userId=" + userid
      );
      const datos = await response2.json();
    paginador(datos);
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
    elementos = parseInt(document.getElementById("elementos").value);
    let albumes = await funciones.getValores("albums");
    if (filtro != "") {
      albumes = albumes.filter((albumn) => {
        return albumn.title == filtro;
      });
      pagina = 1;
    }
    elementos == 1 ? (elementos = albumes.length) : (elementos = elementos);
    localStorage.setItem("elementosAlbumes", elementos);
    paginador(albumes);
  });

function paginador(albumes) {
  let paginasTotales = parseInt(albumes.length / elementos);
  let contenedorPaginado = document.getElementById("paginacion");
  contenedorPaginado.innerHTML = `
    <button id="anterior">Anterior</button>
    <span id="paginaActual"></span>
    <button id="siguiente">Siguiente</button>
  `;
  document.getElementById("anterior").addEventListener("click", function (e) {
    e.preventDefault();
    if (pagina - 1 > 0) {
      pagina--;
      mostrar(albumes);
    }
  });

  document.getElementById("siguiente").addEventListener("click", function (e) {
    e.preventDefault();
    if (pagina + 1 < paginasTotales) {
      pagina++;
      mostrar(albumes);
    }
  });
  mostrar(albumes);
}

function mostrar(albumes) {
  let inicio = (pagina - 1) * elementos;
  let fin = inicio + elementos;
  let contenedorAlbumes = document.getElementById("albumes");
  contenedorAlbumes.innerHTML = " ";
  let tabla = document.createElement("div");
  tabla.className = "tabla1";

  contenedorAlbumes.appendChild(tabla);
  albumes.slice(inicio, fin).forEach((album) => {
    let fila = document.createElement("div");
    fila.className = "row";
    
    fila.innerHTML = `
    <div class="column">${album.title}</div>`;
    let boton=document.createElement("div");
    boton.className="column";
    boton.innerHTML=`
    <form action="fotos.html" method="get">
    <input type="hidden" value="${album.id}" name="albumid">
    <button type="submit">Ver pendientes</button>
    </form>`;
    fila.appendChild(boton);
    tabla.appendChild(fila);
  });
}
