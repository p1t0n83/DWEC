const baraja = [
    { id: 1, palo: 'Oros', numero: 1, valor: 1 },
    { id: 2, palo: 'Oros', numero: 2, valor: 2 },
    { id: 3, palo: 'Oros', numero: 3, valor: 3 },
    { id: 4, palo: 'Oros', numero: 4, valor: 4 },
    { id: 5, palo: 'Oros', numero: 5, valor: 5 },
    { id: 6, palo: 'Oros', numero: 6, valor: 6 },
    { id: 7, palo: 'Oros', numero: 7, valor: 7 },
    { id: 8, palo: 'Oros', numero: 'Sota', valor: 0.5 },
    { id: 9, palo: 'Oros', numero: 'Caballo', valor: 0.5 },
    { id: 10, palo: 'Oros', numero: 'Rey', valor: 0.5 },
    { id: 11, palo: 'Copas', numero: 1, valor: 1 },
    { id: 12, palo: 'Copas', numero: 2, valor: 2 },
    { id: 13, palo: 'Copas', numero: 3, valor: 3 },
    { id: 14, palo: 'Copas', numero: 4, valor: 4 },
    { id: 15, palo: 'Copas', numero: 5, valor: 5 },
    { id: 16, palo: 'Copas', numero: 6, valor: 6 },
    { id: 17, palo: 'Copas', numero: 7, valor: 7 },
    { id: 18, palo: 'Copas', numero: 'Sota', valor: 0.5 },
    { id: 19, palo: 'Copas', numero: 'Caballo', valor: 0.5 },
    { id: 20, palo: 'Copas', numero: 'Rey', valor: 0.5 },
    { id: 21, palo: 'Espadas', numero: 1, valor: 1 },
    { id: 22, palo: 'Espadas', numero: 2, valor: 2 },
    { id: 23, palo: 'Espadas', numero: 3, valor: 3 },
    { id: 24, palo: 'Espadas', numero: 4, valor: 4 },
    { id: 25, palo: 'Espadas', numero: 5, valor: 5 },
    { id: 26, palo: 'Espadas', numero: 6, valor: 6 },
    { id: 27, palo: 'Espadas', numero: 7, valor: 7 },
    { id: 28, palo: 'Espadas', numero: 'Sota', valor: 0.5 },
    { id: 29, palo: 'Espadas', numero: 'Caballo', valor: 0.5 },
    { id: 30, palo: 'Espadas', numero: 'Rey', valor: 0.5 },
    { id: 31, palo: 'Bastos', numero: 1, valor: 1 },
    { id: 32, palo: 'Bastos', numero: 2, valor: 2 },
    { id: 33, palo: 'Bastos', numero: 3, valor: 3 },
    { id: 34, palo: 'Bastos', numero: 4, valor: 4 },
    { id: 35, palo: 'Bastos', numero: 5, valor: 5 },
    { id: 36, palo: 'Bastos', numero: 6, valor: 6 },
    { id: 37, palo: 'Bastos', numero: 7, valor: 7 },
    { id: 38, palo: 'Bastos', numero: 'Sota', valor: 0.5 },
    { id: 39, palo: 'Bastos', numero: 'Caballo', valor: 0.5 },
    { id: 40, palo: 'Bastos', numero: 'Rey', valor: 0.5 }
];

function barajaCartas() {
    return baraja.sort((a, b) => Math.random() - 0.5);
}

function sumarCartas(cartas) {
    let suma = 0;
    if (cartas) {
        cartas.forEach(carta => {
            suma += carta.valor;

        });
        return suma;
    } else {
        return 0;

    }

}

function recuperarCarta(id) {
    return baraja.find(carta => carta.id == id)
}

export default { baraja, barajaCartas, sumarCartas, recuperarCarta };