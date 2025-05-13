import * as validaciones from "./funciones.js";





function iniciarFormulario() {
    const $btnGuardar = document.getElementById("guardar");
    const $inpNombre = document.getElementById("nombre").value;
    const $inpPassword = document.getElementById("password").value;
    const $inpEmail = document.getElementById("email").value;
    const $inpFecha = document.getElementById("nacimiento").value;

    $btnGuardar.addEventListener("click", function (e) {
        e.preventDefault();

        alert($inpNombre);


    });
}









iniciarFormulario();