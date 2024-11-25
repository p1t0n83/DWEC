//clase para gestionar los trabajos que se incluyen en cada reparacion
class trabajo {
    // constructor con los parametros de trabajo por defecto
    constructor(concepto = "", precioUnitario = 0, cantidad = 0, totalTrabajo = 0) {
        this.concepto = concepto;
        this.precioUnitario = precioUnitario;
        this.cantidad = cantidad;
        this.totalTrabajo = totalTrabajo;
    }
}