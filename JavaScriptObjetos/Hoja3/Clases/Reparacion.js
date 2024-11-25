//clase reparacion para gestionar las reparaciones y luego hacer cambios en la base de datos
class Reparacion {
    // constructor con los parametros por defecto de la reparacion
    constructor(reparacionId = 0, vehiculoId = 0, descripcion = "", fecha = "", kilometros = 0, presupuesto = true, aprobada = false, pagado = false, terminada = false, trabajos = []) {
        this.reparacionId = reparacionId;
        this.vehiculoId = vehiculoId;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.kilometros = kilometros;
        this.presupuesto = presupuesto;
        this.aprobada = aprobada;
        this.pagado = pagado;
        this.terminada = terminada;
        this.trabajos = trabajos;
    }
}