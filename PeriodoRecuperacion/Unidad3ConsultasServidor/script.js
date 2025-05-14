import * as funciones from "./funciones.js";

function index() {
    generarUsuarios();
}
index();






async function generarUsuarios() {
    const contenedorUsuarios = document.getElementById("usuarios");
    const usuarios = await funciones.getUsers();
    contenedorUsuarios.innerHTML = "";
    console.log(usuarios);
    const tabla = document.createElement("div");
    tabla.className = "tabla";
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




