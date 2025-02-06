function Paciente({ key, nombre, email, telefono, fechanacimiento, sexo, direccion, seguroMedico }) {
    return (
        <>
            <div>
                <div className="row align-items-start">
                    <div className="col">Paciente</div>
                    <div className="col">Telefono</div>
                    <div className="col">Seguro Medico</div>
                </div>
                <div className="row align-items-start">
                    <div className="col">{nombre}</div>
                    <div className="col">{telefono}</div>
                    <div className="col"> {seguroMedico}</div>
                </div>
            </div></>
    );
}
export default Paciente;