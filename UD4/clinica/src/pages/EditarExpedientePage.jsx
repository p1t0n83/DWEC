import React, { useState, useEffect } from "react";
import $negocio from "../core/Negocio";
import { useNavigate, useParams } from "react-router-dom";
// pagina para editar expedientes
function EditarExpedienteForm() {
  //esto pilla el id del expediente que fue pasado al reedirigir a esta pagina y el use navigate es para reedirigir
  const { id } = useParams();
  const navegar = useNavigate();
  //creo un expediente vacio( meno por el id del paciente que le pasamos) y lo hacemos con el useState para pode ir editandolo
  const [expediente, setExpediente] = useState({
    id: 0,
    pacienteId: id,
    fechaApertura: "",
    antecedentes: "",
    diagnosticos: "",
    tratamientos: "",
    observaciones: "",
  });
  // esto se activa nada mas entrar en la pagina y basicamente me carga el expediente, lo cargo porque necesito su id para editarlo y sus valores ara ponerlos en los campos, todavia no lo domino
  useEffect(() => {
    const cargarExpediente = async () => {
      const expedienteViejo = await $negocio.obtenerExpediente(id);
      setExpediente(expedienteViejo);
    };
    cargarExpediente();
  }, [id]);
  //editar expediente, el async( que no lo dije) es para que haga algo y el await es que hasta que no lo haga no lo hace, na no se que digo, son las 5 de la mañana, me esta consumiendo la esquizofrenia y el sueño
  // ahora si, el await es para que cuando se llame a esta funcion, espere a que haya datos para continuar (creo) de esta forma evito que me pase lo de siempre de que no haya nada
  const editarExpediente = async () => {
    await $negocio.actualizarExpediente(expediente);
    reedirigir();
  };

  //esto esta guapisimo, en vez de hacer 50 putos useState, hago uno, el de expediente y con esto puedo cambiar los campos, todos , solo poniendo eso, epico
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpediente((prevExpediente) => ({
      ...prevExpediente,
      [name]: value,
    }));
  };
  // aqui uso el reedirect que hice antes del navegate
  const reedirigir = () => {
    navegar("/expedientes");
  };

  //bueno aqui e formulario, con el prevent default para evitar movidas y he... que mas? asi la e, es la globalizacion?¿? de todos los valores, en plan, que pongo e. y puedo sacar cualquier valor del formulario
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4 text-success">Editar Expediente</h1>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-dark p-4 border rounded shadow-sm"
      >
        <div className="mb-3">
          <label htmlFor="paciente" className="form-label text-white">
            Paciente
          </label>
          <input
            type="text"
            id="paciente"
            name="pacienteId"
            className="form-control bg-dark text-light border-light"
            value={expediente.pacienteId}
            onChange={
              handleChange
            } /* aqui uso el handleChange como en todos los campos para editar en vivo y en directo el valor del expediente asociado*/
            disabled
          />
        </div>

        <div className="mb-3">
          <label htmlFor="antecedentes" className="form-label text-white">
            Antecedentes
          </label>
          <input
            type="text"
            id="antecedentes"
            name="antecedentes"
            className="form-control bg-dark text-light border-light"
            value={expediente.antecedentes}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="diagnostico" className="form-label text-white">
            Diagnóstico
          </label>
          <input
            type="text"
            id="diagnostico"
            name="diagnosticos"
            className="form-control bg-dark text-light border-light"
            value={expediente.diagnosticos}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tratamientos" className="form-label text-white">
            Tratamientos
          </label>
          <input
            type="text"
            id="tratamientos"
            name="tratamientos"
            className="form-control bg-dark text-light border-light"
            value={expediente.tratamientos}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="observaciones" className="form-label text-white">
            Observaciones
          </label>
          <input
            type="text"
            id="observaciones"
            name="observaciones"
            className="form-control bg-dark text-light border-light"
            value={expediente.observaciones}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="fechaApertura" className="form-label text-white">
            Fecha de Apertura
          </label>
          <input
            type="date"
            id="fechaApertura"
            name="fechaApertura"
            className="form-control bg-dark text-light border-light"
            value={expediente.fechaApertura}
            onChange={handleChange}
          />
        </div>

        <div className="d-flex justify-content-between mt-4">
          <button
            type="button"
            onClick={editarExpediente} /*aqui los botones con lo suyo */
            className="btn btn-success"
          >
            Guardar Cambios
          </button>
          <button
            type="button"
            onClick={reedirigir}
            className="btn btn-outline-secondary"
          >
            Volver
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditarExpedienteForm;
