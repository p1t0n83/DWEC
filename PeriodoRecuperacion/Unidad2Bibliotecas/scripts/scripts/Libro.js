
class Libro{
    constructor(libroId,titulo,ISBN,autorId,bibliotecaId,prestamos,estaDisponible){
       this.libroId=libroId;
       this.titulo=titulo;
       this.ISBN=ISBN;
       this.autorId=autorId;
       this.prestamos=prestamos;
       this.estaDisponible=estaDisponible;
    }

    generarHTMLCreacion(){
        let contenedor=document.getElementById("crearLibro");
        let contenido=`
        <form action="">
        <label for="titulo">
        <input type="text" name="titulo" restrict>
        </label>
        <label for="ISBN">
        <input type="number" name="ISBN" restrict>
        </label>
        <button id="crearLibroBoton">Añadir libro</button>
        </form>`;
        contenedor.innerHTML(contenido);
    }

    generarHTMLPropiedades(){
        let contenedor=document.getElementById("detallesLibro");
        let contenido=`
        <form action="">
        Titulo del libro: ${this.titulo}. ISBN: ${this.ISBN}
        <label for="libroId"><input name="libroId" id="libroId" type="hidden" value="${this.libroId}></label>"
        <button class="editarLibro">Editar libro</button>
        <button class="borrarLibro">Borrar libro</button>
        <button class="listarPrestamos">Listar prestamos</button>
        <button class="crearPrestamos">Crear prestamo</button>
        <button class="devolverPrestamo">DevolverPrestamo</button>
        <button class="listarPrestamos">Listar prestamos</button>
        </form>`;
    }

    generarHTMLEdicion(){
        let contenedor=document.getElementById("formularioCrearLibro");
        let contenido=`
        <form action="">
        <label for="titulo">
        <input type="text" name="titulo" restrict>
        </label>
        <label for="ISBN">
        <input type="number" name="ISBN" restrict>
        </label>
          <label for="libroId"><input name="libroId" id="libroId" type="hidden" value="${this.libroId}></label>"
        <button id="editarLibroBoton">Editar libro</button>
        </form>`;
        contenedor.innerHTML(contenido);
    }

    generarHTMLListadoPrestamos(){
        let contenedor=document.getElementById("listarPrestamosLibro");
        let contenido=`<h3>Prestamos</h3>`;
        this.prestamos.forEach(prestamo => {
            contenido+=`<p>Fecha de prestamo: ${prestamo.fechaPrestamo}  Fecha de devolucion: ${prestamo.fechaDevolucion==null?"No se ha devuelto":prestamo.fechaDevolucion}</p>`; 
        });
    }
}

export default Libro;