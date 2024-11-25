function sacarMultiplosPrimo(min, max) {
    for (let i = min; i <= max; i++) {
        if (i % 3 === 0) {
            console.log(`${i} es multiplo de 3`);
        }
        if (i % 5 === 0) {
            console.log(`${i} es multiplo de 5`);
        }
        let primo = true;
        for (let f = i - 1; f > 1; f--) {
            if (i % f === 0) {
                primo = false;
            }
        }
        if(primo){
            console.log(`${i} es primo`);
        }
    }
}

let min=parseInt(prompt("Donde empieza el rango"));
let max=parseInt(prompt("Donde acaba"));
sacarMultiplosPrimo(min,max);