
async function getValores(valor) {
    try {
        // Sin await response es una promesa
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/"+valor);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        // Sin await data es una promesa
        const data = await response.json();
        console.log("Datos recibidos:", data);
        return data;
    } catch (error) {
        console.error("Error al realizar la solicitud:", error.message);
    }
}

export { getValores };