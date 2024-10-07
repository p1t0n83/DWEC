'use strict';

// Array para almacenar los trabajadores
let trabajadores = [{
    codigo: 'E01',
    nombre: 'Iker Garcia Iturri',
    categoria: 3,
    contratacion: 1988

}, {
    codigo: 'E02',
    nombre: 'Angel',
    categoria: 2,
    contratacion: 1988
}
];
let incremento = 3;
// Contador para generar códigos únicos

// Función para listar trabajadores
function listarTrabajadores(trabajadores) {
    for (let i = 0; i < listarTrabajadores.length; i++) {
        console.log(`Código: ${trabajadores[i].codigo},
             Nombre: ${trabajadores[i].nombre}, 
             Categoría: ${trabajadores[i].categoria},
             Contratación: ${trabajadores[i].contratacion}`);
    }
}


// Función para crear un trabajador
function crearTrabajador(trabajadores) {
    //con padStart añadimos caracteres al inicio de una cadena
    let codigo = `E0.${incremento++}`; // Generar el código único
    contador++;
    let nombre = prompt('Introduce el nombre');
    let categoria = prompt('Introduce la categoria(1,2 o 3)');
    let anio = prompt('Introduce el año en el que fue contratado');


    // Crear el trabajador como un objeto
    let trabajador = {};
    trabajador.codigo = codigo;
    trabajador.nombre = nombre;
    trabajador.categoria = categoria;
    trabajador.contratacion = anio;

    // Almacenar el trabajador en el array
    trabajadores[trabajadores.length] = trabajador;
}

// Función para modificar un trabajador
function modificarTrabajador(trabajadores) {
    //pedimos el codigo a buscar
    let codigo = prompt('Introduce el codigo del trabajador');
    let trabajadorEncontrado;   
    //un for que recorra todo el array hasta que encuentre el trabajador        
    for (let i = 0; i < trabajadores.length; i++) {
        //si se encuentra
        if (trabajadores.codigo === codigo) {
            //si lo encuentra sale del for y trabajador toma la posicion
            trabajadorEncontrado = i;
            break;
        } 
        //si no se encuentra sigue
    if(trabajadorEncontrado===undefined){
        return;
    }
    }
   
    trabajadorEncontrado.nombre=prompt('Introduce el nombre:',trabajadorEncontrado.nombre);
    trabajadorEncontrado.categoria=parseInt(prompt('introduce la categoria:'));
    trabajadorEncontrado.contratacion=ParseInt(prompt('Introduce año de contratacion:',trabajadorEncontrado.contratacion));   
}

// Función para calcular nóminas
function calcularNomina(trabajador) {
    let sueldoBase;
    switch(trabajador.categoria){
        case 1:
            sueldoBase=1100;
            break;
        case 2:
            sueldoBase=1400;
            break;
        case 3: 
            sueldoBase=1900;
            break;
    }
    
    aniosContratado=new Date().getFullYear()-trabajador.contratacion;
    let plus=sueldoBase*0.04;
    let sueldoFinal=sueldoBase+(plus*aniosContratado);
    return sueldoFinal;
}

function calcularNominas(trabajadores){
    let totalCat1;
    let totalCat2;
    let totalCat3;
    for( let trabajador of trabajadores){
        switch(trabajador.categoria){
            case 1:
                totalCat1+=calcularNomina(trabajador);
                break;
            case 2:
                totalCat2+=calcularNomina(trabajador);
                break;
            case 3:
                totalCat3+=calcularNomina(trabajador);
                break;
        }
    }
    //mostramos el total de las nominas, con las comillas inversas podemos meter variables entre ${}
    total=totalCat1+totalCat2+totalCat3;
    alert(`Total de sueldo de las nominas de la categoria 1 ${totalCat1} \n
        Total de sueldo de las nominas de la categoria 2 ${totalCat2} \n
        Total de sueldo de las nominas de la categoria 3 ${totalCat3} \n
        Total de sueldo de todas las nominas de la empresa ${total}\n`);
}

// Función para mostrar el menú
function mostrarMenu() {
    let opcion;

    do {
        opcion = prompt("Seleccione una opción:\n1. Crear Trabajador\n2. Listar Trabajadores\n3. Borrar Trabajador\n4. Modificar Trabajador\n5. Calcular Nóminas\n6. Salir");

        switch (opcion) {
            case '1':
                let nombre = prompt("Nombre del trabajador:");
                let categoria = parseInt(prompt("Categoría (1, 2, 3):"));
                let contratacion = parseInt(prompt("Año de contratación:"));
                (crearTrabajador(nombre, categoria, contratacion));
                break;
            case '2':
                listarTrabajadores();
                break;
            case '3':
                borrarTrabajador();
                break;
            case '4':
                modificarTrabajador();
                break;
            case '5':
                calcularNominas();
                break;
            case '6':
                alert("Saliendo del programa.");
                break;
            default:
                alert("Opción no válida, por favor intenta de nuevo.");
                break;
        }
    } while (opcion !== '6');
}

// Iniciar el programa
mostrarMenu();
