'use strict';

(function(){
// Array para almacenar los trabajadores
let trabajadores = []; 
let contador = 1; // Contador para generar códigos únicos

// Función para crear un trabajador
function crearTrabajador(nombre, categoria, contratacion) {
    let codigo = "E" + String(contador).padStart(2, '0'); // Generar el código único
    contador++;

    let salarioBase;
    switch (categoria) {
        case 1:
            salarioBase = 1100;
            break;
        case 2:
            salarioBase = 1400;
            break;
        case 3:
            salarioBase = 1900;
            break;
        default:
            alert("Categoría no válida");
            return;
    }

    // Crear el trabajador como un objeto
    let trabajador = {
        codigo: codigo,
        nombre: nombre,
        categoria: categoria,
        contratacion: contratacion,
        salarioBase: salarioBase
    };

    // Almacenar el trabajador en el array
    trabajadores.push(trabajador);
}

// Función para listar trabajadores
function listarTrabajadores() {
    if (trabajadores.length === 0) {
        console.log("No hay trabajadores registrados.");
        return;
    }

    for (let trabajador of trabajadores) {
        console.log(`Código: ${trabajador.codigo}, Nombre: ${trabajador.nombre}, Categoría: ${trabajador.categoria}, Salario: ${trabajador.salarioBase}€, Contratación: ${trabajador.contratacion}`);
    }
}

// Función para borrar un trabajador
function borrarTrabajador() {
    let codigo = prompt("Introduce el código del trabajador que deseas borrar (ej. E01):");

    let index = trabajadores.findIndex(trabajador => trabajador.codigo === codigo);

    if (index === -1) {
        alert("No se encontró un trabajador con ese código.");
        return;
    }

    // Confirmar la eliminación
    if (confirm(`¿Deseas borrar al trabajador ${trabajadores[index].nombre}?`)) {
        trabajadores.splice(index, 1); // Eliminar el trabajador del array
        alert(`Trabajador con código ${codigo} ha sido borrado.`);
    } else {
        alert("Eliminación cancelada.");
    }
}

// Función para modificar un trabajador
function modificarTrabajador() {
    let codigo = prompt("Introduce el código del trabajador que deseas modificar (ej. E01):");
    
    let index = trabajadores.findIndex(trabajador => trabajador.codigo === codigo);
    
    if (index === -1) {
        alert("No se encontró un trabajador con ese código.");
        return;
    }

    let trabajadorActual = trabajadores[index];

    let nuevoNombre = prompt(`Introduce el nuevo nombre (actual: ${trabajadorActual.nombre}):`, trabajadorActual.nombre);
    let nuevaCategoria = prompt(`Introduce la nueva categoría (actual: ${trabajadorActual.categoria}):`, trabajadorActual.categoria);
    let nuevaContratacion = prompt(`Introduce el nuevo año de contratación (actual: ${trabajadorActual.contratacion}):`, trabajadorActual.contratacion);
    
    // Actualizar los datos del trabajador
    trabajadorActual.nombre = nuevoNombre;
    trabajadorActual.categoria = parseInt(nuevaCategoria); // Convertir a número
    trabajadorActual.contratacion = parseInt(nuevaContratacion); // Convertir a número

    alert(`Trabajador con código ${codigo} ha sido modificado.`);
}

// Función para calcular nóminas
function calcularNominas() {
    let resumenNominas = {};
    let totalNominas = 0;

    for (let trabajador of trabajadores) {
        let antiguedad = new Date().getFullYear() - trabajador.contratacion;
        let salarioConAntiguedad = trabajador.salarioBase + (trabajador.salarioBase * 0.04 * antiguedad);
        
        // Agrupar por categoría
        if (!resumenNominas[trabajador.categoria]) {
            resumenNominas[trabajador.categoria] = {
                total: 0,
                trabajadores: []
            };
        }
        
        resumenNominas[trabajador.categoria].total += salarioConAntiguedad;
        resumenNominas[trabajador.categoria].trabajadores.push(trabajador.nombre);
        totalNominas += salarioConAntiguedad;
    }

    // Mostrar resumen
    console.log("Resumen de Nóminas:");
    for (let categoria in resumenNominas) {
        console.log(`Categoría ${categoria}:`);
        console.log(`Total Nómina: ${resumenNominas[categoria].total.toFixed(2)}€`);
        console.log(`Trabajadores: ${resumenNominas[categoria].trabajadores.join(", ")}`);
    }
    console.log(`Total de Nóminas de la Empresa: ${totalNominas.toFixed(2)}€`);
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
                crearTrabajador(nombre, categoria, contratacion);
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
}());
