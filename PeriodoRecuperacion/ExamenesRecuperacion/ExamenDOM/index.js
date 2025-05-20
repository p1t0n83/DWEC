const baseUrl = 'http://localhost:8000';

window.addEventListener("load", function () {
    mostrarLibros();
    let botonCrear=document.getElementById("btnCrear");
    botonCrear.innerHTML= `<a href="formulario.html?id=0">Nuevo Libro</a>`;
});

function mostrarLibros() {
    document.getElementById("btnbuscar").addEventListener("click", async function (e) {
        e.preventDefault();
        let filtro = document.getElementById("filtro").value;
        let libros = await cargarLibros();
        if (filtro != "") {
            filtro = filtro.toLowerCase();
            libros = libros.filter(libro => {
                return libro.titulo.toLowerCase() == filtro || libro.autor.toLowerCase() == filtro || libro.tipo.toLowerCase() == filtro;
            });
        }
        console.log(libros);

        contenedorLibros = document.getElementById("contenedorLibros");
        contenedorLibros.innerHTML = "";
        let tabla = document.createElement("div");
        tabla.className = "tabla";
        contenedorLibros.appendChild(tabla);
        let cabecera = document.createElement("div");
        tabla.appendChild(cabecera);
        cabecera.className = "fila";
        cabecera.innerHTML = `
        <div>Título</div>
        <div>Autor</div>
        <div>Fecha</div>
        <div>Precio</div>
        <div>Tipo</div>
        <div>Acciones</div>`;
        libros.forEach((libro) => {

            let fila = document.createElement("div");
            fila.className = "fila";
            fila.innerHTML = `
        <div>${libro.titulo}</div>
        <div>${libro.autor}</div>
        <div>${libro.publicacion}</div>
        <div>${libro.precio}</div>
        <div>${libro.tipo}</div>`;

            let botonBorrar = document.createElement("button");
            botonBorrar.className = "borrar" + libro.id;
            botonBorrar.value = libro.id;
            botonBorrar.innerHTML = `Borrar`;

            botonBorrar.addEventListener("click", function (e) {
                e.preventDefault();
                let libroId = botonBorrar.value;
                borrarLibro(libroId);
            });

            let botonVer = document.createElement("button");
            botonVer.className = "ver" + libro.id;
            botonVer.value = libro.id;
            botonVer.innerHTML = `<a href="formulario.html?id=${libro.id}">Ver</a>`;




            let botones = document.createElement("div");
            botones.appendChild(botonVer);
            botones.appendChild(botonBorrar);


            fila.appendChild(botones);
            tabla.appendChild(fila);
        });
    });

}

async function borrarLibro(id) {
    try {
        let libro=await cargarLibro(id);
        
        let borrar = confirm("Seguro que quieres eliminar el libro " + libro.titulo+"?");
        if (!borrar) {
            return;
        }
        const response = await fetch(baseUrl + "/libros/eliminar/" + id, {
            method: "POST"
        }
        );
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        mostrarLibros();

    } catch (error) {
        console.error("No se pudo realizar la solicitud de borrar el libro", error.message)
    }
}

async function cargarLibros() {
    try {
        const response = await fetch(baseUrl + "/libros");
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
      
        const datos = await response.json();
        return datos;
    } catch (error) {
        console.error("No se pudo realizar la solicitud de obtener los libros", error.message)
    }
}



async function cargarLibro(id) {
    try {
        const response = await fetch(baseUrl + "/libros/"+id);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
      
        const datos = await response.json();
        return datos;
    } catch (error) {
        console.error("No se pudo realizar la solicitud de obtener los libros", error.message)
    }
}

