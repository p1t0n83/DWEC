
class Autor {
    constructor(autorId, nombre, nacionalidad, biografia, libros=null) {
       this.autorId=autorId;
       this.nombre=nombre;
       this.nacionalidad=nacionalidad;
       this.biografia=biografia;
       this.libros=libros;
    }

    generarHTMLCreacion(){
        let contenedor=document.getElementById("crearAutor");
    }
}

export default Autor;