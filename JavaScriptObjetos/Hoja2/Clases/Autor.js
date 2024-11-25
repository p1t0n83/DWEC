class Autor {
    constructor(autorId, nombre, nacionalidad, biografia, libros = []) {
        this.autorId = autorId;
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
        this.biografia = biografia;
        this.libros = libros;
    }

    generarHTMLCreacion() {
        return `
            <form data-accion="crear" data-entidad="autor">
                <label for="nuevo-autor_nombre">Nombre: </label>
                <input type="text" id="nuevo-autor_nombre" placeholder="Introduce el nombre del autor" required>
                
                <label for="nuevo-autor_nacionalidad">Nacionalidad: </label>
                <input type="text" id="nuevo-autor_nacionalidad" placeholder="Introduce la nacionalidad del autor" required>
                
                <label for="nuevo-autor_biografia">Biografía: </label>
                <textarea id="nuevo-autor_biografia" placeholder="Introduce una biografía" required></textarea>

                <input type="submit" id="guardar_autor" value="Guardar autor">
            </form>
        `;
    }

    generarHTMLPropiedades() {
        let librosHTML = '';
        this.libros.forEach(libro => {
            librosHTML += `<li>${libro}</li>`;
        });

        return `
            <form data-accion="ver" data-entidad="autor">
                <label for="data-autor_nombre">Nombre: </label>
                <input type="text" id="data-autor_nombre" value="${this.nombre}" disabled>
                
                <label for="data-autor_nacionalidad">Nacionalidad: </label>
                <input type="text" id="data-autor_nacionalidad" value="${this.nacionalidad}" disabled>
                
                <label for="data-autor_biografia">Biografía: </label>
                <textarea id="data-autor_biografia" disabled>${this.biografia}</textarea>

                <h3>Libros publicados:</h3>
                <ul>
                    ${librosHTML}
                </ul>

                <ul>
                    <li id="autor-editar">Editar</li>
                    <li id="autor-borrar">Borrar</li>
                    <li id="autor-agregar-libro">Agregar libro</li>
                    <li id="autor-eliminar-libro">Eliminar libro</li>
                </ul>
            </form>
        `;
    }

    generarHTMLEdicion() {
        return `
            <form data-accion="editar" data-entidad="autor">
                <label for="editar-autor_nombre">Nombre: </label>
                <input type="text" id="editar-autor_nombre" value="${this.nombre}" required>
                
                <label for="editar-autor_nacionalidad">Nacionalidad: </label>
                <input type="text" id="editar-autor_nacionalidad" value="${this.nacionalidad}" required>
                
                <label for="editar-autor_biografia">Biografía: </label>
                <textarea id="editar-autor_biografia" required>${this.biografia}</textarea>

                <input type="submit" id="actualizar_autor" value="Actualizar autor">
            </form>
        `;
    }
}
export { generarHTMLCreacion, generarHTMLEdicion, generarHTMLPropiedades };
