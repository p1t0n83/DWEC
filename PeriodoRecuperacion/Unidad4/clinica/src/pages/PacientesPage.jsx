import { useEffect, useState } from "react";
import $negocio from "../core/negocio";
import LineaPaciente from "../components/LineaPaciente";

function PacientesPage() {
    const [pacientes, setPacientes] = useState([]);

    useEffect(function () {
        obtenerPacientes();
    }, []);
    const obtenerPacientes = async () => {
        let pacientes = await $negocio.obtenerPacientes();
        setPacientes(pacientes);
    }
    return (<>
        <div>
            <div className="tabla">
                <div className="fila cabecera">
                    <div>Id</div>
                    <div>Nombre</div>
                    <div>Dni</div>
                    <div>Email</div>
                    <div>Telefono</div>
                    <div>FechaNacimiento</div>
                    <div>Sexo</div>
                    <div>Direccion</div>
                    <div>Seguro medico</div>
                    <div>Acciones</div>
                </div>
                {pacientes.map((cadaPaciente) => (
                    <LineaPaciente key={cadaPaciente.id} paciente={cadaPaciente} />
                ))}
            </div>
        </div>
    </>);
}
export default PacientesPage;