'use strict';
import Linea from './Linea.js';
class Factura {
    constructor(clienteNIF, fecha, hora, pagada, lineas) {
        this.clienteNIF = clienteNIF;
        this.fecha = fecha;
        this.hora = hora;
        this.pagada = pagada;
        this.lineas = lineas;
    }

    get importeTotal() {
        let importe = 0;
        this.lineas.forEach(linea => {
            importe += (linea.cantidad * linea.precioUnitario);
        });
        return importe;
    }

    get numeroArticulos() {
        let articulos = 0;
        this.lineas.forEach(linea => {
            articulos += linea.cantidad;
        });
        return articulos;
    }

    imprimirFactura() {
        let impresion = `
            <div>
                <p><strong>NIF del cliente:</strong> ${this.clienteNIF}</p>
                <p><strong>Fecha:</strong> ${this.fecha}</p>
                <p><strong>Hora:</strong> ${this.hora}</p>
                <p><strong>Pagada:</strong> ${this.pagada ? "Sí" : "No"}</p>
                <h3>Lineas:</h3>
                <ul><div class="lineas">
        `;
    
        this.lineas.forEach(linea => {
            impresion += `
                <li>
                    <p><strong>Concepto:</strong> ${linea.concepto}</p>
                    <p><strong>Cantidad:</strong> ${linea.cantidad}</p>
                    <p><strong>Precio unitario:</strong> ${linea.precioUnitario}</p>
                </li>
            `;
        });
    
        impresion += `
                </div></ul>
                <p><strong>Total Artículos:</strong> ${this.numeroArticulos}</p>
                <p><strong>Importe Total:</strong> ${this.importeTotal.toFixed(2)} €</p>
            </div>
        `;
    
        return impresion;
    }

    agregarLinea(concepto, cantidad, precio) {
        let linea = new Linea(concepto, cantidad, precio);
        if (this.lineas.push(linea)) {
            return true;
        } else {
            return false;
        }
    }

    eliminarLinea() {
        if (this.lineas.pop()) {
            return true;
        } else {
            return false;
        }
    }
}

export default Factura;