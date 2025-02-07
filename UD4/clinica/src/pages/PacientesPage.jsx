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
            <div className="container mt-4">
                <h1 className="text-center mb-4 text-primary">Listado de Pacientes</h1>

                <div className="card shadow-sm p-3 border border-2 border-primary rounded">
                    <div className="row bg-light text-dark fw-bold py-2 px-3 border-bottom">
                        <div className="col">Paciente</div>
                        <div className="col">Teléfono</div>
                        <div className="col">Seguro Médico</div>
                        <div className="col"> email</div>
                        <div className="col"> fecha de Nacimiento</div>
                        <div className="col"> direccion</div>
                    </div>
                    {pacientes.map((paciente) => {
                        return <Paciente key={paciente.id} nombre={paciente.nombre} direccion={paciente.direccion} email={paciente.email} fechaNacimiento={paciente.fechaNacimiento} seguroMedico={paciente.seguroMedico} sexo={paciente.sexo} telefono={paciente.telefono} />;

                    })}
                </div>
            </div>
        </>
    );

}
export default PacientesPage;