function morse(texto) {
    let morse = [
        { char: 'A', morse: '.-' },
        { char: 'B', morse: '-...' },
        { char: 'C', morse: '-.-.' },
        { char: 'D', morse: '-..' },
        { char: 'E', morse: '.' },
        { char: 'F', morse: '..-.' },
        { char: 'G', morse: '--.' },
        { char: 'H', morse: '....' },
        { char: 'I', morse: '..' },
        { char: 'J', morse: '.---' },
        { char: 'K', morse: '-.-' },
        { char: 'L', morse: '.-..' },
        { char: 'M', morse: '--' },
        { char: 'N', morse: '-.' },
        { char: 'O', morse: '---' },
        { char: 'P', morse: '.--.' },
        { char: 'Q', morse: '--.-' },
        { char: 'R', morse: '.-.' },
        { char: 'S', morse: '...' },
        { char: 'T', morse: '-' },
        { char: 'U', morse: '..-' },
        { char: 'V', morse: '...-' },
        { char: 'W', morse: '.--' },
        { char: 'X', morse: '-..-' },
        { char: 'Y', morse: '-.--' },
        { char: 'Z', morse: '--..' },
        { char: '0', morse: '-----' },
        { char: '1', morse: '.----' },
        { char: '2', morse: '..---' },
        { char: '3', morse: '...--' },
        { char: '4', morse: '....-' },
        { char: '5', morse: '.....' },
        { char: '6', morse: '-....' },
        { char: '7', morse: '--...' },
        { char: '8', morse: '---..' },
        { char: '9', morse: '----.' }
    ];
    //crean dos objetos que mapean caracteres al código Morse y viceversa, 
    //utilizando el método map para transformar cada entrada del array morse en un par clave-valor.
    // parea cada uno ira en la clave el morse o la letra
    const textoAMorse = Object.fromEntries(morse.map(obj => [obj.char, obj.morse]));
    const morseATexto = Object.fromEntries(morse.map(obj => [obj.morse, obj.char]));
    let textoCambiado;
    if (texto.includes('-') || texto.includes('.')) {
        // split separa el texto cada vez que encontramos dos espacios
        // luego en el mapa por cada subcadena se crea una palara,
        // cada palabra se separa en simbolos con otro split
        //con otro mapa miramos si los simbolos son una letra  o no y los unimos
        textoCambiado = texto.split("  ").map(palabra => palabra.split(" ").map(simbolos => morseATexto[simbolos] || "").join("")).join(" ");
    } else {
        //texto a mayusculas
        texto = texto.toUpperCase();
        //split que separa cada vewz que encuente un espacio
        //mapa que crea palabras con lo dividido antes
        // otro split que separa cada vez que no encuentre un espacio, osea por letras
        // otro map para ir mirando letra a letra convirtiendola
        //luego se le pone un espacio entre letras en su version de morse y dos espacios entre palabras
        textoCambiado = texto.split(" ").map(palabra => palabra.split("").map(letra => textoAMorse[letra] || "").join(" ")).join("  ");
    }
    alert(textoCambiado);
}

// Ejemplo de uso
let textoMorse = ".... --- .-.. .-"; // Morse para "HOLA"
morse(textoMorse); // Decodificar Morse a texto

let texto = "HOLA BUENOS DÍAS"; // Texto para codificar
morse(texto); // Codificar texto a Morse