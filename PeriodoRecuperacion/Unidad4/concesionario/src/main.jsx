import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./estilos.css";
import AppEnrutador from "./routers/AppEnrutador.jsx";
import { SeguridadProvider } from "./contexts/SeguridadProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SeguridadProvider>
      <AppEnrutador />
    </SeguridadProvider>
  </StrictMode>
);
