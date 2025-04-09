import Factura from './Factura.js';
const factura = new Factura("", "", "", false, []);

document.addEventListener("DOMContentLoaded", function () {
    // Botón para actualizar la factura
    let boton = document.getElementById("actualizar");
    boton.addEventListener("click", function (event) {
        event.preventDefault(); // Evita la recarga de la página
        factura.clienteNIF = document.getElementById("clientenif").value;
        factura.fecha = document.getElementById("fecha").value;
        factura.hora = document.getElementById("hora").value;
        factura.pagada = document.getElementById("pagada").checked;
        actualizarImpresion();
    });

    // Botón para agregar una línea a la factura
    let boton2 = document.getElementById("agregarLinea");
    boton2.addEventListener("click", function (event) {
        event.preventDefault(); // Evita la recarga de la página
        let concepto = document.getElementById("concepto").value;
        let cantidad = parseFloat(document.getElementById("cantidad").value);
        let precio = parseFloat(document.getElementById("precio").value);

        if (concepto && cantidad > 0 && precio > 0) {
            factura.agregarLinea(concepto, cantidad, precio);
            actualizarImpresion();
        } else {
            alert("Por favor, completa todos los campos de la línea correctamente.");
        }
    });

    // Botón para eliminar la última línea de la factura
    let boton3 = document.getElementById("eliminarLinea");
    boton3.addEventListener("click", function (event) {
        event.preventDefault(); // Evita la recarga de la página
        if (factura.lineas.length > 0) {
            factura.eliminarLinea();
            actualizarImpresion();
        } else {
            alert("No hay líneas para eliminar.");
        }
    });

    // Función para actualizar la impresión de la factura
    function actualizarImpresion() {
        const listaFacturas = document.getElementById("listaFacturas");
        listaFacturas.innerHTML = factura.imprimirFactura();
    }
});