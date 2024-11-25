let alumnos = [
    {
        "nombre": "Juan Pérez",
        "asignaturas": [
            { "modulo": "DWEC", "nota": 8.5 },
            { "modulo": "DIW", "nota": 7.0 },
            { "modulo": "DWES", "nota": 9.0 },
            { "modulo": "DAW", "nota": 6.5 }
        ]
    },
    {
        "nombre": "María Gómez",
        "asignaturas": [
            { "modulo": "DWEC", "nota": 3 },
            { "modulo": "DIW", "nota": 2.0 },
            { "modulo": "DWES", "nota": 6.5 },
            { "modulo": "DAW", "nota": 9.0 }
        ]
    },
    {
        "nombre": "Carlos Sánchez",
        "asignaturas": [
            { "modulo": "DWEC", "nota": 6.0 },
            { "modulo": "DIW", "nota": 7.5 },
            { "modulo": "DWES", "nota": 8.0 },
            { "modulo": "DAW", "nota": 7.0 }
        ]
    }
];


function promociona(alumnos) {
    alumnos.forEach(alumno => {
        let suma = alumno.asignaturas.reduce((suma, asignatura) => suma + asignatura.nota, 0);
        let media = suma / alumno.asignaturas.length;
        let promociona = alumno.asignaturas.every(asignatura => asignatura.nota >= 5);
        alumno.media = media;
        alumno.promociona = promociona;
    });
}
promociona(alumnos);
function listarPromocionan(alumnos) {
    let resultado = "";
    alumnos.forEach(alumno=>{
      if(alumno.promociona===true){
        resultado+=`${alumno.nombre}-${alumno.media}\n`;
      }
    })
    alert(resultado);
}
function listarNoPromocionan(alumnos) {
    let resultado = "";
    alumnos.forEach(alumno=>{
      if(alumno.promociona===false){
        let pendientes="";
        alumno.asignaturas.forEach(asignatura=>{
            if(asignatura.nota<5){
                pendientes+=asignatura.modulo+", ";
            }  
        })      
        resultado+=`${alumno.nombre}-Pendientes[${pendientes}]\n`;
      }
    })
    alert(resultado);
}
listarPromocionan(alumnos);
listarNoPromocionan(alumnos);


