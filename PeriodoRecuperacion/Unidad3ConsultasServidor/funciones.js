
async function getUsers() {
    try {
        // Sin await response es una promesa
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        // Sin await data es una promesa
        const data = await response.json();
        console.log("Datos recibidos:", data);
        return  data;
    } catch (error) {
        console.error("Error al realizar la solicitud:", error.message);
    }
}





export { getUsers };