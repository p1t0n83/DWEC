const baseUrl = 'http://localhost:8000';

window.addEventListener("load", function () {
    generarFormulario();
});



async function generarFormulario() {
    let contenedorFormulario = document.getElementById("contenedorFormulario");
    let id = cargarId();
    console.log(id);
    if (id == 0) {
        contenedorFormulario.innerHTML = `
    <form>
     <label for="titulo">Titulo<input type="text" id="titulo"></label><br>
     <label for="autor">Autor<input type="text" id="autor"></label><br>
     <label for="fecha">Fecha de publicacion<input type="date" id="fecha"></label><br>
     <label for="precio">Precio<input type="number" id="precio"></label><br>
    <label for="tipo">Tipo<select id="tipo">
    <option value="novela">Novela</option>
      <option value="infantil">Infantil</option>
      <option value="ensayo">Ensayo</option>
    </select></label><br>
    <button id="guardar">Guardar</button>
    <a href="index.html">Volver<a>
    </form>`;
    } else {
        let libro=await obtenerLibro(id);
        contenedorFormulario.innerHTML = `
    <form>
     <label for="titulo">Titulo<input type="text" id="titulo" value="${libro.titulo}"></label><br>
     <label for="autor">Autor<input type="text" id="autor" value="${libro.autor}"></label><br>
     <label for="fecha">Fecha de publicacion<input type="date" id="fecha" value="${libro.publicacion}"></label><br>
     <label for="precio">Precio<input type="number" id="precio" value="${libro.precio}"></label><br>
    <label for="tipo">Tipo<select id="tipo" value="${libro.tipo}">
    <option value="novela">Novela</option>
      <option value="infantil">Infantil</option>
      <option value="ensayo">Ensayo</option>
    </select></label><br>
    <button id="guardar">Guardar</button>
    <a href="index.html">Volver<a>
    </form>`;
    }
    guardar(id);
}

function guardar(id) {
    document.getElementById("guardar").addEventListener("click", function (e) {
        e.preventDefault();
        let titulo = document.getElementById("titulo").value;
        let autor = document.getElementById("autor").value;
        let fecha = document.getElementById("fecha").value;
        let precio = parseFloat(document.getElementById("precio").value);
        let tipo = document.getElementById("tipo").value;
        if (id == 0) {
            crear(titulo, autor, fecha, precio, tipo);
        } else {
            editar(titulo, autor, fecha, precio, tipo, id);
        }
    })
}

function cargarId() {
    try {
        const parametros = new URLSearchParams(window.location.search);
        const id = parseInt(parametros.get('id'));
        return id;
    } catch (error) {
        console.error("No se pudo realizar la solicitud de obtener el id ", error.message)
    }
}

 function crear(titulo, autor, fecha, precio, tipo) {
  
        const peticion =  fetch(baseUrl+"/libros", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id:0,
                titulo: titulo,
                autor: autor,
                publicacion: fecha,
                precio: precio,
                tipo: tipo
            })
        })
    peticion.then((response) => response.json())
     .then((data) => { alert("Datos enviados correctamente");
        console.log(data);
     })
     .catch((error) => { alert("Error al enviar los datos:", error.message); });
}

 function editar(titulo, autor, fecha, precio, tipo, id) {
    
        const peticion = fetch(baseUrl + "/libros/actualizar/" + id, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id:id,
                titulo: titulo,
                autor: autor,
                publicacion: fecha,
                precio: precio,
                tipo: tipo
            })
        });
        peticion.then((response) => response.json())
         .then((data) => { alert("Datos enviados correctamente");
        console.log(data); })
         .catch((error) => { alert("Error al enviar los datos:", error.message); });
    
}

async function obtenerLibro(id) {
    try {
        const response = await fetch(baseUrl + "/libros/" + id);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const datos = await response.json();
        return datos;
    } catch (error) {
        console.error("No se pudo realizar la solicitud de obtener los libros", error.message)
    }
}