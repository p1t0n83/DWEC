import datos from './Clases/datos.js';
/*import { generarHTMLCreacion, generarHTMLEdicion, generarHTMLListadoPrestamos, generarHTMLPropiedades } from './Clases/Libro.js';
import { generarHTMLCreacion, generarHTMLEdicion, generarHTMLPropiedades } from './Clases/Autor.js';
import { generarHTMLCreacion, generarHTMLEdicion } from './Clases/Biblioteca.js';*/


//Necesito pasar esto a una clase

const gestorBiblioteca = (() => {

    //Necesito poner este privado: #  <- delante del nombre para ser privado
    /*const datos = (() => {
        let dato = JSON.parse(datos);

        let JSONLibros = dato.libros;
        let libros = [];

        JSONLibros.forEach(element => {
            let nuevoLibro = new Libro(element.libroId, element.titulo, element.ISBN, element.autorId, element.bibliotecaId);
            if (!element.prestamos) {
                element.prestamos.forEach(elemento => {
                    nuevoLibro.prestamos.push([elemento.fechaPrestamo, elemento.fechaDevolucion]);
                });
            }
            libros.push(nuevoLibro);
        });

        let JSONAutor = dato.autor;
        let autor = [];
        JSONAutor.forEach(element => {
            let nuevoAutor = new Autor(element.autorId, element.nombre, element.nacionalidad, element.biografia);
            if (!element.libros) {
                element.libros.forEach(elemento => {
                    nuevoAutor.libros.push(elemento);
                });
            }
            autor.push(nuevoAutor);
        });

        let JSONBiblioteca = dato.biblioteca;
        let biblioteca = [];
        JSONBiblioteca.forEach(element => {
            let nuevaBiblioteca = new Biblioteca(element.bibliotecaId, element.nombre, element.ubicacion);
            if (!element.libros) {
                libros.forEach(elemento => {
                    if (elemento.bibliotecaId == nuevaBiblioteca.bibliotecaId) {
                        nuevaBiblioteca.libros.push(elemento);
                    }
                });
            }
        });

    return { libros, autor, biblioteca };

    });
    */
    const app = document.getElementById('app');

    function inicializar() {
        document.querySelectorAll('nav ul li').forEach(item => {
            item.addEventListener('click', (e) => {
                const entidad = e.target.getAttribute('data-entidad');
                const accion = e.target.getAttribute('data-accion');
                manejarEntidad(entidad, accion);
            });
        });
    }

    // Manejador entidad
    function manejarEntidad(entidad, accion) {
        switch (entidad) {
            case 'libros':
                manejarLibros(accion);
                break;
            case 'autores':
                manejarAutores(accion);
                break;
            case 'bibliotecas':
                manejarBibliotecas(accion);
                break;
            default:
                app.innerHTML = '<p>Entidad no reconocida</p>';
        }
    }

    function manejarLibros(accion) {
        switch (accion) {
            case 'listar':
                listarLibros();
                break;
            case 'crear':
                mostrarFormularioLibro();
                break;
            default:
                app.innerHTML = '<p>Acción no reconocida para libros</p>';
        }
    }

    function manejarAutores(accion) {
        switch (accion) {
            case 'listar':
                listarAutores();
                break;
            case 'crear':
                mostrarFormularioAutor();
                break;
            default:
                app.innerHTML = '<p>Acción no reconocida para autores</p>';
        }
    }

    function manejarBibliotecas(accion) {
        switch (accion) {
            case 'listar':
                listarBibliotecas();
                break;
            case 'crear':
                mostrarFormularioBiblioteca();
                break;
            default:
                app.innerHTML = '<p>Acción no reconocida para bibliotecas</p>';
        }
    }

    function listarLibros() {
        app.innerHTML = `<h2>Listado de Libros</h2>`;

        const botonCrear = document.createElement('button');
        botonCrear.textContent = 'Crear Nuevo Libro';
        botonCrear.setAttribute('data-entidad', 'libros');
        botonCrear.setAttribute('data-accion', 'crear');
        app.appendChild(botonCrear);

        const lista = document.createElement('ul');

        datos.libros.forEach(libro => {
            const item = document.createElement('li');

            const titulo = document.createElement('strong');
            titulo.textContent = `${libro.titulo} (ISBN: ${libro.ISBN})`;
            item.appendChild(titulo);

            const botonVer = crearBoton('Ver', 'libros', 'ver', libro.libroId);
            const botonEditar = crearBoton('Editar', 'libros', 'editar', libro.libroId);
            const botonBorrar = crearBoton('Borrar', 'libros', 'borrar', libro.libroId);

            item.appendChild(botonVer);
            item.appendChild(botonEditar);
            item.appendChild(botonBorrar);

            lista.appendChild(item);
        });

        app.appendChild(lista);
    }

    function listarAutores() {
        app.innerHTML = `<h2>Listado de Autores</h2>`;

        const botonCrear = document.createElement('button');
        botonCrear.textContent = 'Crear Nuevo Autor';
        botonCrear.setAttribute('data-entidad', 'autores');
        botonCrear.setAttribute('data-accion', 'crear');
        app.appendChild(botonCrear);

        const lista = document.createElement('ul');

        datos.autores.forEach(autor => {
            const item = document.createElement('li');
            const nombre = document.createElement('strong');
            nombre.textContent = `${autor.nombre} (${autor.nacionalidad})`;
            item.appendChild(nombre);

            const botonVer = crearBoton('Ver', 'autores', 'ver', autor.autorId);
            const botonEditar = crearBoton('Editar', 'autores', 'editar', autor.autorId);
            const botonBorrar = crearBoton('Borrar', 'autores', 'borrar', autor.autorId);

            item.appendChild(botonVer);
            item.appendChild(botonEditar);
            item.appendChild(botonBorrar);

            lista.appendChild(item);
        });

        app.appendChild(lista);
    }

    function listarBibliotecas() {
        app.innerHTML = `<h2>Listado de Bibliotecas</h2>`;

        const botonCrear = document.createElement('button');
        botonCrear.textContent = 'Crear Nueva Biblioteca';
        botonCrear.setAttribute('data-entidad', 'bibliotecas');
        botonCrear.setAttribute('data-accion', 'crear');
        app.appendChild(botonCrear);

        const lista = document.createElement('ul');

        datos.bibliotecas.forEach(biblioteca => {
            const item = document.createElement('li');

            const nombre = document.createElement('strong');
            nombre.textContent = `${biblioteca.nombre} (${biblioteca.ubicacion})`;
            item.appendChild(nombre);

            const botonVer = crearBoton('Ver', 'bibliotecas', 'ver', biblioteca.bibliotecaId);
            const botonEditar = crearBoton('Editar', 'bibliotecas', 'editar', biblioteca.bibliotecaId);
            const botonBorrar = crearBoton('Borrar', 'bibliotecas', 'borrar', biblioteca.bibliotecaId);

            item.appendChild(botonVer);
            item.appendChild(botonEditar);
            item.appendChild(botonBorrar);

            lista.appendChild(item);
        });

        app.appendChild(lista);
    }

    function crearBoton(texto, entidad, accion, id) {
        const boton = document.createElement('button');
        boton.textContent = texto;
        boton.setAttribute('data-entidad', entidad);
        boton.setAttribute('data-accion', accion);
        boton.setAttribute('data-id', id);
        return boton;
    }

    return { inicializar };
})();
let datosJSON = JSON.parse(datos);
let JSONLibros = datosJSON['libros'];
let array_Libros = [];
console.log(JSONLibros);
//document.addEventListener('DOMContentLoaded', gestorBiblioteca.inicializar);
