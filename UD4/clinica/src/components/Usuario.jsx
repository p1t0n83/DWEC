//literalmente igual a el de pacientes
function Usuario({
  id,
  usuario,
  tipo,
  password,
  borrarUsuario,
  editarUsuario,
}) {
  const HandleClicker = (id) => {
    borrarUsuario(id);
  };
  const HandleClickerEditar = (id) => {
    editarUsuario(id);
  };
  return (
    <>
      <div className="row align-items-center py-2 px-3 border-bottom border-success bg-dark text-light m-0">
        <div className="col text-center m-0">{usuario}</div>
        <div className="col text-center m-0">{tipo}</div>
        <div className="col text-center m-0">{password}</div>
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
export default Usuario;
