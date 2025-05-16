import * as funciones from "./funciones.js";
let todos=[];
let pagina=1;
let elementos=parseInt(localStorage.getItem("elementosTodos"));




async function obtenerDatos() {
  try {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("userid");

    if (userId) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
      if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
      todos = await response.json();
      paginador(todos);
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
    todos = await funciones.getValores("todos");
    if (filtro != "") {
      todos = todos.filter((uno) => {
        return uno.title == filtro;
      });
    }
    console.log(todos);

    elementos = parseInt(document.getElementById("elementos").value);
    elementos == 1 ? (elementos = todos.length) : "";
    localStorage.setItem("elementosTodos", elementos);
    paginador(todos);
  });

function paginador(todos) {
  
  elementos =  parseInt(localStorage.getItem("elementosTodos"));
  console.log(elementos);
  let totalPaginas = parseInt(todos.length / elementos);
 generarPaginador(pagina,totalPaginas,todos);
 mostrarPagina(todos, pagina, elementos);
}


function generarPaginador(pagina,totalPaginas,todos) {
  const paginacion = document.getElementById("paginacion");
  paginacion.innerHTML = `
    <button id="anterior">Anterior</button>
    <span id="paginaActual"></span>
    <button id="siguiente">Siguiente</button>
  `;

   document.getElementById("anterior").addEventListener("click",function(e){
    e.preventDefault();
       if(pagina-1>0){
        pagina--;
        mostrarPagina(todos, pagina, elementos);
       }
   });

document.getElementById("siguiente").addEventListener("click",function(e){
    e.preventDefault();
       if(pagina+1<totalPaginas){
        pagina++;
        mostrarPagina(todos, pagina, elementos);
       }
   });
   
}


function mostrarPagina(todos, pagina, elementos) {
  let minimo = (pagina - 1) * elementos;
  let maximo = minimo + elementos;
  const contenedorTodos = document.getElementById("todos");
  contenedorTodos.innerHTML = "";
  const tabla = document.createElement("div");
  tabla.className = "tabla2";
  contenedorTodos.appendChild(tabla);
  todos.slice(minimo, maximo).forEach((uno) => {
    const fila = document.createElement("div");
    fila.className = "row";
    fila.innerHTML = `
      <div class="column">${uno.title}</div>
      <div class="column">${uno.completed}</div>
      
    `;
    tabla.appendChild(fila);
  });
}


