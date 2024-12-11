$negocio = function () {//array asociativo donde guardamos los productos que tienen nombre,cantidad,precio y categoria.
    let productos = [{
        "nombre": "Alberto",
        "Cantidad": "5",
        "Precio": "10",
        "Categoria": "comida",
    }];

    //metodo para agregar producto, con un find buscamos si este se encuentra ya en el array, sino, se lo metemos con un push
    function agregarProducto(nombre, cantidad, precio, categoria) {
        let producto = productos.find(producto => producto.nombre === nombre);
        if (producto != undefined) {
            producto.nombre = nombre
            producto.Cantidad = cantidad;
            producto.Categoria = categoria;
            producto.Precio = precio;
            productos.push(producto);
            alert("Producto añadido con exito");
        } else {
            alert("El producto ya se encuentra en el array");
        }
    }
    //metodo para eliminar un producto, primero buscamos que exista y si existe el contenido del index del producto se pone a nulo
    function eliminarProducto(nombre) {
        let index = productos.findIndex(producto => producto.nombre === nombre);
        if (index != undefined) {
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
            alert("No se pudo encontrar el producto, asegurese de haber ingresado bien el nombre");
        }
    }

    //metodo para actualizar un producto por su nombre
    function actualizarInventario(nombre, cantidad) {
        let productoModificado = productos.map(producto => producto.nombre == nombre);
        if (productoModificado == undefined) {
            alert("no se encontro el producto");
        } else {
            if (cantidad < 0) {
                productoModificado.cantidad + cantidad < 0 ? alert("No se puede restar mas cantidad de la que hay") : productoModificado.cantidad -= cantidad;
                productoModificado.map(producto => producto.nombre == nombre ? producto = productoModificado : producto = producto);
                productoModificado.cantidad - cantidad == 0 ? alert("Se solicita reposicion") : "";
            } else if (cantidad > 0) {
                productoModificado.cantidad += cantidad;
                productoModificado.map(producto => producto.nombre == nombre ? producto = productoModificado : producto = producto);
            }
        }
    }

    function ordenarProductosPorPrecio() {
        //logica, con sort hacemos como hariamos con un map y comparamos, la resta,si sale 0 se queda igual, si sale 1 a es mayor y si sale -1 b es mayor
        let productosOrdenados = productos.sort((a, b) => (a.Precio - b.Precio));
    }

    function imprimirInventario() {
        let lista = "<ul>";
        for (let producto of productos) {
            lista += `
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
        for (let producto of productos) {
            if (producto.Categoria === categoria) {
                lista += `
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


}();
//con esto haremos que cuando se inicie l pagina empiezen a funcionar nuestros metodos
window.addEventListener("load", function () {
    document.getElementById("crear").addEventListener("click", function () {
        let nombre = document.getElementById("nombre");
        let precio = document.getElementById("precio");
        let cantidad = document.getElementById("cantidad");
        let categoria = document.getElementById("categoria");
        this.$negocio.agregarProducto(nombre, precio, cantidad, categoria);
    })
});