let alumnos = [{ nombre: "iker", edad: 19 }, { nombre: "Marcos", edad: 20 }];
alumnos.sort((a, b) => { return a.edad < b.edad });
console.log(alumnos);