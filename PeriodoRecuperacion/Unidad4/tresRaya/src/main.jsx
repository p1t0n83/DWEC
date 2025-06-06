import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Tablero from "./components/Tablero.jsx";
import './estilos.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*App */}
    <Tablero />
  </StrictMode>,
)
