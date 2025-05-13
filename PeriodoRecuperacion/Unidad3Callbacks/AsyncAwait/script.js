import * as validaciones from "./funciones.js";


function iniciarFormulario() {

    const $btnGuardar = document.getElementById("guardar");
    const $inpNombre = document.getElementById("nombre");
    const $inpPassword = document.getElementById("password");
    const $inpEmail = document.getElementById("email");
    const $inpFecha = document.getElementById("nacimiento");


    $inpNombre.value = localStorage.getItem("nombre");
    $inpPassword.value = localStorage.getItem("password");
    $inpEmail.value = localStorage.getItem("email");
    $inpFecha.value = localStorage.getItem("nacimiento");


    $btnGuardar.addEventListener("click", function (e) {

        e.preventDefault();
        const $nombre = $inpNombre.value;
        const $password = $inpPassword.value;
        const $email = $inpEmail.value;
        const $fecha = $inpFecha.value;

        
    });

}

iniciarFormulario();