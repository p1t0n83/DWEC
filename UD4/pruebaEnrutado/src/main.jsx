import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import AppEnrutador from "./routers/AppEnrutador.jsx";
import { SeguridadProvider } from './contexts/SeguridadProvider.jsx';

createRoot(document.getElementById('root')).render(
  <SeguridadProvider>
    {/*<App />*/}
    <AppEnrutador />
  </SeguridadProvider>,
)
