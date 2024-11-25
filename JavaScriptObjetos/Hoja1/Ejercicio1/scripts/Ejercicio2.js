// primera parte, funcion constructora
/*
function Animal(tipo, nombre) {
    this.tipo = tipo;
    this.nombre = nombre;
    this.comer = function () {
        alert(`${nombre} esta comiendo`);
    }
    this.dormir = function () {
        alert(`${nombre} esta durmiendo`);
    }
    this.hacerRuido = function () {
        if (tipo === "perro") {
            alert(`${nombre} hace guau`);
        } else if (tipo === "gato") {
            alert(`${nombre} hace miau`);
        } else {
            alert(`${nombre} hace ruido`);
        }
    }
}
const animal1 = new Animal('gato', 'nigga');
animal1.hacerRuido();
animal1.dormir();
animal1.comer();
animal1.hacerRuido();
*/
/*
//segunda parte
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    comer() {
        alert(`${this.nombre} esta comiendo`);
    }
    dormir() {
        alert(`${this.nombre} esta durmiendo`);
    }
    hacerRuido() {
        alert(`${this.nombre} hace ruido`);
    }
}

class Gato extends Animal {
    constructor(nombre) {
        super(nombre);
    }
    hacerRuido() {
        alert(`${this.nombre} hace miau miau`);
    }
}
class Perro extends Animal {
    constructor(nombre) {
        super(nombre);
    }
    hacerRuido() {
        alert(`${this.nombre} hace guau guau`);
    }
}
let perro1 = new Perro('alberto');
let gato1 = new Gato('elsa');
let animal1 = new Animal('iker');
perro1.hacerRuido();
gato1.hacerRuido();
animal1.hacerRuido();
*/
//tercera parte
//herencia de funciones 
function Animal(tipo, nombre) {
    this.tipo = tipo;
    this.nombre = nombre;
    this.comer = function () {
        alert(`${nombre} esta comiendo`);
    }
    this.dormir = function () {
        alert(`${nombre} esta durmiendo`);
    }
    this.hacerRuido = function () {
        alert(`${nombre} hace ruido`);
    }
}


