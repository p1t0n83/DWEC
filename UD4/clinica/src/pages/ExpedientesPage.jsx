import { useEffect, useState } from "react";
import $negocio from "../core/Negocio";
import PacienteExpediente from "../components/PacienteExpediente";
function ExpedientesPage() {

    const [pacientes, setPacientes] = useState([]);

    useEffect(() => {
        const cargar = async () => {
            try {
                let paciente = await $negocio.obtenerPacientes();
                setPacientes(paciente);
            } catch (error) {
                console.error(error);
            }
        }
        cargar();
    }, []);




    return (
        <>

            <div className="container mt-4">
                <h1 className="text-center mb-4 text-primary">Listado de Pacientes</h1>

                <div className="card shadow-sm p-3 border border-2 border-primary rounded">
                    <div className="row bg-light text-dark fw-bold py-2 px-3 border-bottom">
                        <div className="col">Paciente</div>
                        <div className="col">Teléfono</div>
                        <div className="col">Seguro Médico</div>
                        <div className="col"></div>
                    </div>
                    {pacientes.map((paciente) => {
                        return <PacienteExpediente key={paciente.id} id={paciente.id} nombre={paciente.nombre} seguroMedico={paciente.seguroMedico} telefono={paciente.telefono} />;

                    })}
                </div>
            </div>
        </>
    );

}
export default ExpedientesPage;