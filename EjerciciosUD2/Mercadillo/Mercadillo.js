let $negocio = (function () {//array asociativo donde guardamos los productos que tienen nombre,cantidad,precio y categoria.
    let productos = [{
        "nombre": "Alberto",
        "Cantidad": 5,
        "Precio": 10,
        "Categoria": "comida",
    }];

    return {
        agregarProducto,
        eliminarProducto,
        buscarProducto,
        actualizarInventario,
        ordenarProductosPorPrecio,
        imprimirInventario,
        filtrarProductosPorCategoria
    }

    //metodo para agregar producto, con un find buscamos si este se encuentra ya en el array, sino, se lo metemos con un push
    function agregarProducto(nombre, cantidad, precio, categoria) {
        let producto = productos.find(producto => producto.nombre == nombre);
        if (producto === undefined) {
            producto = {
                nombre: nombre,
                Cantidad: cantidad,
                Precio: precio,
                Categoria: categoria,
            }
            productos.push(producto);
            alert("Producto añadido con exito");
        } else {
            alert("El producto ya se encuentra en el array");
        }
    }
    //metodo para eliminar un producto, primero buscamos que exista y si existe el contenido del index del producto se pone a nulo
    function eliminarProducto(nombre) {
        let index = productos.findIndex(producto => producto.nombre === nombre);
        if (index != -1) {
            //splice nos permite borrar un elemento de un array por un index, el 1 es para eliminar solo ese, si ponemos 2 borraria tambien el siguiente
            productos.splice(index, 1);
            alert("Producto borrado correctamente");
        } else {
            alert("No se encontro el producto, por favor, asegurese de ingresar el nombre correctamente");
        }
    }

    //metodo para buscar un producto por su nombre
    function buscarProducto(nombre) {
        let producto;
        producto = productos.find(producto => producto.nombre === nombre);
        if (producto != undefined) {
            return producto;
        } else {
            return null;
        }
    }

    //metodo para actualizar un producto por su nombre
    function actualizarInventario(nombre, cantidad) {
        let productoModificado = productos.find(producto => producto.nombre == nombre);
        if (productoModificado == undefined) {
            alert("no se encontro el producto");
        } else {
            if (cantidad < 0) {
                productoModificado.Cantidad + cantidad < 0 ? alert("No se puede restar mas cantidad de la que hay") : productoModificado.Cantidad += cantidad;
                productos.find(producto => producto.nombre == nombre ? producto = productoModificado : producto = producto);
                productoModificado.Cantidad + cantidad == 0 ? alert("Se solicita reposicion") : alert("Producto actualizado");
                return;
            } else if (cantidad > 0 || cantidad == 0) {
                productoModificado.Cantidad += cantidad;
                productos.map(producto => producto.nombre == nombre ? producto = productoModificado : producto = producto);
                alert("Producto actualizado");
            }
        }
    }

    function ordenarProductosPorPrecio() {
        //logica, con sort hacemos como hariamos con un map y comparamos, la resta,si sale 0 se queda igual, si sale 1 a es mayor y si sale -1 b es mayor
        let productosOrdenados = productos.sort((a, b) => (a.Precio - b.Precio));
        return productosOrdenados;
    }

    function imprimirInventario() {
        let lista = "<ul>";
        let contador = 1;
        for (let producto of productos) {
            lista += `
        <h2>Producto ${contador++}</h2>
            <ul>
        <li>Nombre: ${producto.nombre}</li>
        <li>Categoria: ${producto.Categoria}</li>
        <li>Cantidad: ${producto.Cantidad}</li>
        <li>Precio: ${producto.Precio}</li>
        <li>Total:${producto.Precio * producto.Cantidad}</li>
        </ul>`;

        }
        lista += "</ul>";
        return lista;
    }

    function filtrarProductosPorCategoria(categoria) {
        let lista = "<ul>";
        let contador = 1;
        for (let producto of productos) {
            if (producto.Categoria === categoria) {
                lista += ` <h2>Producto ${contador++}</h2>
        <ul>
        <li>Nombre: ${producto.nombre}</li> 
        <li>Cantidad: ${producto.Cantidad}</li>
        <li>Precio: ${producto.Precio}</li>
        </ul>`;
            }
        }
        lista += "</ul>";
        return lista;
    }
}());
//con esto haremos que cuando se inicie l pagina empiezen a funcionar nuestros metodos
window.addEventListener("load", function () {
    document.getElementById("crear").addEventListener("click", function () {
        let nombre = document.getElementById("nombre-crear").value;
        let precio = parseFloat(document.getElementById("precio").value);
        let cantidad = parseInt(document.getElementById("cantidad").value);
        let categoria = document.getElementById("categoria").value;
        $negocio.agregarProducto(nombre, cantidad, precio, categoria);
    });

    document.getElementById("eliminar").addEventListener("click", function () {
        let nombre = document.getElementById("nombre-eliminar").value;
        $negocio.eliminarProducto(nombre);
    });

    document.getElementById("buscar").addEventListener("click", function () {
        let nombre = document.getElementById("nombre-buscar").value;
        let producto = $negocio.buscarProducto(nombre);
        if (producto != null) {
            let contenido = `<p>Nombre del producto: ${nombre}, Precio: ${producto.Precio}, Cantidad:${producto.Cantidad}, Categoria: ${producto.Categoria}</p>`;
            let contenedor = document.getElementById('contenedorBuscar');
            contenedor.innerHTML = contenido;
        } else {
            alert("No existe el producto");
        }

    });

    document.getElementById("actualizar").addEventListener("click", function () {
        let nombre = document.getElementById("nombre-actualizar").value;
        let cantidad = parseInt(document.getElementById("cantidad-actualizar").value);
        $negocio.actualizarInventario(nombre, cantidad);
    });


    document.getElementById("ordenados").addEventListener("click", function () {
        let productos = $negocio.ordenarProductosPorPrecio();
        if (productos != null) {
            let contenido = "<ul>";
            for (let producto of productos) {
                contenido += `<li>Nombre del producto: ${producto.nombre}, Precio: ${producto.Precio}, Cantidad:${producto.Cantidad}, Categoria: ${producto.Categoria}</li>`;
            }
            contenido += "</ul>";
            let contenedor = document.getElementById('contenedorOrdenados');
            contenedor.innerHTML = contenido;
        } else {
            alert("No hay productos");
        }
    });
    document.getElementById("imprimir").addEventListener("click", function () {
        let contenido = $negocio.imprimirInventario();
        let contenedor = document.getElementById("contenedorImpresos");
        contenedor.innerHTML = contenido;
    });


    document.getElementById("filtrarCategoria").addEventListener("click", function () {
        let categoria = document.getElementById('filtrar-categoria').value;
        let contenido = $negocio.filtrarProductosPorCategoria(categoria);
        let contenedor = document.getElementById("contenedorFiltrados");
        contenedor.innerHTML = contenido;
    });

});