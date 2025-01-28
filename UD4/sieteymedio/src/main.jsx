import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Juego from './Juego';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Juego />
  </StrictMode>,
)
