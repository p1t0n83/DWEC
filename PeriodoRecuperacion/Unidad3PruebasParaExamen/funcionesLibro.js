import * as funciones from "./script.js";

window.addEventListener("load", function () {
  cargarFormulario();
});

async function cargarFormulario() {
  let usuarios = await funciones.obtenerDatos();
  let idUsuario = parseInt(sessionStorage.getItem("idUsuario"));
  usuarios = usuarios.filter((usuario) => {
    return usuario.id == idUsuario;
  });
  let contenedor = document.getElementById("libro");
  usuarios.slice(0, 1).forEach((usuario) => {
    contenedor.innerHTML = `
  <form id="formEditar">
    <label>ID:</label>
    <input type="text" name="id" value="${usuario.id}" readonly><br>

    <label>Nombre:</label>
    <input type="text" name="name" value="${usuario.name}"><br>

    <label>Username:</label>
    <input type="text" name="username" value="${usuario.username}"><br>

    <label>Email:</label>
    <input type="email" name="email" value="${usuario.email}"><br>


    <label>Teléfono:</label>
    <input type="text" name="phone" value="${usuario.phone}"><br>

    <label>Sitio Web:</label>
    <input type="text" name="website" value="${usuario.website}"><br>

    <button id="editar">Editar</button>
    <button id="borrar">Borrar</button>
  </form>
`;
    borrar();
    actualizar();
  });
}

function borrar() {
  document
    .getElementById("borrar")
    .addEventListener("click", async function (e) {
      e.preventDefault();
      let idBorrar = sessionStorage.getItem("idUsuario");
      const peticion = await fetch(
        "https://jsonplaceholder.typicode.com/users/" + idBorrar,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (peticion.ok) {
        alert("El producto se borro");
      } else {
        alert("El producto no se pudo borrar");
      }
    });
}


function actualizar() {
  document
    .getElementById("editar")
    .addEventListener("click", async function (e) {
      e.preventDefault();
      let idBorrar = sessionStorage.getItem("idUsuario");
      const form = document.getElementById("formEditar");
      const data = {
        name: form.name.value,
        username: form.username.value,
        email: form.email.value,
        phone: form.phone.value,
        website: form.website.value,
      };

      const peticion = await fetch(
        "https://jsonplaceholder.typicode.com/users/" + idBorrar,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (peticion.ok) {
        alert("El producto se actualizó");
      } else {
        alert("El producto no se pudo actualizar");
      }
    });
}

