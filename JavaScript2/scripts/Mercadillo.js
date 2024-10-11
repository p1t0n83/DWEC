// array asociado
const productos = []

//funcion para agregar un producto si no esta ya dentro
function agregarProducto(nombre, cantidad, precio, categoria) {
    //con este if gracias la in se busca la clave que sea igual al nombre,
    //nos ahorramos el hacer un for
    if (nombre in productos) {
        alert("YA EXISTE EL PRODUCTO");
        //si existe salimos y no hace mas
        return;
    }
    //si no existe se crea el producto
    let producto = {
        cantidad: cantidad,
        precio: precio,
        categoria: categoria,
    }
    //si no existe se crea una poscion en el array de key 'nombre'
    // y de contenido el producto pasado por parametro 
    productos[nombre] = producto;
}

function eliminarProducto(nombre) {
    //un if que si encuentra el producto procede a borrarlo
    if (nombre in productos) {
        //con delete borramos lo que se encuentre en la posicion pasada por paramentro
        delete (productos[nombre]);
        alert("Borra chat");
        //sino manda un mensaje de que no pudo
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
            alert("SE INCREMENTO LA CANTIDAD");
        }
        else if (cantidad < 0) {
            if (productos[nombre].cantidad + cantidad > 0) {
                alert("SE DECREMENTO LA CANTIDAD");
            } else if (productos[nombre].cantidad + cantidad < 0) {
                productos[nombre].cantidad = 0;
                alert("HAY QUE REPONER");
            }
        }
    } else {
        alert("NO SE ENCONTRO EL PRODUCTO");
    }
};

function ordenarProductosPorPrecio() {
    return Object.entries(productos)
    //los ... es porque es un array de valores
    .map(([nombre, valor]) => ({nombre, ...valor}))
    .sort((a, b) => a.precio - b.precio);

}

  function imprimirInventarioOrdenado(array2) {
    let reporte = '';
    Object.entries(array2).forEach(([nombre, element]) => {
      reporte += 'Producto: ' + element.nombre +
        '\nCategoría: ' + element.categoria +
        '\nCantidad: ' + element.cantidad +
        '\nPrecio: ' + element.precio +
        '\nTotal: ' + (element.precio * element.cantidad) +
        '\n\n';
    });
    return reporte; // Devuelve el informe
  }; 

  function imprimirInventario() {
    let reporte = '';
    Object.entries(productos).forEach(([nombre, element]) => {
      reporte += 'Producto: ' + element.nombre +
        '\nCategoría: ' + element.categoria +
        '\nCantidad: ' + element.cantidad +
        '\nPrecio: ' + element.precio +
        '\nTotal: ' + (element.precio * element.cantidad) +
        '\n\n';
    });
    return reporte; // Devuelve el informe
  };
     
  function filtrarProductosPorCategoria(){
    
  }


//probamos los metodos
agregarProducto("leche", 2, 5, "comida");
agregarProducto("patata", 5, 8, "comida");

eliminarProducto("patata");
eliminarProducto("leche");
eliminarProducto("leche");

agregarProducto("leche", 2, 10, "comida");
agregarProducto("patata", 2, 5, "comida");
agregarProducto("agua",1,200,"comida");

let producto = buscarProducto("patata");
if (producto !== null) {
    alert(`Producto: patata\n
        Cantidad: ${producto.cantidad}\n
        Precio: ${producto.precio}€\n
        Categoría: ${producto.categoria}`);
}

actualizarInventario("patata", -6);


if (producto !== null) {
    alert(`Producto: patata\n
        Cantidad: ${producto.cantidad}\n
        Precio: ${producto.precio}€\n
        Categoría: ${producto.categoria}`);
}




let array2=ordenarProductosPorPrecio();
let informe2=imprimirInventarioOrdenado(array2);
alert(informe2);



  
let informe=imprimirInventario();
alert(informe);


