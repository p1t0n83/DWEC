let mercadillo = (function() {
    const productos = {};
    return {
        agregarProducto,
        eliminarProducto,
        imprimirInventario,
        actualizarInventario,
        filtrarProductosPorCategoria,
        ordenarProductosPorPrecio,
        buscarProducto,
    };


function agregarProducto(nombre, cantidad, precio, categoria) {
    if (nombre in productos) {
        alert("YA EXISTE EL PRODUCTO");
        return;
    }
    let producto = {
        cantidad: cantidad,
        precio: precio,
        categoria: categoria,
    };
    productos[nombre] = producto;
}

function eliminarProducto(nombre) {
    if (nombre in productos) {
        delete productos[nombre];
        alert("PRODUCTO BORRADO");
    } else {
        alert("NO SE PUEDE BORRAR, NO EXISTE");
    }
}

function buscarProducto(nombre) {
    if (nombre in productos) {
        return productos[nombre];
    } else {
        alert("NO SE PUEDE MOSTRAR EL PRODUCTO PORQUE NO SE ENCUENTRA");
        return null;
    }
}

function actualizarInventario(nombre, cantidad) {
    if (nombre in productos) {
        if (cantidad > 0) {
            productos[nombre].cantidad += cantidad;
            alert("SE INCREMENTÓ LA CANTIDAD");
        } else if (cantidad < 0) {
            if (productos[nombre].cantidad + cantidad >= 0) {
                productos[nombre].cantidad += cantidad;
                alert("SE DECREMENTÓ LA CANTIDAD");
            } else {
                productos[nombre].cantidad = 0;
                alert("HAY QUE REPONER");
            }
        }
    } else {
        alert("NO SE ENCONTRÓ EL PRODUCTO");
    }
}

function ordenarProductosPorPrecio() {
    return Object.entries(productos)
        .map(([nombre, valor]) => ({ nombre, ...valor }))
        .sort((a, b) => a.precio - b.precio);
}

function imprimirInventario() {
    let reporte = '';
    Object.entries(productos).forEach(([nombre, element]) => {
        reporte += 'Producto: ' + nombre +
            '\nCategoría: ' + element.categoria +
            '\nCantidad: ' + element.cantidad +
            '\nPrecio: ' + element.precio +
            '\nTotal: ' + (element.precio * element.cantidad) +
            '\n\n';
    });
    return reporte;
}

function filtrarProductosPorCategoria(categoria) {
    let reporte = '';
    Object.entries(productos).forEach(([nombre, element]) => {
        if (element.categoria === categoria) {
            reporte += 'Producto: ' + nombre +
                '\nCategoría: ' + element.categoria +
                '\nCantidad: ' + element.cantidad +
                '\nPrecio: ' + element.precio +
                '\nTotal: ' + (element.precio * element.cantidad) +
                '\n\n';
        }
    });
    return reporte || `No hay productos en la categoría "${categoria}".`;
}
})();

// Evento para el botón de agregar
window.addEventListener('load', function() {
    document.getElementById('botonAgregar').addEventListener('click', function(e) {
        e.preventDefault(); // Evitar el envío del formulario
        const nombre = document.getElementById('nombreProducto').value;
        const cantidad = parseInt(document.getElementById('cantidadProducto').value);
        const precio = parseFloat(document.getElementById('precioProducto').value);
        const categoria = document.getElementById('categoriaProducto').value;

        mercadillo.agregarProducto(nombre, cantidad, precio, categoria);
    });

    document.getElementById('botonEliminar').addEventListener('click', function(e) {
        e.preventDefault();
        const nombre = document.getElementById('nombreEliminar').value;
        mercadillo.eliminarProducto(nombre);
    });

    document.getElementById('botonActualizar').addEventListener('click', function(e) {
        e.preventDefault();
        const nombre = document.getElementById('nombreActualizar').value;
        const cantidad = parseInt(document.getElementById('cantidadActualizar').value);
        mercadillo.actualizarInventario(nombre, cantidad);
    });

    document.getElementById('botonBuscar').addEventListener('click', function(e) {
        e.preventDefault();
        const nombre = document.getElementById('nombreBuscar').value;
        const resultado = mercadillo.buscarProducto(nombre);
        document.getElementById('resultadoBuscar').textContent = resultado ? 
            `Producto encontrado:\nNombre: ${nombre}\nCantidad: ${resultado.cantidad}\nPrecio: ${resultado.precio}\nCategoría: ${resultado.categoria}` : 
            "Producto no encontrado";
    });

    document.getElementById('botonFiltrar').addEventListener('click', function(e) {
        e.preventDefault();
        const categoria = document.getElementById('categoriaFiltrar').value;
        const resultado = mercadillo.filtrarProductosPorCategoria(categoria);
        document.getElementById('resultadoFiltrar').textContent = resultado;
    });

    document.getElementById('botonImprimir').addEventListener('click', function(e) {
        e.preventDefault();
        const resultado = mercadillo.imprimirInventario();
        document.getElementById('resultadoInventario').textContent = resultado;
    });

    document.getElementById('botonOrdenar').addEventListener('click', function(e) {
        e.preventDefault();
        const productosOrdenados = mercadillo.ordenarProductosPorPrecio();
        const resultado = productosOrdenados.map(producto => `Producto: ${producto.nombre}, Precio: ${producto.precio}`).join('\n');
        document.getElementById('resultadoOrdenado').textContent = resultado;
    });
});

