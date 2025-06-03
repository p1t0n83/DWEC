import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LineaPaciente({paciente}){
  const {id=0,nombre="",dni=0,email="",telefono="",fechaNacimiento="",sexo="",direccion="",seguroMedico=""}=paciente;

  const ver=()=>{

  }
  const borrar=()=>{

  }
  
  return (<div className="fila">
    <div>{id}</div>
    <div>{nombre}</div>
    <div>{dni}</div>
    <div>{email}</div>
    <div>{telefono}</div>
    <div>{fechaNacimiento}</div>
    <div>{sexo}</div>
    <div>{direccion}</div>
    <div>{seguroMedico}</div>
    <div><button onClick={ver}>Ver</button><button onClick={borrar}>Borrar</button></div>
  </div>);






}


export default LineaPaciente;