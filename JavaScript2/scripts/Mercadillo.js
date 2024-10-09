    // array asociado
    let productos = {}
    
    //funcion para agregar un producto si no esta ya dentro
    function agregarProducto(nombre,cantidad,precio,categoria){
        //con este if gracias la in se busca la clave que sea igual al nombre,
        //nos ahorramos el hacer un for
        if(nombre in productos){
            alert("YA EXISTE EL PRODUCTO");
            //si existe salimos y no hace mas
            return;
        }
    //si no existe se crea el producto
    let producto={
        cantidad:cantidad,
        precio:precio,
        categoria:categoria,
    }
    //si no existe se crea una poscion en el array de key 'nombre'
    // y de contenido el producto pasado por parametro 
    productos[nombre]=producto;
}

    function borrarProducto(nombre){
        //un if que si encuentra el producto procede a borrarlo
        if(nombre in productos){
            //con delete borramos lo que se encuentre en la posicion pasada por paramentro
            delete(productos[nombre]);
            alert("Borra chat");
            //sino manda un mensaje de que no pudo
        }else{
            alert("NO SE PUEDE BORRAR, NO EXISTE");
        }
    }

    function buscarProducto(nombre){
        if(nombre in productos){
            return productos[nombre];
        }else{
            alert("NO SE PUEDE MOSTRAR EL PRODUCTO PORQUE NO SE ENCUENTRA");
            return null;
        }
    }



    //probamos los metodos
    agregarProducto("leche",2,5,"comida");
    agregarProducto("patata",5,8,"comida");

    borrarProducto("patata");
    borrarProducto("leche");
    borrarProducto("leche");

    agregarProducto("leche",2,5,"comida");
    agregarProducto("patata",2,5,"comida");

    let producto=buscarProducto("patata");
    if(producto!==null){
    alert(`Producto: patata\n
        Cantidad: ${producto.cantidad}\n
        Precio: ${producto.precio}€\n
        Categoría: ${producto.categoria}`);
    }

