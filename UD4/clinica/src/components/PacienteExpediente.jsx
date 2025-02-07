import { useNavigate } from "react-router-dom";
function PacienteExpediente({ id, nombre, telefono, seguroMedico }) {
    const navegar = useNavigate();

    const handleClick = () => {
        navegar(`/expedientes/${id}`);
    }

    return (
        <>
            <div className='row align-items-center py-2 px-3 border-bottom'>
                <div className="col">{nombre}</div>
                <div className="col">{telefono}</div>
                <div className="col"> {seguroMedico}</div>
                <div className="col"><button onClick={handleClick}>Ver expediente en detalle</button></div>
            </div >
        </>
    );
}
export default PacienteExpediente;