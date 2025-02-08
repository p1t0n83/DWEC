
function Paciente({
  id=0,
  nombre,
  email,
  telefono,
  fechaNacimiento,
  sexo,
  direccion,
  seguroMedico,
  borrarPaciente=null,
  editarPaciente=null
}) {

  const HandleClicker = (e) => {
    borrarPaciente(e);
  };
  const HandleClickerEditar=(e)=>{
    editarPaciente();
  }

  return (
    <>
      <div className="row align-items-center py-2 px-3 border-bottom bg-white text-dark border-bottom">
        <div className="col text-center">{nombre}</div>
        <div className="col text-center">{telefono}</div>
        <div className="col text-center">{seguroMedico}</div>
        <div className="col text-center">{email}</div>
        <div className="col text-center">{fechaNacimiento}</div>
        <div className="col text-center">{direccion}</div>
        <button onClick={() => HandleClicker(id)}>
                Borrar
            </button>
            <button onClick={() => HandleClickerEditar(id)}>
                Editar
            </button>
      </div>
    </>
  );
}
export default Paciente;
