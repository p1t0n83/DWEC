function Paciente({ nombre, email, telefono, fechaNacimiento, sexo, direccion, seguroMedico }) {
    return (
        <>

            <div className='row align-items-center py-2 px-3 border-bottom'>
                <div className="col">{nombre}</div>
                <div className="col">{telefono}</div>
                <div className="col"> {seguroMedico}</div>
                <div className="col"> {email}</div>
                <div className="col"> {fechaNacimiento}</div>
                <div className="col"> {direccion}</div>
            </div>
        </>
    );
}
export default Paciente;