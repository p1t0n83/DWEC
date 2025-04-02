/**Funcion constructora 

function Persona(nombre,nacimiento,hobbies){
     this.nombre=nombre;
     this.nacimiento=nacimiento;
     this.hobbies=hobbies;

    this.edad=function(){
        let hoy=new Date();
        
        return hoy.getFullYear()-this.nacimiento.getFullYear();
    }

    this.saludar=function(){
        let texto=`Hola, me llamo ${this.nombre} y me gusta:\n`;
        for(let i=0;i<this.hobbies.length;i++){
            texto+=this.hobbies[i]+" \n";
        }
        return texto;
    
    }}
let persona=new Persona("Iker",new Date("2004-12-10"),["Jugar videojuegos","Comer","Vivir la vida"]);

console.log(persona.saludar());
console.log(persona.edad());
*/

/**Objeto literal

const persona={
    nombre:'iker',
    nacimiento:new Date("2004-12-10"),
    hobbies:["Jugar videojuegos","Comer","Vivir la vida"],
    edad:function(){
         return new Date().getFullYear()-this.nacimiento.getFullYear();
    },
    saludar: function(){
        let texto=`Hola, me llamo ${this.nombre} y me gusta:\n`;
        for(let i=0;i<this.hobbies.length;i++){
            texto+=this.hobbies[i]+" \n";
        }
        return texto;
    }
}

console.log(persona.saludar());
console.log(persona.edad()); */

/** ES6 */

class Persona{
    constructor(nombre,nacimiento,hobbies){
         this.nombre=nombre;
         this.nacimiento=nacimiento;
         this.edad=new Date().getFullYear()-nacimiento.getFullYear();
         this.hobbies=hobbies;
    }

    saludar(){
        let texto=`Hola, me llamo ${this.nombre} y me gusta:\n`;
        for(let i=0;i<this.hobbies.length;i++){
            texto+=this.hobbies[i]+" \n";
        }
        return texto;
    }
}


let persona=new Persona("Iker",new Date("2004-12-10"),["Jugar videojuegos","Comer","Vivir la vida"]);
console.log(persona.saludar());
console.log(persona.edad);