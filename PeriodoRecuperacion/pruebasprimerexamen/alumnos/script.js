let alumnos = [
  { nombre: "Iker", nota: 5, modulo: "DWES", convocatorias: 2 },
  { nombre: "Ane", nota: 8, modulo: "DWEC", convocatorias: 1 },
  { nombre: "Jon", nota: 4, modulo: "DWES", convocatorias: 3 },
  { nombre: "Miren", nota: 9, modulo: "DWEC", convocatorias: 2 },
  { nombre: "Unai", nota: 6, modulo: "DWES", convocatorias: 4 },
  { nombre: "Leire", nota: 7, modulo: "DWEC", convocatorias: 1 },
];

function suspensos() {
  let suspensos = [];
  alumnos.forEach((alumno) => {
    if (alumno.nota < 5) {
      suspensos.push({
        nombre: alumno.nombre,
        nota: alumno.nota,
        modulo: alumno.modulo,
      });
    }
  });
  suspensos.sort((a, b) => a.nombre.localeCompare(b.nombre));
  return suspensos;
}

function estadisticasModulo() {
    let sumaNotasS=0;
    let sumaNotasC=0;
    let sumaConvocatoriasC=0;
    let sumaConvocatoriasS=0;
  let modulos = [
    { modulo: "DWES", alumnos: 0, media: 0,convocatorias:0 },
    { modulo: "DWEC", alumnos: 0, media: 0, convocatorias:0 },
  ];
  alumnos.forEach((alumno)=>{
     if(alumno.modulo==="DWES"){
        modulos[0].alumnos++;
        sumaNotasS+=alumno.nota;
        sumaConvocatoriasS+=alumno.convocatorias;
     }else{
        modulos[1].alumnos++;
        sumaNotasC+=alumno.nota;
        sumaConvocatoriasC+=alumno.convocatorias;
     }
  });

  modulos[0].media=sumaNotasS/modulos[0].alumnos;
  modulos[0].convocatorias=sumaConvocatoriasS/modulos[0].alumnos;
  modulos[1].media=sumaNotasC/modulos[1].alumnos;
  modulos[1].convocatorias=sumaConvocatoriasC/modulos[1].alumnos;
}


function devolverFormatoJSON(){
return JSON.stringify(alumnos);
}

function cargarCadenaJSON(cadena){
        try{
            const datos=JSON.parse(cadena) ;
            if (Array.isArray(datos)) {
                alumnos=datos;
             }else{
                console.error("El JSON no contiene un array válido.");
            }
        }catch(error){
            console.error('Error al analizar el JSON',error);
        }
}



// Probar devolverFormatoJSON
console.log("JSON generado desde el array de alumnos:");
const jsonAlumnos = devolverFormatoJSON(true); // Generar JSON con formato legible
console.log(jsonAlumnos);

// Probar cargarCadenaJSON con un JSON válido
console.log("\nCargando un JSON válido...");
const nuevoJSON = `
[
  { "nombre": "Laura", "nota": 7, "modulo": "DWES", "convocatorias": 2 },
  { "nombre": "Pedro", "nota": 4, "modulo": "DWEC", "convocatorias": 3 }
]
`;
cargarCadenaJSON(nuevoJSON);
console.log("Array de alumnos actualizado:");
console.log(alumnos);

// Probar cargarCadenaJSON con un JSON no válido (no es un array)
console.log("\nIntentando cargar un JSON no válido...");
const jsonInvalido = '{ "nombre": "Carlos", "nota": 6, "modulo": "DWES", "convocatorias": 1 }';
cargarCadenaJSON(jsonInvalido);

// Probar cargarCadenaJSON con una cadena que no es JSON
console.log("\nIntentando cargar una cadena que no es JSON...");
const cadenaNoJSON = "Esto no es un JSON";
cargarCadenaJSON(cadenaNoJSON);