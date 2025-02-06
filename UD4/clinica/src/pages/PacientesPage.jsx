import { useEffect, useState } from "react";
import $negocio from "../core/Negocio";
import Paciente from "../components/Paciente";
function PacientesPage() {

    const [pacientes, setPacientes] = useState([]);

    useEffect(() => {
        cargar();
    }, []);

    const cargar = async () => {
        let paciente = $negocio.obtenerPacientes();
        paciente.then(result => {
            setPacientes(result);
        }).catch(error => {
            setPacientes([]);
            console.error("no se cargaron los pacientes");
        });

    }
    return (
        <>
            {console.log(pacientes)}
            <div>
                <h1>Listado de pacientes</h1>
                {pacientes.map((paciente) => {
                    return <Paciente key={paciente.id} nombre={paciente.nombre} direccion={paciente.direccion} email={paciente.email} fechanacimiento={paciente.fechanacimiento} seguroMedico={paciente.seguroMedico} sexo={paciente.sexo} telefono={paciente.telefono} />;

                })}
            </div>
        </>
    );

}
export default PacientesPage;