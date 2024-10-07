'use strict';

// Definir el JSON inicial de alumnos
let alumnos = [
    {
        nombre: "Iker",
        asignaturas: [
            { modulo: "DWEC", nota: 7 },
            { modulo: "DIW", nota: 5 },
            { modulo: "DWES", nota: 8 },
            { modulo: "DAW", nota: 6 }
        ]
    },
    {
        nombre: "Angel",
        asignaturas: [
            { modulo: "DWEC", nota: 4 },
            { modulo: "DIW", nota: 6 },
            { modulo: "DWES", nota: 3 },
            { modulo: "DAW", nota: 5 }
        ]
    },
    {
        nombre: "Elsa",
        asignaturas: [
            { modulo: "DWEC", nota: 9 },
            { modulo: "DIW", nota: 8 },
            { modulo: "DWES", nota: 9 },
            { modulo: "DAW", nota: 7 }
        ]
    }
];

// Función para calcular si un alumno promociona y su media
function actualizarAlumnos(alumnos) {
    //foreach para recorrer el json
    for(let alumno of alumnos){
        let totalNotas = 0;
        let aprobadas = true;
        let pendientes = [];

        for(let alumno of alumnos){
            totalNotas += alumno.asignatura.nota;
            if (alumno.asignatura.nota < 5) {
                aprobadas = false;
                pendientes.push(asignatura.modulo);
            }
        };

        alumno.media = totalNotas / alumno.asignaturas.length;
        alumno.promociona = aprobadas;
        alumno.pendientes = pendientes;
    };
}

// Función para imprimir los alumnos que promocionan
function imprimirPromocionan(alumnos) {
    console.log("Alumnos que promocionan:");
    let index=0;
    for(let alumno of alumnos){
        if (alumno.promociona) {
            console.log(`${index + 1} - ${alumno.nombre} - Media: ${alumno.media.toFixed(2)}`);
        }
        index++;
    };
}

// Función para imprimir los alumnos que no promocionan
function imprimirNoPromocionan(alumnos) {
    console.log("Alumnos que no promocionan:");
    let index=0;
    for(let alumno of alumnos){
        if (!alumno.promociona) {
            console.log(`${index + 1} - ${alumno.nombre} - Pendientes: [${alumno.pendientes.join(", ")}]`);
        }
        index++;
    };
}

// Actualizar los datos de los alumnos
actualizarAlumnos(alumnos);

// Imprimir los alumnos que promocionan
imprimirPromocionan(alumnos);

// Imprimir los alumnos que no promocionan
imprimirNoPromocionan(alumnos);
