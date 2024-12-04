// Clase donde manejaremos el HTML de la página principal y gestionaremos las listas de los objetos creados
// Import para poder crear objetos de la clase que maneja la base de datos
import { BD } from './Clases/BD.js';
import datosTaller from './datos-taller.js';

// Export para que pueda usarse en otros ficheros
export class GestionMecanica {
    // Variables privadas
    clienteBD;
    #contenedor;

    // Constructor en el que inicializamos el objeto de la clase que maneja la base de datos con los datos de esta.
    constructor() {
        this.clienteBD = new BD(datosTaller.vehiculos, datosTaller.reparaciones);
        this.#contenedor = null; // Inicializamos como null para validar que se asigne correctamente en iniciarApp
    }

    // Método para iniciar la aplicación, este método recibe el id del contenedor donde queremos inyectar el código
    iniciarApp(selector) {
        const contenido = document.querySelector(selector);
        if (!contenido) {
            console.error("No se pudo iniciar la aplicación: contenedor no encontrado.");
            return;
        }
        this.#contenedor = contenido;
        this.#renderizarBase();
    }

    // Método que se llama después de eliminar un vehículo o crear uno nuevo
    #actualizarVista() {
        // Genera el HTML de la lista de vehículos con los datos obtenidos
        const htmlVehiculos = this.#generarHTMLVehiculos( this.clienteBD.obtenerVehiculos());
        // Inyecta el HTML generado en el contenedor de resultados
        const resultados = document.querySelector("#resultados");
        resultados.innerHTML = htmlVehiculos;
    }



    // Este método genera el HTML base y lo inyecta en el contenedor
    #renderizarBase() {
        this.#contenedor.innerHTML = this.#generaHTMLBase();
        this.#asignarEventosBase();
    }

    // Asigna eventos al menú principal y a los formularios
    #asignarEventosBase() {
        document.querySelectorAll('nav button').forEach(boton => {
            boton.addEventListener('click', (e) => {
                const seccion = e.target.dataset.seccion;
                this.#mostrarSeccion(seccion);
            });
        });

        document.querySelector("#formNuevoVehiculo")?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.#crearVehiculo();
        });

        document.addEventListener("click", (e) => {
            const accion = e.target.dataset.accion;
            const id = e.target.dataset.id;

            if (accion === "ver" && id) {
                this.#mostrarSeccion("ver", parseInt(id));
            } else if (accion === "borrar" && id) {
                this.#borrarVehiculo(parseInt(id));
            } else if (accion === "reparaciones" && id) {
                this.#mostrarSeccion("reparaciones", parseInt(id));
            }
        });

        document.querySelector("#buscador")?.addEventListener('submit', (e) => {
            e.preventDefault();
            const criterio = document.querySelector("#buscador input[name='criterio']").value.trim();
            if (criterio) {
                this.#buscarVehiculo(criterio);
            } else {
                const resultadosBusqueda = document.querySelector("#resultados-busqueda");
                resultadosBusqueda.innerHTML = `<p>Por favor, introduce una matrícula o número para buscar.</p>`;
            }
        });
    }

    // Muestra la sección correspondiente en el contenedor de resultados
    #mostrarSeccion(seccion, id = null) {
        const resultados = document.querySelector("#resultados");
        switch (seccion) {
            case "inicio":
                resultados.innerHTML = this.#generarHTMLInicio();
                break;
            case "vehiculos":
                resultados.innerHTML = this.#generarHTMLVehiculos(this.clienteBD.obtenerVehiculos());
                break;
            case "ver":
                resultados.innerHTML = this.#generarHTMLVehiculo(id);
                break;
            case "borrar":
                this.#borrarVehiculo(id);
                break;
            case "reparaciones":
                this.#verReparaciones(id);
                break;
            default:
                resultados.innerHTML = `<p>Sección no implementada: ${seccion}</p>`;
        }
    }

    // Genera el HTML base de la aplicación
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

    // Genera el HTML para la sección de inicio
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

    // Genera el HTML para la sección de vehículos
    #generarHTMLVehiculos(vehiculos) {
        return `
            <h1>Listado de Vehículos</h1>
            <button data-accion="ver" data-id="null">Crear Nuevo Vehículo</button>
            <ul>
                ${vehiculos.map(veh => `
                    <li>
                        ${veh.matricula} - ${veh.propietario.nombre}
                        <button data-accion="ver" data-id="${veh.vehiculoId}">Ver</button>
                        <button data-accion="borrar" data-id="${veh.vehiculoId}">Borrar</button>
                    </li>`).join('')}
            </ul>
        `;
    }

    // Genera el HTML para ver o crear un vehículo
    #generarHTMLVehiculo(vehiculoId = null) {
        const vehiculo = datosTaller.vehiculos.find(veh => veh.vehiculoId === vehiculoId);
        if (!vehiculoId) {
            return `
            <h1>Registrar un nuevo vehículo</h1>
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
        } else if (vehiculo) {
            return `
            <h1>Propiedades del vehículo</h1>
            <ul>
                <li>Matricula: ${vehiculo.matricula} - Marca: ${vehiculo.marca} - Modelo: ${vehiculo.modelo} - Año: ${vehiculo.año} - Motor: ${vehiculo.motor}</li>
            </ul>
            <h2>Propiedades del propietario</h2>
            <ul>
                <li>Nombre: ${vehiculo.propietario.nombre} - Teléfono: ${vehiculo.propietario.telefono} - Email: ${vehiculo.propietario.email}</li>
            </ul>
            <button data-accion="reparaciones" data-id="${vehiculo.vehiculoId}">Ver reparaciones</button>`;
        } else {
            return `<p>Vehículo no encontrado.</p>`;
        }
    }

    // Método para crear un nuevo vehículo
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
        const nuevoVehiculo = {
            vehiculoId: Date.now(), // ID generado automáticamente
            matricula,
            marca,
            modelo,
            año,
            motor,
            propietario: {
                nombre: nombrePropietario,
                telefono: telefonoPropietario,
                email: emailPropietario,
            }
        };

        this.clienteBD.crearVehiculo(nuevoVehiculo);
        alert('Vehículo creado con éxito');
        this.#actualizarVista();
        this.#mostrarSeccion('vehiculos');
    }

    // Método para buscar un vehículo por matrícula o número
    #buscarVehiculo(criterio) {
        const resultadosBusqueda = document.querySelector("#resultados-busqueda");
        const vehiculosEncontrados = this.clienteBD.obtenerVehiculo(criterio);

        if (vehiculosEncontrados.length > 0) {
            resultadosBusqueda.innerHTML = this.#generarHTMLVehiculos(vehiculosEncontrados);
        } else {
            resultadosBusqueda.innerHTML = `<p>No se encontraron vehículos con el criterio proporcionado.</p>`;
        }
    }

    // Método para borrar un vehículo
    #borrarVehiculo(id) {
        this.clienteBD.eliminarVehiculo(id);
        alert(`Vehículo con ID ${id} borrado con éxito.`);
        this.#actualizarVista();
        this.#mostrarSeccion('vehiculos');
    }

    // Método para mostrar las reparaciones de un vehículo
    #verReparaciones(id) {
        // Llamamos al método de BD para obtener todas las reparaciones asociadas al vehículo con el ID proporcionado
        const reparaciones = this.clienteBD.obtenerReparaciones('vehiculoId', id);

        if (reparaciones.length > 0) {
            // Si se encontraron reparaciones, mostramos una alerta con la lista de reparaciones
            alert(`Reparaciones del vehículo con ID ${id}: ${JSON.stringify(reparaciones)}`);
        } else {
            // Si no se encontraron reparaciones, informamos al usuario
            alert(`No se encontraron reparaciones para el vehículo con ID ${id}.`);
        }
    }
}

