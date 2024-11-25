/** 
Crea un programa en el que crees 4 variables: 2 cadenas y 2 numeros, con los siguientes valores:tu nombre, tu apellido, tu edad y tu año de nacimiento.
    Muestra en un alert las variables indroducidas con formato clave valor en donde los valores cadena aparezcan envueltos entre comillas dobles y los valores numericos entre comillas simples.
    Muestra en un alert tu nombre y apellidos separados por un salto de linea.
    Muestra en un alert la suma de las variables edad y año de nacimiento.
    Muestra en un alert la suma de todas las variables */
    'use strict';
    let nombre="iker";
    let apellidos="garcia iturri";
    let edad=19;
    let fechaNacimiento=2004;
    //Muestra en un alert las variables indroducidas con formato clave valor en donde los valores cadena aparezcan envueltos entre comillas dobles y los valores numericos entre comillas simples.
    alert('"'+nombre+apellidos +'"'+" Nacido en "+"'"+fechaNacimiento+"'"+" Tiene '"+edad+"' años");
    //Muestra en un alert tu nombre y apellidos separados por un salto de linea.
    alert(nombre+'\n'+apellidos);
    //Muestra en un alert la suma de las variables edad y año de nacimiento.
    alert(edad+fechaNacimiento);
    //Muestra en un alert la suma de todas las 
    alert(edad+fechaNacimiento+nombre+apellidos);