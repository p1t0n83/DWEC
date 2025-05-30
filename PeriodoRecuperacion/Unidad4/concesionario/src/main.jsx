import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './estilos.css'
import AppEnrutador from "./routers/AppEnrutador.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AppEnrutador/>
  </StrictMode>,
)
