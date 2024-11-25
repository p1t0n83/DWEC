class Factura {
    constructor(clienteNIF, fecha, hora, pagada) {
        this.clienteNIF = clienteNIF;
        this.fecha = fecha;
        this.hora = hora;
        this.pagada = pagada;
        this.lineas = [];
    }

    // Obtener el importe total
    get importeTotal() {
        return this.lineas.reduce((total, linea) => total + linea.precioUnitario * linea.cantidad, 0);
    }

    // Obtener el número de artículos
    get numeroArticulos() {
        return this.lineas.length;
    }

    // Imprimir la factura
    imprimirFactura() {
        let facturaStr = `NIF del cliente: ${this.clienteNIF}\nFecha: ${this.fecha}\nHora: ${this.hora}\nPagada: ${this.pagada ? "Sí" : "No"}\n`;
        facturaStr += `Líneas de factura:\n`;
        this.lineas.forEach((linea, index) => {
            facturaStr += `Línea ${index + 1}: ${linea.imprimir()}\n`;
        });
        facturaStr += `Total: ${this.importeTotal}€\nArtículos: ${this.numeroArticulos}`;
        document.getElementById('impresion').textContent = facturaStr;
    }

    // Agregar una línea a la factura
    agregarLinea(concepto, cantidad, precioUnitario) {
        this.lineas.push(new Linea(concepto, cantidad, precioUnitario));
        this.imprimirFactura();
    }

    // Eliminar la última línea de la factura
    eliminarLinea() {
        this.lineas.pop();
        this.imprimirFactura();
    }
}

class Linea {
    constructor(concepto, cantidad, precioUnitario) {
        this.concepto = concepto;
        this.cantidad = cantidad;
        this.precioUnitario = precioUnitario;
    }

    imprimir() {
        return `Concepto: ${this.concepto}, Cantidad: ${this.cantidad}, Precio unitario: ${this.precioUnitario}€`;
    }
}

class Utilidades {
    static serializarFactura(factura) {
        return JSON.stringify(factura);
    }

    static deserializarFactura(facturaJSON) {
        const data = JSON.parse(facturaJSON);
        const factura = new Factura(data.clienteNIF, data.fecha, data.hora, data.pagada);
        data.lineas.forEach(linea => factura.agregarLinea(linea.concepto, linea.cantidad, linea.precioUnitario));
        return factura;
    }
}

const factura = new Factura("", "", "", false);

window.addEventListener('load', () => {
    document.getElementById('actualizar').addEventListener('click', (e) => {
        e.preventDefault();
        const clienteNIF = document.getElementById('NIF').value;
        const fecha = document.getElementById('fecha').value;
        const hora = document.getElementById('hora').value;
        const pagada = document.getElementById('pagada').checked;
        factura.clienteNIF = clienteNIF;
        factura.fecha = fecha;
        factura.hora = hora;
        factura.pagada = pagada;
        factura.imprimirFactura();
    });

    document.getElementById('agregarLinea').addEventListener('click', (e) => {
        e.preventDefault();
        const concepto = document.getElementById('concepto').value;
        const cantidad = parseInt(document.getElementById('cantidad').value);
        const precio = parseFloat(document.getElementById('precio').value);
        if (concepto && !isNaN(cantidad) && !isNaN(precio)) {
            factura.agregarLinea(concepto, cantidad, precio);
        }
    });

    document.getElementById('serializarJSON').addEventListener('click', (e) => {
        e.preventDefault();
        const serializado = Utilidades.serializarFactura(factura);
        document.getElementById('serializar').value = serializado;
    });

    document.getElementById('deserializarJSON').addEventListener('click', (e) => {
        e.preventDefault();
        const jsonInput = document.getElementById('deserializar').value;
        const deserializado = Utilidades.deserializarFactura(jsonInput);
        factura.clienteNIF = deserializado.clienteNIF;
        factura.fecha = deserializado.fecha;
        factura.hora = deserializado.hora;
        factura.pagada = deserializado.pagada;
        factura.lineas = deserializado.lineas;
        factura.imprimirFactura();
    });

    document.getElementById('eliminarLinea').addEventListener('click', (e) => {
        e.preventDefault();
        factura.eliminarLinea();
    });
});
