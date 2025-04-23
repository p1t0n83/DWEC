// Inventario de productos
let inventario = {
  Manzanas: { cantidad: 50, precio: 0.5, categoria: "Frutas" },
  Leche: { cantidad: 20, precio: 1.2, categoria: "Lácteos" },
  Pan: { cantidad: 30, precio: 1.0, categoria: "Panadería" },
};

function agregarProducto(nombre, cantidad1, precio1, categoria1) {
    inventario[nombre]={cantidad:cantidad1,
        precio:precio1,
        categoria:categoria1
    };
}

function eliminarProduto(nombre){
    let existe=false;
    if(inventario[nombre]){
        delete inventario[nombre];
        existe=true;
    }
    alert(existe);
}

function  buscarProducto(nombre){
    if(inventario[nombre]){
        alert(`Nombre:${nombre}, cantidad: ${inventario[nombre].cantidad}, precio: ${inventario[nombre].precio}, categoria: ${inventario[nombre].categoria}`);
    }else{
        alert("No se encontro");
    }
}

function actualizarInventario(nombre, cantidad) {
    if (inventario[nombre]) {
        // Actualizar la cantidad del producto
        inventario[nombre].cantidad += cantidad;

        // Verificar si la cantidad es negativa
        if (inventario[nombre].cantidad < 0) {
            alert(`La cantidad del producto "${nombre}" no puede ser negativa. Ajustando a 0.`);
            inventario[nombre].cantidad = 0; // Ajustar la cantidad a 0 si es negativa
        } else if (inventario[nombre].cantidad === 0) {
            alert(`El producto "${nombre}" se ha agotado. Hay que reponer.`);
        }
    } else {
        alert(`El producto "${nombre}" no existe en el inventario.`);
    }
}

function orderProductosPorPrecio(){
    let productos = Object.entries(inventario).map(([nombre, detalles]) => ({
        nombre,
        ...detalles
    }));

    // Ordenar los productos por precio
    productos.sort((a, b) => a.precio - b.precio);

    return productos;
}

function imprimirinventario() {
    console.log("Inventario actual:");
    for (let nombre in inventario) {
        const producto = inventario[nombre];
        console.log(`Nombre: ${nombre}, Cantidad: ${producto.cantidad}, Precio: ${producto.precio}, Categoría: ${producto.categoria}`);
    }
}

function filtrarCategoria(categoria) {
    console.log(`Productos en la categoría "${categoria}":`);
    for (let nombre in inventario) {
        const producto = inventario[nombre];
        if (producto.categoria.toLowerCase() === categoria.toLowerCase()) {
            console.log(`Nombre: ${nombre}, Cantidad: ${producto.cantidad}, Precio: ${producto.precio}`);
        }
    }
}