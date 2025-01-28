import React, { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Tarea({ nombre, estado, cambiarEstado, borrarTarea }) {
  const [open, setOpen] = useState(false);

  const handleBorrar = () => {
    borrarTarea();
    setOpen(false);
  };

  return (
    <li>
      {nombre} - {estado}
      <button type="button" onClick={cambiarEstado}>Cambiar Estado</button>
      <button type="button" onClick={() => setOpen(true)}>Borrar</button>

      <Popup open={open} onClose={() => setOpen(false)}>
        <div>
          <h2>Confirmación de borrado</h2>
          <p>¿Estás seguro de que deseas eliminar esta tarea?</p>
          <button onClick={handleBorrar}>Sí</button>
          <button onClick={() => setOpen(false)}>No</button>
        </div>
      </Popup>
    </li>
  );
}

export default Tarea;