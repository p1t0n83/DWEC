import { createContext, useState } from "react";

const SeguridadContext = createContext();

function SeguridadProvider({ children }) {
  const [datos, setDatos] = useState({ usuario: "",tipo:"", tienePermisos: false });

  const logIn = async (nombre,tipo) => {
    let nuevoDatos = { ...datos, usuario: nombre,tipo:tipo, tienePermisos: true };
    setDatos(nuevoDatos);
  };

  const logOut = async () => {
    let nuevoDatos = { ...datos, usuario: "",tipo:"", tienePermisos: false };
    setDatos(nuevoDatos);
  };

  return (
    <SeguridadContext.Provider value={{ datos, logIn, logOut }}>
      {children}
    </SeguridadContext.Provider>
  );
}

export { SeguridadContext, SeguridadProvider };
