import { useParams } from "react-router-dom";
import Expediente from "../components/Expediente";
import { useEffect, useState } from "react";
import $negocio from "../core/Negocio";
function ExpedientesDetalladoPage() {
    const { id } = useParams();
    const [expediente, setExpediente] = useState();
    const [paciente, setPaciente] = useState();
    useEffect(() => {
        const cargarDatos = async (id) => {
            try {
                const exp = await $negocio.obtenerExpediente(id);
                setExpediente(exp);
                const pac = await $negocio.obtenerPaciente(id);
                setPaciente(pac);
            } catch (error) {
                console.error(error);
            }
        }

        cargarDatos(id);
    }, [id]);


    return (<div>{expediente ? (<Expediente key={id} paciente={paciente.nombre} antecedentes={expediente.antecedentes} diagnostico={expediente.diagnostico} fechaApertura={expediente.fechaApertura} observaciones={expediente.observaciones} tratamientos={expediente.tratamientos} />) : ("")}</div>);
}

export default ExpedientesDetalladoPage;