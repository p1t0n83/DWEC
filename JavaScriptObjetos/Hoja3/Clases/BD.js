//ponemos export para que se puedan crear objetos de esta clase en otros ficheros
export class BD {
    // # hace nuestras variables privadas
    #vehiculos = [];
    #reparaciones = [];
    #siguienteVehiculoId = 1;
    #siguienteReparacionId = 1;
    //constructor al que le pasamos los vehiculos y las reparaciones iniciales por parametros asi como instanciamos los siguientes id 
    constructor(vehiculosIniciales = [], reparacionesIniciales = []) {
        this.#vehiculos = [...vehiculosIniciales];
        this.#reparaciones = [...reparacionesIniciales];
        this.#siguienteVehiculoId = vehiculosIniciales.length + 1;
        this.#siguienteReparacionId = reparacionesIniciales.length + 1;
    }

    //metodo para obtener todos los vehiculos,los retorna
    obtenerVehiculos() {
        return this.#vehiculos;
    }

    //metodo para obtener un vehiculo mediante un filtro que puede ser vehiculoId,matricula y telefono
    obtenerVehiculo(filtro = 'matricula', valor = '') {
        return this.#vehiculos.find(veh => veh[filtro] === valor);
    }

    //creamos un vehiculo, pasado este por parametro
    crearVehiculo(vehiculo) {
        vehiculo.id = this.#siguienteVehiculoId++;
        this.#vehiculos.push(vehiculo);
        return vehiculo;
    }

    //borramos un vehiculo segun el id pasado por parametro
    borrarVehiculo(vehiculoId) {
        //buscamos el vehiculo a borrar por su Id gracias a filter
        let vehiculoBorrar = this.#vehiculos.filter(vehiculoId);
        //sacamos su posicion del array con indexOf,el 0 para indicar por donde empieza 
        let vehiculoIndex = this.#vehiculos.indexOf(vehiculoBorrar, 0);
        //el objeto que se encuentre en la posicion dada lo dejamos a null
        this.#vehiculos[vehiculoIndex] = null;
        //y ahora con un mapa pasamos los datos de vuelta al array, buscando los que no estan vacios
        this.#vehiculos = this.#vehiculos.map(vehiculo => vehiculo !== null);
    }

    //obtenemos las reparaciones que tengan el mismo valor que le pasemos,el filtro puede ser Fecha,Pagado y Terminado
    obtenerReparaciones(filtro = null, valor = null) {
        //si el filtro no se encuentra, retorna todo
        if (!filtro) return this.#reparaciones;
        //si el filtro existe empieza la busqueda con un filter
        return this.#reparaciones.filter(reparacion => reparacion[filtro] === valor);
    }

    //buscamos una reparacion dado el id
    obtenerReparacion(reparacionId) {
        return this.#reparaciones.find(rep => rep.id === reparacionId);
    }

    //creamos una reparacion pasandole el id del vehiculo y una reparacion sin id
    crearReparacion(vehiculoId, reparacion) {
        reparacion.id = this.#siguienteReparacionId++;
        reparacion.vehiculoId = vehiculoId;
        this.#reparaciones.push(reparacion);
        return reparacion;
    }

    borrarReparacion(reparacionId) {
        //buscamos el vehiculo a borrar por su Id gracias a filter
        let reparacionBorrar = this.#reparaciones.filter(reparacionId);
        //sacamos su posicion del array con indexOf,el 0 para indicar por donde empieza 
        let reparacionIndex = this.#reparaciones.indexOf(reparacionBorrar, 0);
        //el objeto que se encuentre en la posicion dada lo dejamos a null
        this.#reparaciones[reparacionIndex] = null;
        //y ahora con un mapa pasamos los datos de vuelta al array, buscando los que no estan vacios
        this.#reparaciones = this.#reparaciones.map(reparacion => reparacion !== null);
    }
}
