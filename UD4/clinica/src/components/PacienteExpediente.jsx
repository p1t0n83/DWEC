function PacienteExpediente({ id, nombre, telefono, seguroMedico }) {
    return (
        <>
            <div className='row align-items-center py-2 px-3 border-bottom'>
                <div className="col">{nombre}</div>
                <div className="col">{telefono}</div>
                <div className="col"> {seguroMedico}</div>
                <div className="col"><input value={id}>Ver informacion del expediente</input></div>
            </div >
        </>
    );
}
export default PacienteExpediente;