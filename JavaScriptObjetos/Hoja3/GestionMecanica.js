//Clase donde manejaremos el html de la pagina principal y manejaremos las listas delos objetos que creemos
//import para poder crear objetos de la clase que maneja la base de datos
import { BD } from './Clases/BD.js';
//import para poder usar los datos de la base de datos
import datosTaller from './datos-taller.js';
//export para que pueda usarse en otros ficheros
export class GestionMecanica {
    //variables privados
    #clienteBD;
    #contenedor;
    //constructor en el que inicializamos el objeto de la clase que maneja la base de datos con los datos de esta.
    constructor() {
        this.#clienteBD = new BD(datosTaller.vehiculos, datosTaller.reparaciones);
        this.#contenedor = "";
    }

    //metodo para iniciar la aplicacion, este metodo se le pasa por parametro el id del contenedor donde queremos meter el codigo
    iniciarApp(selector) {
        //contenido almacena el html 
        const contenido = document.querySelector(selector);
        //si no existe contenido, no se inicia la aplicacion
        if (!contenido) {
            console.error("No se pudo iniciar la aplicación: contenedor no encontrado.");
            return;
        } else {
            //si existe se le mete a contenedor
            this.#contenedor = contenido;
            //se usa el metodo renderizar base que es el que genera el innerHTML 
            this.#renderizarBase();
        }
    }

    //este es el metodo que genera el innerHTML base, el de la lista
    #renderizarBase() {
        //luego se genera el HTML base (el de la lista) y se muestra 
        this.#contenedor.innerHTML = this.#generaHTMLBase();
        this.#asignarEventosBase();
    }

    //asignar Eventos base es el encargado de gestionar las interacciones con el menu principal 
    #asignarEventosBase() {
        //tras esto con un query selector capturamos cualquier contacto con los botones que se encuentren dentro del nav de HTML base
        document.querySelectorAll('nav button').forEach(boton => {
            //luego por cada boton se mira cual a sido pulsado, para mostrar la seccion de ese 
            boton.addEventListener('click', (e) => {
                //ahora creamos una constante que va a guardar el data-seccion que corresponda al boton pulsado
                const seccion = e.target.dataset.seccion;
                //el data-seccion guardado anteriormente es pasado por parametro a mostrar seccion
                this.#mostrarSeccion(seccion);
            });
        });
        // Evento para capturar el formulario de creación de vehículo
        document.querySelector("#formNuevoVehiculo")?.addEventListener('submit', (e) => {
            e.preventDefault();  // Prevenir envío de formulario por defecto
            this.#crearVehiculo();
        });


        // Evento global para capturar clicks en botones de las listas (ver o borrar) y ver reparaciones
        document.addEventListener("click", (e) => {
            const accion = e.target.dataset.accion; // "ver" o "borrar" y "reparaciones"
            const id = e.target.dataset.id; // ID asociado al botón pulsado

            if (accion == "ver") {
                // Llamamos a mostrarSeccion y pasamos el ID
                this.#mostrarSeccion("ver", id ? parseInt(id) : null);
            }

            if (accion == "borrar") {
                // Aquí puedes implementar la lógica para borrar un vehículo
                this.#mostrarSeccion("borrar", id ? parseInt(id) : null);
            }

            if (accion == "reparaciones") {
                this.#mostrarSeccion("reparaciones", id ? parseInt(id) : null);
            }
        });


    }

    //este metodo dependiendo de la data-seccion que haya sido pasada por parametro generara un html diferente
    #mostrarSeccion(seccion, id = null) {
        //se mira si se ha pulsado un boton
        const resultados = document.querySelector("#resultados");
        switch (seccion) {
            //en caso de que sea inicio
            case "inicio":
                resultados.innerHTML = this.#generarHTMLInicio();
                break;
            //vehiculos
            case "vehiculos":
                resultados.innerHTML = this.#generarHTMLVehiculos(this.#clienteBD.obtenerVehiculos());
                break;
            //para el de ver y crear vehiculo
            case "ver":
                resultados.innerHTML = this.#generarHTMLVehiculo(id);
                break;
            case "borrar":
                this.#borrarVehiculo(id);
                break;
            case "reparaciones":
                this.#verReparaciones(id);
            default:
                resultados.innerHTML = `<p>Sección no implementada: ${seccion}</p>`;
        }
    }

    #generaHTMLBase() {
        return `
        <header>
            <nav>
                <ul>
                    <li><button data-seccion="inicio">Inicio</button></li>
                    <li><button data-seccion="vehiculos">Listado Vehículos</button></li>
                    <li><button data-seccion="no-terminadas">No Terminadas</button></li>
                    <li><button data-seccion="no-pagadas">No Pagadas</button></li>
                    <li><button data-seccion="presupuestos">Presupuestos</button></li>
                </ul>
            </nav>
            <section id="resultados"></section>
            </header>
        `;
    }



    #generarHTMLInicio() {
        return `
            <h1>Inicio</h1>
            <form id="buscador">
                <input type="text" placeholder="Matrícula o Teléfono" name="criterio" />
                <button type="submit">Buscar</button>
            </form>
            <div id="resultados-busqueda"></div>
        `;
    }

    #generarHTMLVehiculos(vehiculos) {
        return `
            <h1>Listado de Vehículos</h1>
            <button data-accion="ver" data-id=null >Crear Nuevo Vehículo</button>
            <ul>
                ${vehiculos.map(veh => `
                    <li>
                        ${veh.matricula} - ${veh.propietario.nombre}
                ${console.log(veh.vehiculoId)}
                        <button data-accion="ver" data-id="${veh.vehiculoId}">Ver</button>
                        <button data-accion="borrar" data-id="${veh.id}">Borrar</button>
                    </li>`).join('')}
            </ul>
        `;
    }

    #generarHTMLVehiculo(vehiculoid = null) {
        const vehiculos = datosTaller.vehiculos;
        const vehiculo = vehiculos.find(veh => veh.vehiculoId == vehiculoid);
        if (!vehiculoid) {
            return `
            <h1>Registrar un nuevo vehiculo</h1>
            <form id="formNuevoVehiculo">
                <label for="matricula">Matrícula:</label>
                <input type="text" id="matricula" name="matricula" required><br>

                <label for="marca">Marca:</label>
                <input type="text" id="marca" name="marca" required><br>

                <label for="modelo">Modelo:</label>
                <input type="text" id="modelo" name="modelo" required><br>

                <label for="año">Año:</label>
                <input type="number" id="año" name="año" required><br>

                <label for="motor">Motor:</label>
                <input type="text" id="motor" name="motor" required><br>

                <h2>Propietario</h2>

                <label for="nombrePropietario">Nombre:</label>
                <input type="text" id="nombrePropietario" name="nombrePropietario" required><br>

                <label for="telefonoPropietario">Teléfono:</label>
                <input type="number" id="telefonoPropietario" name="telefonoPropietario" required><br>

                <label for="emailPropietario">Email:</label>
                <input type="email" id="emailPropietario" name="emailPropietario" required><br>

                <button type="submit">Guardar Vehículo</button>
            </form>`;
        } else {
            return `
            <h1>Propiedades del vehiculo</h1>
            <ul>
            <li>Matricula:${vehiculo.matricula} - Marca:${vehiculo.marca} - Modelo:${vehiculo.modelo} - Año:${vehiculo.año} - Motor:${vehiculo.motor}</li>
            <h2>Propiedades del propietario</h2>
            <li>Nombre${vehiculo.propietario.nombre} - Telefono:${vehiculo.propietario.telefono} - Email:${vehiculo.propietario.email}</li>
            </ul>
            <button type="submit" data-accion="reparaciones" data-id="${vehiculo.vehiculoId}">Ver reparaciones</button>`;
        }
    }

    // Crear un nuevo vehículo
    #crearVehiculo() {
        const matricula = document.querySelector("#matricula").value;
        const marca = document.querySelector("#marca").value;
        const modelo = document.querySelector("#modelo").value;
        const año = document.querySelector("#año").value;
        const motor = document.querySelector("#motor").value;
        const nombrePropietario = document.querySelector("#nombrePropietario").value;
        const telefonoPropietario = document.querySelector("#telefonoPropietario").value;
        const emailPropietario = document.querySelector("#emailPropietario").value;

        // Crear un nuevo objeto Vehiculo
        const nuevoVehiculo = new Vehiculo(
            null, // El ID será autoincremental, lo gestionamos en la base de datos
            matricula,
            marca,
            modelo,
            año,
            motor,
            {
                nombre: nombrePropietario,
                telefono: telefonoPropietario,
                email: emailPropietario
            }
        );

        // Añadir el nuevo vehículo a la base de datos
        this.#clienteBD.crearVehiculo(nuevoVehiculo);

        // Volver a mostrar el listado de vehículos
        this.#mostrarSeccion("vehiculos");
    }

    // Borrar vehículo
    #borrarVehiculo(id) {
        if (!id) {
            return "No se pudo borrar el vehiculo, id no encontrado";
        } else {
            this.#clienteBD.borrarVehiculo(id);
        }

    }

    #verReparaciones(vehiculoId) {
        const vehiculo = datosTaller.vehiculos.find(veh => veh.vehiculoId === vehiculoId);
        const reparaciones = datosTaller.reparaciones.filter(reparacion => reparacion.vehiculoId === vehiculoId);

        return `
        <h1>Propiedades del vehículo</h1>
        <ul>
            <li>Matricula: ${vehiculo.matricula} - Marca: ${vehiculo.marca} - Modelo: ${vehiculo.modelo} - Año: ${vehiculo.año} - Motor: ${vehiculo.motor}</li>
            <h2>Propiedades del propietario</h2>
            <li>Nombre: ${vehiculo.propietario.nombre} - Teléfono: ${vehiculo.propietario.telefono} - Email: ${vehiculo.propietario.email}</li>
        </ul>
        <h2>Reparaciones</h2>
        ${reparaciones.map(reparacion => `
            <div>
                <h3>Reparación ID: ${reparacion.reparacionId}</h3>
                <p><strong>Descripción:</strong> ${reparacion.descripcion}</p>
                <p><strong>Fecha:</strong> ${reparacion.fecha}</p>
                <p><strong>Kilómetros:</strong> ${reparacion.kilometros}</p>
                <p><strong>Presupuesto:</strong> ${reparacion.presupuesto ? 'Sí' : 'No'}</p>
                <p><strong>Aprobada:</strong> ${reparacion.aprobada ? 'Sí' : 'No'}</p>
                <p><strong>Pagado:</strong> ${reparacion.pagado ? 'Sí' : 'No'}</p>
                <p><strong>Terminado:</strong> ${reparacion.terminado ? 'Sí' : 'No'}</p>
                <h4>Trabajos Realizados:</h4>
                <ul>
                    ${reparacion.trabajos.map(trabajo => `
                        <li>${trabajo.concepto} - Precio Unitario: ${trabajo.precioUnitario}€ - Cantidad: ${trabajo.cantidad} - Total: ${trabajo.totalTrabajo}€</li>
                    `).join('')}
                </ul>
            </div>
        `).join('')}
    `;
    }

}



