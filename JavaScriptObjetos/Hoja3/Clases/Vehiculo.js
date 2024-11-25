//clase vehiculo que usaremos como base para poder crear objetos de esta y meterlo en la base de datos
class Vehiculo {
    //constructor con los parametros por defecto de vehiculo
    constructor(vehiculoId = 0, matricula = "", marca = "", modelo = "", anio = "", motor = "", propietario = null) {
        this.vehiculoId = vehiculoId;
        this.matricula = matricula;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.motor = motor;
        this.propietario = propietario;
    }
}