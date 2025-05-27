import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './estilos.css';
import Juego from './components/juego.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Juego />
  </StrictMode>,
)
