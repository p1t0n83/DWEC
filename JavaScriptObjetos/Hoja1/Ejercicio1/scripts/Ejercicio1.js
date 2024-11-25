//objeto literal
/*
const persona = {
    nombre: 'iker',
    nacimiento: new Date('10/12/2004'),
    hobbies: ['leer', 'correr', 'programar'],
    direccion: {
        calle: 'Calle Falsa 123',
        ciudad: 'Madrid'
    },
    saludar: function () {
        console.log(`Hola, mi nombre es ${this.nombre} y me gusta ${this.hobbies}`);
    }
};
persona.saludar();
*/
//funcion constructora
/*
function Persona(nombre, nacimiento, hobbies) {
    this.nombre = nombre;
    this.nacimiento = nacimiento;
    this.hobbies = hobbies;
    getEdad = function () {
        let hoy = new Date();
        return (hoy.getFullYear() - nacimiento.getFullYear());
    }
    this.Saludar = function () {
        alert(`Hola me llamo ${nombre} y me gusta ${hobbies} y tengo ${getEdad()} años`);
    }

}
let hobbies = ["Jugar videojuegos", "Escuchar musica", "Quedar con mis amigos","matar politicos"];
const persona1 = new Persona('iker', new Date('10/12/2004'), hobbies);
persona1.Saludar();
*/
//ES6

class Persona {
    constructor(nombre, nacimiento, hobbies) {
        this.nombre = nombre;
        this.nacimiento = nacimiento;
        this.hobbies = hobbies;
    }

    get edad() {
        let hoy = new Date();
        return hoy.getFullYear() - this.nacimiento.getFullYear();
    }

    saludar() {
        alert(`Hola, mi nombre es ${this.nombre} y me gusta ${this.hobbies}`);
    }
}
let hobbies = ["Jugar videojuegos", "Escuchar musica", "Quedar con mis amigos"];
const persona1 = new Persona('iker', new Date('10/12/2004'), hobbies);
persona1.saludar();
alert(persona1.edad);
