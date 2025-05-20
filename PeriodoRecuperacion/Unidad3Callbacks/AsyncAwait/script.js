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


    $btnGuardar.addEventListener("click",async  function (e) {

        e.preventDefault();
       try {
  const nombre = await validarNombre("Iker");
  const password = await validarPassword("Test1234");
  const email = await validarEmail("iker@example.com");
  const fecha = await validarFecha("2003-05-10");
  console.log("Todo válido");
} catch (err) {
  console.error(err.message);
}

        
    });

}

iniciarFormulario();