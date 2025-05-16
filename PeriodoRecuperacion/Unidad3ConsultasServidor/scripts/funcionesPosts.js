import * as funciones from "./funciones.js";
let posts = [];
let pagina = 1;
let elementos = parseInt(localStorage.getItem("elementosPosts"));



async function obtenerDatos() {
  try {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("userid");

    if (userId) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
      posts = await response.json();
      paginador(posts);
    }
  } catch (error) {
    console.error("Error al obtener los datos:", error.message);
  }
}

// 🔸 Ejecutar al cargar la página
obtenerDatos();


document
  .getElementById("btnelemento")
  .addEventListener("click", async function (e) {
    e.preventDefault();
    let filtro = document.getElementById("filtro").value;
    posts = await funciones.getValores("posts");
    if (filtro != "") {
      posts = posts.filter((post) => {
        return post.title == filtro;
      });
      pagina = 1;
    }
    console.log(posts);
    elementos = parseInt(document.getElementById("elementos").value);
    localStorage.setItem("elementosPosts", elementos);

    paginador(posts);
  });

function paginador(posts) {
  let paginasTotales = parseInt(posts.length / elementos);
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
      mostrar(posts);
    }
  });

  document.getElementById("siguiente").addEventListener("click", function (e) {
    e.preventDefault();
    if (pagina + 1 < paginasTotales) {
      pagina++;
      mostrar(posts);
    }
  });

  mostrar(posts);
}

function mostrar(posts) {
  let inicio = (pagina - 1) * elementos;
  let fin = inicio + elementos;
  let contenedorPosts = document.getElementById("posts");
  contenedorPosts.innerHTML = "";
  let tabla = document.createElement("div");
  tabla.className = "tabla2";
  contenedorPosts.appendChild(tabla);
  posts.slice(inicio, fin).forEach((post) => {
    let fila = document.createElement("div");
    fila.className = "row";
    fila.innerHTML = `
      <div class="column">${post.title}</div>
      <div class="column">${post.body}</div>
    `;
    let boton=document.createElement("div");
    boton.className="column";
    boton.innerHTML=`
    <form action="comentarios.html" method="get">
    <input type="hidden" value="${post.id}" name="postid">
    <button type="submit">Ver comentarios</button>
    </form>`;
    fila.appendChild(boton);
    tabla.appendChild(fila);
  });
}
