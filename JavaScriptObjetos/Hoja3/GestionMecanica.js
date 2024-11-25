//Clase donde manejaremos el html de la pagina principal y manejaremos las listas delos objetos que creemos
//import para poder crear objetos de la clase que maneja la base de datos
import { BD } from './clases/BD.js';
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
    }

    //este metodo dependiendo de la data-seccion que haya sido pasada por parametro generara un html diferente
    #mostrarSeccion(seccion) {
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
            //me faltan los casos de reparaciones
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
            <button id="crear-vehiculo">Crear Nuevo Vehículo</button>
            <ul>
                ${vehiculos.map(veh => `
                    <li>
                        ${veh.matricula} - ${veh.propietario.nombre}
                        <button data-accion="ver" data-id="${veh.id}">Ver</button>
                        <button data-accion="borrar" data-id="${veh.id}">Borrar</button>
                    </li>`).join('')}
            </ul>
        `;
    }
}
