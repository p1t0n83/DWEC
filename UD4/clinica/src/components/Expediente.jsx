//aqui empieza lo que decia en las paginas, creo un hijo en el que muestro los datos
function Expediente({
  id,
  pacienteId,
  paciente,
  fechaApertura,
  antecedentes,
  diagnostico,
  tratamientos,
  observaciones,
}) {
  return (
    <div className="container mt-4">
      <div className="card shadow-lg border-0 rounded bg-dark">
        <div className="card-header bg-success text-white text-center">
          <h4>Expediente Médico</h4>
        </div>
        <div className="card-body text-light bg-dark">
          <div className="mb-2 border-bottom border-success">
            <strong>Paciente:</strong> {paciente}
          </div>
          <div className="mb-2 border-bottom border-success">
            <strong>Antecedentes:</strong> {antecedentes}
          </div>
          <div className="mb-2 border-bottom border-success">
            <strong>Diagnóstico:</strong> {diagnostico}
          </div>
          <div className="mb-2 border-bottom border-success">
            <strong>Tratamientos:</strong> {tratamientos}
          </div>
          <div className="mb-2 border-bottom border-success">
            <strong>Observaciones:</strong> {observaciones}
          </div>
          <div className="mb-2 border-bottom border-success">
            <strong>Fecha de apertura:</strong> {fechaApertura}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expediente;
