import * as validaciones from "./funciones.js";

const $btnGuardar = document.getElementById("guardar");

$btnGuardar.addEventListener("click", function (e) {
    e.preventDefault();
    const $inpNombre = document.getElementById("nombre").value;
    const $inpPassword = document.getElementById("password").value;
    const $inpEmail = document.getElementById("email").value;
    const $inpFecha = document.getElementById("nacimiento").value;


    validaciones.validarNombre($inpNombre, (nombreValidado, rechazada) => {    
        if (rechazada) {
            alert('Error: ' + rechazada.message);
            return;
        }
        validaciones.validarPassword($inpPassword, (passwordValidada, rechazada) => {
            if (rechazada) {
                alert('Error: ' + rechazada.message);
                return;
            }
            validaciones.validarEmail($inpEmail, (emailValidado, rechazada) => {
                if (rechazada) {
                    alert('Error: ' + rechazada.message);
                    return;
                }
                validaciones.validarFecha($inpFecha, (fechaValidada, rechazada) => {
                    if (rechazada) {
                        alert('Error: ' + rechazada.message);
                        return;
                    }
                    alert("Todos los campos son validos");
                    
                })
            })
        });
    });
})
