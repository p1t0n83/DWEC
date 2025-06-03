import { useState } from "react";
import { useNavigate } from "react-router-dom";
import $negocio from "../core/negocio";
function LineaPaciente({ paciente }) {
  const {
    id = 0,
    nombre = "",
    dni = 0,
    email = "",
    telefono = "",
    fechaNacimiento = "",
    sexo = "",
    direccion = "",
    seguroMedico = "",
  } = paciente;
  const navegar = useNavigate();
  const editar = () => {
    navegar(`../paciente/${id}`);
  };
  const borrar = () => {
    if (confirm("¿Estás seguro de que quieres eliminar este paciente?")) {
      $negocio.eliminarPaciente(id);
    }
  };

  return (
    <div className="fila">
      <div>{id}</div>
      <div>{nombre}</div>
      <div>{dni}</div>
      <div>{email}</div>
      <div>{telefono}</div>
      <div>{fechaNacimiento}</div>
      <div>{sexo}</div>
      <div>{direccion}</div>
      <div>{seguroMedico}</div>
      <div>
        <button onClick={editar}>editar</button>
        <button onClick={borrar}>Borrar</button>
      </div>
    </div>
  );
}

export default LineaPaciente;
