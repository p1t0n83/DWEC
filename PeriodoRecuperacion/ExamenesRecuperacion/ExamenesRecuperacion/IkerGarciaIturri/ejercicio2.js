$inventario = (function () {
    let equipos = [
        { equipoId: 1, aula: "A1", estado: "operativo", tipo: "sobremesa" },
        { equipoId: 2, aula: "A2", estado: "averiado", tipo: "portátil" },
        { equipoId: 3, aula: "A1", estado: "pendiente revisión", tipo: "sobremesa" },
        { equipoId: 4, aula: "A3", estado: "operativo", tipo: "portátil" },
        { equipoId: 5, aula: "A2", estado: "averiado", tipo: "sobremesa" },
        { equipoId: 6, aula: "A4", estado: "operativo", tipo: "sobremesa" },
        { equipoId: 7, aula: "A1", estado: "operativo", tipo: "portátil" },
        { equipoId: 8, aula: "A3", estado: "pendiente revisión", tipo: "sobremesa" },
        { equipoId: 9, aula: "A2", estado: "averiado", tipo: "portátil" },
        { equipoId: 10, aula: "A4", estado: "operativo", tipo: "portátil" },
        { equipoId: 11, aula: "A1", estado: "averiado", tipo: "sobremesa" },
        { equipoId: 12, aula: "A3", estado: "operativo", tipo: "sobremesa" },
        { equipoId: 13, aula: "A2", estado: "pendiente revisión", tipo: "sobremesa" },
        { equipoId: 14, aula: "A4", estado: "averiado", tipo: "portátil" },
        { equipoId: 15, aula: "A3", estado: "operativo", tipo: "portátil" }
    ];

    //funcion para recuperar los equipos averiados ordenados por aula
    function equiposAveriadosAula() {
        //creo un array donde voy a guardar los equipos y busco los que tengan el estado averiado
        let averiados = equipos.filter((equipo) => equipo.estado === 'averiado');
        //ahora los ordeno
        averiados.sort((a, b) => a.aula.localeCompare(b.aula));
        //Y los envio
        return averiados;
    }

    //function para eliminar un equipo dado su id
    function eliminarEquipoID(id) {
        let longitud = equipos.length;
        equipos = equipos.filter((equipo) => equipo.equipoId != id);
        if (longitud > equipos.length) {
            console.log(`Equipo ${id} borrado con exito`);
        } else {
            console.log(`El equipo ${id} no se pudo borrar`);
        }
    }


    //funcion para agregar un equipo, el id se calcula a partir del mayor id que haya en el array de equipos +1
    function agregarEquipo(aula, estado, tipo) {

        if (tipo === 'sobremesa' || tipo === 'portátil') {
            let idMayor = 0;
            //sacamos el mayor id de los equipos
            equipos.forEach((equipo) => {
                if (equipo.equipoId > idMayor) {
                    idMayor = equipo.equipoId;
                }
            });
            //ahora creamos el equipo
            id = idMayor == 0 ? 1 : idMayor + 1;
            equipos.push({ equipoId: id, aula: aula, estado: estado, tipo: tipo });
            console.log('Creado con exito')
        } else {
            console.log('El tipo no es valido');
        }
    }

    //funcion para filtrar por tipo, si el tipo no coincide con uno de los 3 devuelve array vacio
    function filtrarPorTipo(tipo) {
        return equipos.filter((equipo) => equipo.tipo === tipo);
    }

    //funcion para ver las estadisticas de los equipos de sobremesa y portatiles
    function estadisticasPorTipo() {
        //creamos el array de objetos JSON que es el que vamos a devolver para ver los datos
        let estadisticas = [
            { tipo: 'sobremesa', total: 0, averiados: 0 },
            { tipo: 'portátil', total: 0, averiados: 0 },
        ];

        //con foreach vamos viendo cada equipo, vemos su tipo y a partir de eso trabajamos
        equipos.forEach((equipo) => {
            if (equipo.tipo === 'sobremesa') {
                equipo.estado === 'averiado' ? estadisticas[0].averiados++ : "";
                estadisticas[0].total++;
            } else {
                equipo.estado === 'averiado' ? estadisticas[1].averiados++ : "";
                estadisticas[1].total++;
            }
        });
        return estadisticas;
    }

    //funcion para convertir un objeto en una cadena JSON con stringify
    function serializarJSON() {
        return JSON.stringify(equipos);
    }
    //function para convertir una cadena JSON a objeto, si hay un error es controlado con try chatch y si sale bien se reemplazan los valores de equipo por los de la cadena deserializada
    function deserializarJSON(cadena) {
        try { //se convierte con parse
            let datos = JSON.parse(cadena);
            equipos = datos;
            console.log("Se realizo con exito la deserializacion");
        } catch (error) {
            console.error('Error al analizar el JSON: ', error);
        }
    }



    console.log("Voy a ir probando cada metodo para que veas que funciona");
    console.log("---------------------------------------------------------");
    console.log("1.Primero vamos a obtener los equipos averiados por aula");
    console.log(equiposAveriadosAula());
    console.log("---------------------------------------------------------");
    console.log("2.Eliminar equipo a partir de id, en este caso el id 2 y el 5 que ademas son equipos averiados y una prueba con un equipo no existente 55");
    eliminarEquipoID(2);
    eliminarEquipoID(5);
    eliminarEquipoID(55);
    console.log(equiposAveriadosAula());
    console.log("---------------------------------------------------------");
    console.log("3.Agregar un equipo, voy a meter de vuelta el 2");
    agregarEquipo("A2", "averiado", "portátil");
    console.log("---------------------------------------------------------");
    console.log("4.Filtrar por tipo, en este caso portátil, si metemos mal el tipo nos devolvera un array vacio");
    console.log(filtrarPorTipo("portátil"));
    console.log("---------------------------------------------------------");
    console.log("5. Ahora vamos a ver las estadisticas por tipo, estas son el total de equipos de dicho equipo y los que estan averiados");
    console.log(estadisticasPorTipo());
    console.log("---------------------------------------------------------");
    console.log("6. Vamos a probar el serializar equipo");
    console.log(serializarJSON());
    console.log("---------------------------------------------------------");
    console.log("7. Lo contrario, intentemos deserializar un JSON y sustituyamos los valores en equipos");
    let json = `[{"equipoId":1,"aula":"A1","estado":"operativo","tipo":"sobremesa"},
    { "equipoId": 2, "aula": "A2", "estado": "averiado", "tipo": "portátil" },
    {"equipoId":3,"aula":"A1","estado":"pendiente revisión","tipo":"sobremesa"},
    {"equipoId":4,"aula":"A3","estado":"operativo","tipo":"portátil"},
    {"equipoId":6,"aula":"A4","estado":"operativo","tipo":"sobremesa"},
    {"equipoId":7,"aula":"A1","estado":"operativo","tipo":"portátil"},
    {"equipoId":8,"aula":"A3","estado":"pendiente revisión","tipo":"sobremesa"},
    {"equipoId":9,"aula":"A2","estado":"averiado","tipo":"portátil"},
    {"equipoId":10,"aula":"A4","estado":"operativo","tipo":"portátil"},
    {"equipoId":11,"aula":"A1","estado":"averiado","tipo":"sobremesa"},
    {"equipoId":12,"aula":"A3","estado":"operativo","tipo":"sobremesa"},
    {"equipoId":13,"aula":"A2","estado":"pendiente revisión","tipo":"sobremesa"},
    {"equipoId":14,"aula":"A4","estado":"averiado","tipo":"portátil"},
    {"equipoId":15,"aula":"A3","estado":"operativo","tipo":"portátil"},
    {"equipoId":16,"aula":"A2","estado":"averiado","tipo":"portátil"}]`;
    deserializarJSON(json);
    console.log("Podemos ver que se ha metido si ahora vemos, por ejemplo los equipos averiados, ya que ahora deberia de estar el 2");
    console.log(equiposAveriadosAula());
})();

