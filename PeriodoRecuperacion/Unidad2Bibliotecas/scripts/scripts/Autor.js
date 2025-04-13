class Autor {
  constructor(autorId, nombre, nacionalidad, biografia, libros = null) {
    this.autorId = autorId;
    this.nombre = nombre;
    this.nacionalidad = nacionalidad;
    this.biografia = biografia;
    this.libros = libros;
  }

  generarHTMLCreacion() {
    let contenedor = document.getElementById("crearAutor");
    let contenido = `
        <form action="">
        <label for="nombre">
        <input type="text" name="nombre" restrict>
        </label>
        <label for="nacionalidad">
        <input type="text" name="nacionalidad" restrict>
        </label>
         <label for="biografia">
        <textarea type="text" name="biografia" restrict></textarea>
        </label>
        <button id="crearAutorBoton">Añadir libro</button>
        </form>`;
    contenedor.innerHTML(contenido);
  }

  generarHTMLPropiedades() {
    let contenedor = document.getElementById("detallesLibro");
    let contenido = `
            <form action="">
                <p><strong>Nombre del autor:</strong> ${this.nombre}</p>
                <p><strong>Nacionalidad:</strong> ${this.nacionalidad}</p>
                <p><strong>Biografía:</strong> ${this.biografia}</p>
                <h3>Libros:</h3>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Género</th>
                            <th>Año</th>
                        </tr>
                    </thead>
                    <tbody>
        `;
    if (this.libros && this.libros.length > 0) {
      this.libros.forEach((libro) => {
        contenido += `
                    <tr>
                        <td>${libro.titulo}</td>
                        <td>${libro.genero}</td>
                        <td>${libro.anio}</td>
                    </tr>
                `;
      });
    } else {
      contenido += `
                <tr>
                    <td colspan="3">No hay libros disponibles.</td>
                </tr>
            `;
    }
    contenido += `
                    </tbody>
                </table>
            </form>
        `;

    contenedor.innerHTML = contenido;
  }
}

export default Autor;
