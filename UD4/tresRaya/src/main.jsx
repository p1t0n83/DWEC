import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Tablero from './Tablero.jsx';
//import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <App />*/}
   <h1>TRES EN RAYA</h1>
   <p>Empiezan las X</p>
   <Tablero />
  </StrictMode>
)
