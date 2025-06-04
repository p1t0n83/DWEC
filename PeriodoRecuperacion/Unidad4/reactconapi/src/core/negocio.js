const $negocio= (function(){
    async function obtenerProductos(){
        try{
         let response=await fetch("http://localhost:8001/api/productos/listado");
         if(!response.ok){
           throw new Error(`Error HTTP: ${response.status}`);
         }
         let objetos=await response.json();
         return objetos;
        }catch(error){
            console.error("Error al realizar la solicitud:", error.message);
        };
    }

    return {
        obtenerProductos
    };
})();
window.$negocio = $negocio;
export default $negocio;