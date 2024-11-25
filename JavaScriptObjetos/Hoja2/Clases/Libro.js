class Libro {
    constructor(libroId = 0, titulo = '', ISBN = '', autorId = 0, bibliotecaId = 0, prestamos = [], estaDisponible = null) {
        this.libroId = libroId;
        this.titulo = titulo;
        this.ISBN = ISBN;
        this.autorId = autorId;
        this.bibliotecaId = bibliotecaId;
        this.prestamos = prestamos;
        this.estaDisponible = estaDisponible;
    }

    estaDisponible() {
        let disponible = false;
        if (!this.prestamos) {
            this.prestamos.forEach(element => {
                if (!element[1]) {
                    disponible = true;
                }
            });
        }
        return disponible;
    }
    /*
        generarHTMLCreacion() {
    
            const informacionLibros = JSON.parse(datos.autores);
            const informacionBibliotecas = JSON.parse(datos.bibliotecas);
    
            // Obtener el contenedor donde se insertará el formulario
            let contenedor = document.getElementById('app');
    
            // Crear el formulario
            let formulario = document.createElement('form');
    
            formulario.className = 'data-libro-creacion';
    
            // Crear el campo de título
            let labelTitulo = document.createElement('label');
            labelTitulo.setAttribute('for', 'data-titulo');
            labelTitulo.innerHTML = 'Título: ';
            let titulo = document.createElement('input');
            titulo.setAttribute('type', 'text');
            titulo.setAttribute('id', 'data-titulo');
            titulo.setAttribute('required', true);
            titulo.setAttribute('placeholder', 'Introduce el título del libro');
            formulario.appendChild(labelTitulo);
            formulario.appendChild(titulo);
            formulario.appendChild(document.createElement('br'));
    
            // Crear el campo de ISBN
            let labelISBN = document.createElement('label');
            labelISBN.setAttribute('for', 'data-isbn');
            labelISBN.innerHTML = 'ISBN: ';
            let isbn = document.createElement('input');
            isbn.setAttribute('type', 'text');
            isbn.setAttribute('id', 'data-isbn');
            isbn.setAttribute('required', true);
            isbn.setAttribute('placeholder', 'Introduce el ISBN del libro');
            formulario.appendChild(labelISBN);
            formulario.appendChild(isbn);
            formulario.appendChild(document.createElement('br'));
    
            // Crear el campo de autor
            let labelAutor = document.createElement('label');
            labelAutor.setAttribute('for', 'data-autor-libro');
            labelAutor.innerHTML = 'Autor: ';
            let autor = document.createElement('select');
            autor.setAttribute('id', 'data-autor-libro');
            autor.innerHTML = '   ';
            autor.setAttribute('value', ' ');
            formulario.appendChild(labelAutor);
            formulario.appendChild(autor);
            datos.autores.forEach(element => {
                let nombreAutor = document.createElement('option');
                nombreAutor.innerHTML = element.nombre;
                nombreAutor.setAttribute('id', element.id);  // Asignar un valor al option
                autor.appendChild(nombreAutor);
            });
            autor.setAttribute('required', true);
            formulario.appendChild(document.createElement('br'));
    
            // Crear el campo de biblioteca
            let labelBiblioteca = document.createElement('label');
            labelBiblioteca.setAttribute('for', 'data-biblioteca-libro');
            labelBiblioteca.innerHTML = 'Biblioteca: ';
            let bibliotecaLibro = document.createElement('select');
            bibliotecaLibro.innerHTML = '  ';
            bibliotecaLibro.setAttribute('id', 'data-biblioteca-libro');
            bibliotecaLibro.setAttribute('value', ' ');
            formulario.appendChild(labelBiblioteca);
            formulario.appendChild(bibliotecaLibro);
            datos.bibliotecas.forEach(element => {
                let nombreBiblioteca = document.createElement('option');
                nombreBiblioteca.innerHTML = element.nombre;
                nombreBiblioteca.setAttribute('value', element.id);  // Asignar un valor al option
                bibliotecaLibro.appendChild(nombreBiblioteca);
            });
            formulario.appendChild(document.createElement('br'));
    
            // Crear el botón de envío
            let boton = document.createElement('input');
            boton.setAttribute('type', 'submit');
            boton.setAttribute('id', 'data-submit-libro');
            boton.setAttribute('value', 'Crear libro');
            formulario.appendChild(boton);
    
            contenedor.appendChild(formulario);
        }
    
        generarHTMLPropiedades() {
            let contenedor = document.getElementById('app');
    
            let formulario = document.createElement('form');
            formulario.className = 'data-libro-propiedades';
    
            let parrafo = document.createElement('p');
            parrafo.innerHTML = `----- Detalles del libro -----<br>`;
            parrafo.innerHTML += `Id del libro: ${this.libroId} <br>`;
            parrafo.innerHTML += `Titulo: ${this.titulo} <br>`;
            parrafo.innerHTML += `Id del libro: ${this.libroId} <br>`;
            parrafo.innerHTML += `Id del libro: ${this.libroId} <br>`;
    
            formulario.appendChild(parrafo);
    
            let menu = document.createElement('ul');
    
            let editarLibro = document.createElement('li');
            editarLibro.innerHTML = 'Editar';
            editarLibro.setAttribute('id', 'data-editar-libro');
            menu.appendChild(editarLibro);
    
            let borrarLibro = document.createElement('li');
            borrarLibro.innerHTML = 'Eliminar';
            borrarLibro.setAttribute('id', 'data-borrar-libro');
            menu.appendChild(borrarLibro);
    
            let listarPrestamosLibro = document.createElement('li');
            listarPrestamosLibro.innerHTML = 'Listar prestamos';
            listarPrestamosLibro.setAttribute('id', 'data-listar-prestamos-libro');
            menu.appendChild(listarPrestamosLibro);
    
            let crearPrestamoLibro = document.createElement('li');
            crearPrestamoLibro.innerHTML = 'Crear prestamo';
            crearPrestamoLibro.setAttribute('id', 'data-crear-prestamo-libro');
            menu.appendChild(crearPrestamoLibro);
    
            let devolverPrestamoLibro = document.createElement('li');
            devolverPrestamoLibro.innerHTML = 'Devolver prestamo';
            devolverPrestamoLibro.setAttribute('id', 'data-devolver-prestamo-libro');
            menu.appendChild(devolverPrestamoLibro);
    
            formulario.appendChild(menu);
    
        }
    
        generarHTMLEdicion() {
            let contenedor = document.getElementById('app');
    
            let formulario = document.createElement('form');
            formulario.className = 'data-libro-edicion';
    
            let labelTitulo = document.createElement('label');
            labelTitulo.setAttribute('for', 'data-titulo');
            labelTitulo.innerHTML = 'Titulo: ';
            let titulo = document.createElement('input');
            titulo.setAttribute('type', 'text');
            titulo.setAttribute('id', 'data-titulo');
            titulo.setAttribute('value', this.titulo);
            titulo.setAttribute('required', true);
            formulario.appendChild(labelTitulo);
            formulario.appendChild(titulo);
            formulario.appendChild(document.createElement('br'));
    
            let labelISBN = document.createElement('label');
            labelTitulo.setAttribute('for', 'data-titulo');
            labelTitulo.innerHTML = 'Titulo: ';
            let titulo = document.createElement('input');
            titulo.setAttribute('type', 'text');
            titulo.setAttribute('id', 'data-titulo');
            titulo.setAttribute('value', this.titulo);
            titulo.setAttribute('required', true);
            formulario.appendChild(labelTitulo);
            formulario.appendChild(titulo);
            formulario.appendChild(document.createElement('br'));
    
    
        }
    */

    generarHTMLCreacion() {
        return `
            <form data-accion="crear" data-entidad="libro">
                <label for="nuevo-libro_titulo">Título: </label>
                <input type="text" id="nuevo-libro_titulo" placeholder="Introduce el título del libro" required>
                
                <label for="nuevo-libro_isbn">ISBN: </label>
                <input type="text" id="nuevo-libro_isbn" placeholder="Introduce el ISBN del libro" required>
                
                <label for="nuevo-libro_autor">Autor: </label>
                <input type="text" id="nuevo-libro_autor" placeholder="Introduce el autor del libro" required>
                
                <label for="nuevo-libro_biblioteca">Biblioteca: </label>
                <input type="text" id="nuevo-libro_biblioteca" placeholder="Introduce la biblioteca" required>
                
                <input type="checkbox" id="nuevo-libro_disponible">
                <label for="nuevo-libro_disponible">Disponible</label>

                <input type="submit" id="guardar_libro" value="Guardar libro">
            </form>
    `;
    }

    generarHTMLPropiedades() {
        return `
        <form data-accion="ver" data-entidad="libro">
            <label for="data-libro_titulo">Titulo: </label>
            <input type="text" id="data-libro_titulo" placeholder="Introduce el titulo del libro" value="${this.titulo}" disabled >
            
            <label for="data-libro_isbn">ISBN: </label>
            <input type="text" id="data-libro_isbn" placeholder="Introduce el ISBN del libro" value="${this.ISBN}" disabled >
            
            <label for="data-libro_autor">Autor: </label>
            <input type="text" id="data-libro_autor" placeholder="Introduce el autor del libro" value="${this.autorId}" disabled >
            
            <label for="data-libro_biblioteca">Biblioteca: </label>
            <input type="text" id="data-libro_biblioteca" placeholder="Introduce la biblioteca" value="${this.bibliotecaId ? this.bibliotecaId : ''}" disabled >
            
            <label for="data-libro_disponible">Disponible: </label>
            <input type="checkbox" id="data-libro_disponible" value="${this.estaDisponible ? 'checked' : ''}"disabled >
            
            <div id="prestamos"></div>
            
            <ul display="inline">
                <li id="libro-editar">Editar libro</li>
                <li id="libro-borrar">Borrar libro</li>
                <li id="libro-listar-prestamos">Listar prestamos del libro</li>
                <li id="libro-prestar">Prestar libro</li>
                <li id="libro-devolver">Devolver libro</li>
            </ul>
            
        </form>
        `;
    }

    generarHTMLEdicion() {
        return `
            <form data-accion="editar" data-entidad="libro" >
                <label for="editar-libro_titulo">Título: </label>
                <input type="text" id="editar-libro_titulo" required>
                
                <label for="editar-libro_isbn">ISBN: </label>
                <input type="text" id="editar-libro_isbn"  required>
                
                <label for="editar-libro_autor">Autor: </label>
                <input type="text" id="editar-libro_autor"  required>
                
                <label for="editar-libro_biblioteca">Biblioteca: </label>
                <input type="text" id="editar-libro_biblioteca" >
                
                <input type="checkbox" id="editar-libro_disponible">
                <label for="editar-libro_disponible">Disponible</label>
                
                <input type="submit" id="actualizar_libro" value="Actualizar libro">
                <input type="submit" id="borrar_libro" value="Borrar libro">
            </form>
    `;
    }

    generarHTMLListadoPrestamos() {
        let devolver = `
        <div data-accion="listar_prestamos" data-entidad="libro">
            <p>Listado de prestamos del libro</p>
        `;
        if (!empty(this.prestamos)) {
            this.prestamos.forEach(element => {
                devolver += `<div><p>Fecha del prestamo: ${element[0]}</p><p>Fecha de la devolución: ${!empty(element[1]) ? element[1] : 'Sin entregar'}</p></div>`;
            });
        } else {
            devolver += '<div><p>Este libro no se ha prestado</p></div>';
        }
        devolver += '</div>';
        return devolver;
    }

}
/*Falta la manipulacion de prestamos */
export { generarHTMLCreacion, generarHTMLEdicion, generarHTMLListadoPrestamos, generarHTMLPropiedades };
