import { validarNombre, validarPassword } from "./funciones.js";

const $btnGuardar = document.getElementById("guardar");

$btnGuardar.addEventListener("click", function (e) {
    e.preventDefault();
    const $inpNombre = document.getElementById("nombre").value;
    const $inpPassword = document.getElementById("password").value;
    const $inpEmail = document.getElementById("email").value;
    const $inpFecha = document.getElementById("nacimiento").value;


    validarNombre($inpNombre, (nombreValidado, rechazada) => {    
        if (rechazada) {
            alert('Error: ' + rechazada.message);
            return;
        }
        validarPassword($inpPassword, (passwordValidada, rechazada) => {
            if (rechazada) {
                alert('Error: ' + rechazada.message);
                return;
            }
            validarEmail($inpEmail, (emailValidado, rechazada) => {
                if (rechazada) {
                    alert('Error: ' + rechazada.message);
                    return;
                }
                validarFecha($inpFecha, (fechaValidada, rechazada) => {
                    if (rechazada) {
                        alert('Error: ' + rechazada.message);
                        return;
                    }
                })
            })
        });
    });
})
