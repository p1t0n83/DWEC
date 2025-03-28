let $negocio = function () {
    let productos = [
        {
            nombre: "chorizo",
            cantidad: 120,
            precio: 1,
            categoria: "alimentos"
        },
        {
            nombre: "raton razer",
            cantidad: 16,
            precio: 18,
            categoria: "electronica"
        },
        {
            nombre: "plato",
            cantidad: 66,
            precio: 5,
            categoria: "vajilla"
        }
    ];

    function agregarProducto(nombre, cantidad, precio, categoria) {
        let encontrado = (productos.filter(producto => producto.nombre == nombre).length > 0);
        if (!encontrado) {

            productos[productos.length] = {
                nombre: nombre,
                cantidad: cantidad,
                precio: precio,
                categoria: categoria
            };
        }
    }

    function eliminarProducto(nombre) {
        let longitud = productos.length;
        productos = productos.filter(producto => producto.nombre != nombre);
        if (longitud > productos.length) {
            alert("Se borro");
        } else {
            alert("No existe el producto de dicho nombre");
        }
    }

    function buscarProducto(nombre) {
        let producto = productos.filter(producto => producto.nombre == nombre);

        if (producto.length > 0) {
            console.log(producto);
        } else {
            alert("No se encontro dicho producto");
        }
    }

    function actualizarInventario(nombre, cantidad) {
        productos.forEach(producto => {
            if (producto.nombre == nombre)
                if (producto.cantidad + (cantidad) >= 0) {
                    if (producto.cantidad + (cantidad) == 0) {
                        alert("Se necesita reponer");
                        producto.cantidad += (cantidad);
                    } else if (producto.cantidad + (cantidad) > 0) {
                        producto.cantidad += cantidad;
                    }
                } else {
                    alert("No se puede actualizar el inventario, ya que la cantidad a extraer es mayor de la que se tiene");
                }
        });
    }

    function ordenarProductosPorPrecio() {
        return productos.toSorted((a, b) => { return a.precio - b.precio });
    }

    function imprimirInventario() {
        let contenido = document.getElementById("listaProductos");
        contenido.innerHTML = "";
        contenido.innerHTML += `
    <div id="fila">
    <div>Nombre</div>  <div>Categoria</div>  <div>Cantidad</div>  <div>Precio</div>  <div>Total</div> <div>Opciones</div>
    </div>`;

        productos.forEach(producto => {
            let fila = `<div id="fila">
        <div>${producto.nombre}</div>  <div>${producto.categoria}</div>  <div>${producto.cantidad}</div>  <div>${producto.precio}</div>  <div>${producto.cantidad * producto.precio}</div>  <div><button value="${producto.nombre}" id="eliminar">Eliminar</button><button id="editar" value=${producto.nombre}>Editar</button></div>
        </div>`;
            contenido.innerHTML += fila;
        });
    }


    function filtrarProductosPorCategoria(categoria) {
        let filtrados = [];
        filtrados = productos.filter(producto => producto.categoria == categoria);
        let contenido = document.getElementById("listaProductos");
        contenido.innerHTML = "";
        contenido.innerHTML += `
    <div id="fila">
    <div>Nombre</div>  <div>Categoria</div>  <div>Cantidad</div>  <div>Precio</div>  <div>Total</div> <div>Opciones</div>
    </div>`;

        filtrados.forEach(producto => {
            let fila = `<div id="fila">
        <div>${producto.nombre}</div>  <div>${producto.categoria}</div>  <div>${producto.cantidad}</div>  <div>${producto.precio}</div>  <div>${producto.cantidad * producto.precio}</div>  <div><button value="${producto.nombre}" id="eliminar">Eliminar</button><button id="editar" value=${producto.nombre}>Editar</button></div>
        </div>`;
            contenido.innerHTML += fila;
        });
    }

    return {
        agregarProducto,
        eliminarProducto,
        buscarProducto,
        actualizarInventario,
        ordenarProductosPorPrecio,
        imprimirInventario,
        filtrarProductosPorCategoria
    }
}();

document.addEventListener("DOMContentLoaded", function () {
    $negocio.imprimirInventario();
    document.addEventListener("click", function (event) {
        event.preventDefault();
        let boton = event.target.id;
        if (boton == "eliminar") {
            let nombre = event.target.value;
            $negocio.eliminarProducto(nombre);
            $negocio.imprimirInventario();
        } else if (boton == "crear") {
            let nombre = document.getElementById('nombre').value;
            let precio = document.getElementById('precio').value;
            let cantidad = document.getElementById('cantidad').value;
            let categoria = document.getElementById('categoria').value;
            $negocio.agregarProducto(nombre, cantidad, precio, categoria);
            $negocio.imprimirInventario();
        } else if (boton == "editar") {
            let cantidad = parseInt(prompt("Ingrese la cantidad a cambiar"));
            let nombre = event.target.value;
            $negocio.actualizarInventario(nombre, cantidad);
            $negocio.imprimirInventario();
        } else if (boton == "filtrar") {
            let nombre = document.getElementById("filtrado").value;
            if (nombre == "todos") {
                $negocio.imprimirInventario();
            } else if (nombre == "categoria") {
                let texto = document.getElementById("textoFiltrado");
                console.log(texto);
                $negocio.filtrarProductosPorCategoria(texto);
            } else if (nombre == "nombre") {
                let texto = document.getElementById("textoFiltrado");
                $negocio.buscarProducto();
            }
        }
    })
})