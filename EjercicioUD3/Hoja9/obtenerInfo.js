async function obtenerUsuarios() {
    try {

        // Sin await response es una promesa
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
       
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        // Sin await data es una promesa
        const data = await response.json();

        console.log("Datos recibidos:", data);

    } catch (error) {

        console.error("Error al realizar la solicitud:", error.message);
    }
}

async function obtenerPendientes() {
    try {

        // Sin await response es una promesa
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
       
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        // Sin await data es una promesa
        const data = await response.json();

        console.log("Datos recibidos:", data);

    } catch (error) {
        
        console.error("Error al realizar la solicitud:", error.message);
    }
}


async function obtenerPublicaciones() {
    try {

        // Sin await response es una promesa
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
       
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        // Sin await data es una promesa
        const data = await response.json();

        console.log("Datos recibidos:", data);

    } catch (error) {
        
        console.error("Error al realizar la solicitud:", error.message);
    }
}


async function obtenerRespuestas() {
    try {

        // Sin await response es una promesa
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
       
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        // Sin await data es una promesa
        const data = await response.json();

        console.log("Datos recibidos:", data);

    } catch (error) {
        
        console.error("Error al realizar la solicitud:", error.message);
    }
}

async function obtenerAlbumes() {
    try {

        // Sin await response es una promesa
        const response = await fetch("https://jsonplaceholder.typicode.com/albums");
       
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        // Sin await data es una promesa
        const data = await response.json();

        console.log("Datos recibidos:", data);

    } catch (error) {
        
        console.error("Error al realizar la solicitud:", error.message);
    }
}

async function obtenerFotosAlbumes() {
    try {

        // Sin await response es una promesa
        const response = await fetch("https://jsonplaceholder.typicode.com/photos");
       
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        // Sin await data es una promesa
        const data = await response.json();

        console.log("Datos recibidos:", data);

    } catch (error) {
        
        console.error("Error al realizar la solicitud:", error.message);
    }
}