// lo mismo que en el anterior , gestiono los datos en el hijo y ademas los metodos de editar y borrar por que los botones se generan para cada hijo
function Paciente({
  id,
  nombre,
  email,
  telefono,
  fechaNacimiento,
  sexo,
  direccion,
  seguroMedico,
  borrarPaciente = null,
  editarPaciente = null,
}) {
  const HandleClicker = (e) => {
    borrarPaciente(e);
  };
  const HandleClickerEditar = (e) => {
    editarPaciente(e);
  };

  return (
    <>
      {console.log(id)}
      <div className="row align-items-center py-1 px-2 border-bottom border-success text-light">
        <div className="col text-center ">{nombre}</div>
        <div className="col text-center">{telefono}</div>
        <div className="col text-center">{seguroMedico}</div>
        <div className="col text-center">{email}</div>
        <div className="col text-center">{fechaNacimiento}</div>
        <div className="col text-center">{direccion}</div>

        <div className="col text-center">
          <button
            onClick={() => HandleClicker(id)}
            className="btn btn-outline-danger btn-sm me-2"
          >
            Borrar
          </button>
          <button
            onClick={() => HandleClickerEditar(id)}
            className="btn btn-outline-warning btn-sm"
          >
            Editar
          </button>
        </div>
      </div>
    </>
  );
}
export default Paciente;
