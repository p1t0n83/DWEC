import { BrowserRouter, Routes, Route } from "react-router-dom";
import InicioPage from "../pages/InicioPage";
import PacientesPage from "../pages/PacientesPage";
import PropiedadesPacientePage from "../pages/PropiedadesPacientePage";
import ExpedientesPage from "../pages/ExpedientesPage";
import PropiedadesExpedientePage from "../pages/PropiedadesExpedientePage";
import UsuariosPage from "../pages/UsuariosPage";
import PropiedadesUsuarioPage from "../pages/PropiedadesUsuarioPage";
import LoginLogoutPage from "../pages/LoginLogoutPage";
import ErrorPage from "../pages/ErrorPage";
import AppLayout from "../components/AppLayout";


function AppEnrutador() {
    return(<BrowserRouter>
        <Routes>
           <Route path="/" element={<AppLayout />}>
             <Route index element={<InicioPage />} />
             <Route path="/pacientes" element={<PacientesPage/>}/>
             <Route path="/paciente/:id" element={<PropiedadesPacientePage/>}/>
             <Route path="/expedientes" element={<ExpedientesPage/>}/>
             <Route path="/expediente/:id" element={<PropiedadesExpedientePage/>}/>
             <Route path="/usuarios" element={<UsuariosPage/>}/>
             <Route path="/usuario/:id" element={<PropiedadesUsuarioPage/>}/>
             <Route path="/login" element={<LoginLogoutPage/>}/>
             <Route path="*" element={<ErrorPage/>}/>
           </Route>
        </Routes>
    </BrowserRouter>);
}

export default AppEnrutador;