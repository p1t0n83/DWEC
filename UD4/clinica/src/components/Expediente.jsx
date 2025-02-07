function Expediente({ paciente, fechaApertura, antecedentes, diagnostico, tratamientos, observaciones }) {
    return (
        <div>
            <div>Paciente:</div>
            <div>{paciente}</div>
            <div>Antecedentes:</div>
            <div>{antecedentes}</div>
            <div>Diagnosticos</div>
            <div>{diagnostico}</div>
            <div>Tratamientos</div>
            <div>{tratamientos}</div>
            <div>Observaciones</div>
            <div>{observaciones}</div>
            <div>Fecha de apertura</div>
            <div>{fechaApertura}</div>
        </div>
    );

}

export default Expediente;