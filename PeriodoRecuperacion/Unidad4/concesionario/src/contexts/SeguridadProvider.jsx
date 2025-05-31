import { useState, createContext } from "react";

const SeguridadContext = createContext();

function SeguridadProvider({ children }) {
  const [datos, setDatos] = useState({ usuario: "", tienePermisos: false });

  const logIn = async (nombre) => {
    let nuevoDatos = { ...datos, usuario: nombre, tienePermisos: true };
    setDatos(nuevoDatos);
  };
  const logOut = async () => {
    let nuevoDatos = { ...datos, usuario: "", tienesPermisos: false };
    setDatos(nuevoDatos);
  };

  return (
    <SeguridadContext.Provider
      value={{
        datos,
        logIn,
        logOut,
      }}
    >
      {children}
    </SeguridadContext.Provider>
  );
}
export { SeguridadContext, SeguridadProvider };
