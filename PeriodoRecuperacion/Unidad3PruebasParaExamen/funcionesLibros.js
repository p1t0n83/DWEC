import * as funciones from "./script.js";

let pagina = 1;
let usuarios = [];
let elementos = parseInt(sessionStorage.getItem("elementos")) || 5;

window.addEventListener("load", function () {
  // Crear los botones de paginación una vez
  const paginacion = document.getElementById("paginador");
  paginacion.innerHTML = `
    <form>
      <button id="anterior">Anterior</button>
      <button id="siguiente">Siguiente</button>
    </form>`;

  document.getElementById("anterior").addEventListener("click", function (e) {
    e.preventDefault();
    if (pagina > 1) {
      pagina--;
      mostrar();
    }
  });

  document.getElementById("siguiente").addEventListener("click", function (e) {
    e.preventDefault();
    const totalPaginas = parseInt(usuarios.length / elementos);
    if (pagina < totalPaginas) {
      pagina++;
      mostrar();
    }
  });

  iniciarTabla();
});

function iniciarTabla() {
  document
    .getElementById("btnelemento")
    .addEventListener("click", async function (e) {
      e.preventDefault();
      let filtro = document.getElementById("filtro").value;
      usuarios = await funciones.obtenerDatos();

      if (filtro != "") {
        usuarios = usuarios.filter((usuario) => usuario.username == filtro);
        pagina = 1;
      }

      elementos = parseInt(document.getElementById("elementos").value);
      sessionStorage.setItem("elementos", elementos);

      mostrar();
    });
}

function mostrar() {
  let inicio = (pagina - 1) * elementos;
  let fin = inicio + elementos;
  let contenedor = document.getElementById("usuarios");
  contenedor.innerHTML = "";
  let tabla = document.createElement("div");
  tabla.className = "tabla";
  contenedor.appendChild(tabla);

  usuarios.slice(inicio, fin).forEach((usuario) => {
    let fila = document.createElement("div");
    fila.className = "row";
    fila.innerHTML = `
      <div class="column">${usuario.name}</div>
      <div class="column">${usuario.username}</div>
      <div class="column">${usuario.email}</div>
      <div class="column"><form><button class="verUsuario" value="${usuario.id}" type="submit">Ver usuario</button></div></form>`;
    tabla.appendChild(fila);
    
    document.querySelectorAll(".verUsuario").forEach((boton) => {
      boton.addEventListener("click", function (e) {
        e.preventDefault();
        let idUsuario = this.value;
        sessionStorage.setItem("idUsuario", idUsuario);
        window.location.href = "usuario-entidad.html";
      });
    });
  });
}
