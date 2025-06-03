import { useNavigate } from "react-router-dom";
import $negocio from "../core/negocio";
function LineaExpediente({expediente }) {
  const {
    id=0,
    nombre = 0,
    seguroMedico= "",
    telefono = "",
    
  } = expediente;
  const navegar = useNavigate();
  const editar = () => {
    navegar(`../expediente/${id}`);
  };

  return (
    <div className="fila">
      <div>{ nombre}</div>
      <div>{seguroMedico}</div>
      <div>{telefono}</div>
     
      
      <div>
        <button onClick={editar}>editar</button>
       
      </div>
    </div>
  );
}

export default LineaExpediente;
