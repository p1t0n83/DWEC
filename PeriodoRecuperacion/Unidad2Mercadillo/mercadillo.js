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
        let producto = [nombre, cantidad, precio, categoria];
        productos[productos.length] = producto;
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
            if (producto.cantidad + cantidad >= 0) {
                if (producto.cantidad + cantidad == 0) {
                    alert("Se necesita reponer");
                    producto.cantidad += cantidad;
                } else if (producto.cantidad + cantidad > 0) {
                    producto.cantidad += cantidad;
                }
            } else {
                alert("No se puede actualizar el inventario, ya que la cantidad a extraer es mayor de la que se tiene");
            }
    });
}
agregarProducto('plato', 1, 120, 'esclavo');
eliminarProducto("plato");
buscarProducto("chorizooooo");
actualizarInventario("chorizo", 1000);
console.log(productos);