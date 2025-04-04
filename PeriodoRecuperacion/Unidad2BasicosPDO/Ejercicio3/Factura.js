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
        let impresion = `NIF del cliente: ${this.clienteNIF}.\n Fecha: ${this.fecha}.\n Hora: ${this.hora}.\n Pagada: ${this.pagada == true ? "Si" : "No"}\n Lineas:\n`;
        this.lineas.forEach(linea => {
            impresion = `\n Informacion de la linea.\n Concepto: ${linea.concepto}. \n Cantidad: ${linea.cantidad}. \n Precio unitario: ${linea.precioUnitario} \n`;
        });
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