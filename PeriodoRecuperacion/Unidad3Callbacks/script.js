import { validarNombre, validarPassword } from "./funciones.js";

const $btnGuardar = document.getElementById("guardar");
const $inpNombre = document.getElementById("nombre").value;
const $inpPassword = document.getElementById("password").value;
const $inpEmail = document.getElementById("email").value;
const $inpFecha = document.getElementById("nacimiento").value;

$btnGuardar.addEventListener("click", function () {

    validarNombre($inpNombre, (nombreValidado, rechazada) => {
        if (rechazada) {
            alert('Error: ' + error);
            return;
        }
        validarPassword($inpPassword, (passwordValidada, rechazada) => {
            if (rechazada) {
                alert('Error: ' + error);
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
