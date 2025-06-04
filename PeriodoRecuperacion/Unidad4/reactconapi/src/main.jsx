import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './estilos.css'
import AppEnrutador from './routers/AppEnrutador'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppEnrutador/>
  </StrictMode>,
)
