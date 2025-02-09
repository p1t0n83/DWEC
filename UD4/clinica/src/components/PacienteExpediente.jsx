import { useNavigate } from "react-router-dom";
// aqui tengo que usar un navegar porque... no me cuer.. a vale si , para pasarle el id al expedientes y mostrar el expediente en detalle, aunque creo que hay mejores formas de hacerlo
function PacienteExpediente({ id, nombre, telefono, seguroMedico }) {
  const navegar = useNavigate();

  const handleClick = () => {
    navegar(`/expedientes/${id}`);
  };

  return (
    <>
      <div className="row align-items-center py-2 px-3 border-bottom border-success">
        <div className="col text-light">{nombre}</div>
        <div className="col text-light">{telefono}</div>
        <div className="col text-light">{seguroMedico}</div>
        <div className="col">
          <button
            onClick={handleClick}
            className="btn btn-outline-success text-light border-2"
          >
            Ver expediente en detalle
          </button>
        </div>
      </div>
    </>
  );
}
export default PacienteExpediente;
