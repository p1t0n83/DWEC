import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Juego from './components/Juego.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Juego />
  </StrictMode>,
)
