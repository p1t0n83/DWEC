function Expediente({ paciente, fechaApertura, antecedentes, diagnostico, tratamientos, observaciones }) {
    return (
        <div className="container mt-4">
        <div className="card shadow-lg border-primary">
            <div className="card-header bg-primary text-white text-center">
                <h4>Expediente Médico</h4>
            </div>
            <div className="card-body text-dark bg-white">
                <div className="mb-2 border-bottom border-primary">
                    <strong>Paciente:</strong> {paciente}
                </div>
                <div className="mb-2 border-bottom border-primary">
                    <strong>Antecedentes:</strong> {antecedentes}
                </div>
                <div className="mb-2 border-bottom border-primary">
                    <strong>Diagnóstico:</strong> {diagnostico}
                </div>
                <div className="mb-2 border-bottom border-primary">
                    <strong>Tratamientos:</strong> {tratamientos}
                </div>
                <div className="mb-2 border-bottom border-primary">
                    <strong>Observaciones:</strong> {observaciones}
                </div>
                <div className="mb-2 border-bottom border-primary">
                    <strong>Fecha de apertura:</strong> {fechaApertura}
                </div>
            </div>
        </div>
    </div>
    

    );
}

export default Expediente;