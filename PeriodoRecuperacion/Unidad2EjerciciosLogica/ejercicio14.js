let alumnos = [
    {
        nombre: "iker",
        asignaturas: [
            asignatura = { modulo: "DWES", nota: 5 },
            asignatura = { modulo: "DWEC", nota: 5 },
            asignatura = { modulo: "DIW", nota: 5 },
            asignatura = { modulo: "DAW", nota: 5 },
        ]
    },
    {
        nombre: "paula",
        asignaturas: [
            asignatura = { modulo: "DWES", nota: 2 },
            asignatura = { modulo: "DWEC", nota: 3 },
            asignatura = { modulo: "DIW", nota: 4 },
            asignatura = { modulo: "DAW", nota: 4 },
        ]
    },
    {
        nombre: "elsa",
        asignaturas: [
            asignatura = { modulo: "DWES", nota: 1 },
            asignatura = { modulo: "DWEC", nota: 1 },
            asignatura = { modulo: "DIW", nota: 1 },
            asignatura = { modulo: "DAW", nota: 1 },
        ]
    }
];

function promocionar(alumnos) {
    for (let alumno of alumnos) {
        alumno.promociona = true;
        let suma = 0;
        for (let i = 0; i < alumno.asignaturas.length; i++) {
            suma += alumno.asignaturas[i].nota;
            if (alumno.asignaturas[i].nota < 5) {
                alumno.promociona = false;
            }
        }
        alumno.media = suma / alumno.asignaturas.length;

    }
}

function imprimirPromocionados(alumnos) {
    let promocionados = "Los alumnos que han pasado son:\n";
    for (let index in alumnos) {
        if (alumnos[index].promociona) {
            promocionados += "Indice: " + index + ". Nombre: " + alumnos[index].nombre + ". Media: " + alumnos[index].media;
        }
    }
    console.log(promocionados);
}

function imprimirNoPromocionados(alumnos) {
    let promocionados = "Los alumnos que no han pasado son:\n";
    for (let index in alumnos) {
        if (!alumnos[index].promociona) {
            promocionados += "Indice: " + index + ". Nombre: " + alumnos[index].nombre + ". Pendientes: " + suspensas(alumnos[index].asignaturas) + "\n";
        }
    }
    console.log(promocionados);
}
promocionar(alumnos);
imprimirPromocionados(alumnos);
function suspensas(asignaturas) {
    let suspensas = "[";
    for (let asignatura of asignaturas) {
        suspensas += asignatura.nota < 5 ? asignatura.modulo + "," : "";
    }
    suspensas.substring();
    return suspensas += "]";
}
imprimirNoPromocionados(alumnos);