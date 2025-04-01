let alumnos = [
    {
        nombre: "iker",
        nota: 5,
        modulo: "DWEC",
        convocatorias: 2
    },
    {
        nombre: "Joel",
        nota: 4,
        modulo: "DWES",
        convocatorias: 2
    },
    {
        nombre: "Paula",
        nota: 2,
        modulo: "DWES",
        convocatorias: 2,
    },
    {
        nombre: "Adrian",
        nota: 3,
        modulo: "DWEC",
        convocatorias: 2
    },
    {
        nombre: "Fran",
        nota: 5,
        modulo: "DWES",
        convocatorias: 2
    },
    {
        nombre: "Victor",
        nota: 2,
        modulo: "DWES",
        convocatorias: 3
    }
];

function listarSuspensos() {
    let suspensos = [];
    alumnos.forEach(alumno => {
        if (alumno.nota < 5) {
            suspensos.push({
                nombre: alumno.nombre,
                nota: alumno.nota,
                modulo: alumno.modulo
            });
        }
    });
    suspensos.sort((a, b) => { return a.nombre.localeCompare(b.nombre); });
    console.log(suspensos);
}

function estadisticasModulo() {
    let modulos = [{
        modulo: "DWES",
        alumnos: 0,
        notaMedia: 1,
        convocatoriasMedias: 1
    }
        , {
        modulo: "DWEC",
        alumnos: 0,
        notaMedia: 1,
        convocatoriasMedias: 1
    }];
    let sumaNotasS = 0;
    let sumaNotasC = 0;
    let sumaConvocatoriasS = 0;
    let sumaConvocatoriasC = 0;

    alumnos.forEach(alumno => {
        if (alumno.modulo == "DWES") {
            modulos[0].alumnos++;
            sumaNotasS += alumno.nota;
            sumaConvocatoriasS += alumno.convocatorias;
        } else {
            modulos[1].alumnos++;
            sumaNotasC += alumno.nota;
            sumaConvocatoriasC += alumno.convocatorias;
        }
    });

    modulos[0].notaMedia = (sumaNotasS / modulos[0].alumnos);
    modulos[1].notaMedia = (sumaNotasC / modulos[1].alumnos);
    modulos[0].convocatoriasMedias = (sumaConvocatoriasS / modulos[0].alumnos);
    modulos[1].convocatoriasMedias = (sumaConvocatoriasC / modulos[1].alumnos);
    console.log("----------------------------------");
    console.log(modulos);
    console.log("----------------------------------");
}

function formatoJSON() {
    for (let i = 0; i < alumnos.length; i++) {
        let fila = alumnos[i].join("-");
        console.log(fila);
    }
}

listarSuspensos();
estadisticasModulo();
formatoJSON();