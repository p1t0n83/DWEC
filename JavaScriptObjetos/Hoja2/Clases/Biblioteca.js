class Biblioteca {
    constructor(bibliotecaId, nombre, ubicacion, libros = []) {
        this.bibliotecaId = bibliotecaId;
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.libros = libros;
    }

    generarHTMLCreacion() {
        return `
            <form data-accion="crear" data-entidad="biblioteca">
                <label for="nueva-biblioteca_nombre">Nombre: </label>
                <input type="text" id="nueva-biblioteca_nombre" placeholder="Introduce el nombre de la biblioteca" required>
                
                <label for="nueva-biblioteca_ubicacion">Ubicación: </label>
                <input type="text" id="nueva-biblioteca_ubicacion" placeholder="Introduce la ubicación de la biblioteca" required>
                
                <input type="submit" id="guardar_biblioteca" value="Guardar biblioteca">
            </form>
        `;
    }

    generarHTMLEdicion() {
        return `
            <form data-accion="editar" data-entidad="biblioteca">
                <label for="editar-biblioteca_nombre">Nombre: </label>
                <input type="text" id="editar-biblioteca_nombre" value="${this.nombre}" required>
                
                <label for="editar-biblioteca_ubicacion">Ubicación: </label>
                <input type="text" id="editar-biblioteca_ubicacion" value="${this.ubicacion}" required>
                
                <input type="submit" id="actualizar_biblioteca" value="Actualizar biblioteca">
            </form>
        `;
    }
}
export { generarHTMLCreacion, generarHTMLEdicion };