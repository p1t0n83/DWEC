let productos = [{
    "nombre": "Alberto",
    "Cantidad": "5",
    "Precio": "10",
    "Categoria": "comida",
}];

function agregarProducto(nombre, cantidad, precio, categoria) {
    let producto = productos.find(producto => producto.nombre === nombre);
    if (producto != undefined) {
        productos.push(producto);
    } else {
        alert("El producto ya se encuentra en el array");
    }
}

function eliminarProducto(nombre) {
    let producto = productos.find(producto => producto.nombre === nombre);
    if (index != undefined) {
        productos.find(producto => producto.nombre === nombre ? producto = null : producto = producto);
    } else {
        alert("No se encontro el producto, por favor, asegurese de ingresar el nombre correctamente");
    }
}