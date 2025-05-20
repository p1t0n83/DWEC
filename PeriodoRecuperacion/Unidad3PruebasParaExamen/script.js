

async function obtenerDatos(){
    try{
        const response =await fetch("https://jsonplaceholder.typicode.com/users");
     
       if (response.ok) {
            const datos = await response.json();
            return datos;
        } else {
            console.error("Error en la respuesta:", response.status, response.statusText);
            return [];
        }
    }catch(error){
        console.error("Error al realizar la solicitud",error.message);
    }
}

export  {obtenerDatos};