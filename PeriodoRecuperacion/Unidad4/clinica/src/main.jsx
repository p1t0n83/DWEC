import { createRoot } from "react-dom/client";
import AppEnrutador from "./routers/AppEnrutador";
import "./estilos.css";
import { SeguridadProvider } from "./context/SeguridadContext";

createRoot(document.getElementById("root")).render(
   
    <SeguridadProvider>
      <AppEnrutador />
    </SeguridadProvider>

);
