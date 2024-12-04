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
    eliminarVehiculo(vehiculoId) {
        // Encuentra el índice del vehículo con el id dado
        const index = this.#vehiculos.findIndex(veh => veh.id === vehiculoId);
        if (index !== -1) {
            // Elimina el vehículo del array
            this.#vehiculos.splice(index, 1);

            // Elimina todas las reparaciones asociadas al vehículo
            this.#reparaciones = this.#reparaciones.filter(rep => rep.vehiculoId !== vehiculoId);
        }
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

    eliminarReparacion(reparacionId) {
        // Encuentra el índice de la reparación con el id dado
        const index = this.#reparaciones.findIndex(rep => rep.id === reparacionId);
        if (index !== -1) {
            // Si existe, elimina el elemento
            this.#reparaciones.splice(index, 1);
        }
    }

     // Método para buscar vehículos por matrícula o número
     buscarVehiculo(criterio) {
        // Filtra los vehículos que coincidan con el criterio proporcionado en la matrícula o el número
        return this.#vehiculos.filter(vehiculo => 
            vehiculo.matricula.includes(criterio) || String(vehiculo.numero).includes(criterio)
        );
    }
}
