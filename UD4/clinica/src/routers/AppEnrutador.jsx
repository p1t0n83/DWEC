import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AppLayout from "../components/AppLayout";
import NoPage from "../pages/NoPage";
import PacientesPage from "../pages/PacientesPage";
import UsuariosPage from "../pages/UsuariosPage";
import ExpedientesPage from "../pages/ExpedientesPage";
import PropiedadesPacientePage from "../pages/PropiedadesPacientePage";
import PropiedadesUsuarioPage from "../pages/PropiedadesUsuarioPage";
import LoginPage from "../pages/LoginPage";
import ExpedientesDetalladoPage from "../pages/ExpedienteDetalladoPage";
import EditarExpedientePage from "../pages/EditarExpedientePage";
function AppEnrutador() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/pacientes" element={<PacientesPage />} />
          <Route path="/usuarios" element={<UsuariosPage />} />
          <Route path="/expedientes" element={<ExpedientesPage />} />
          <Route
            path="/expedientes/:id"
            element={<ExpedientesDetalladoPage />}
          />
          <Route
            path="/expedientes/editar/:id"
            element={<EditarExpedientePage />}
          />
          <Route path="/pacientes/:id" element={<PropiedadesPacientePage />} />
          <Route
            path="/usuarios/:id"
            element={<PropiedadesUsuarioPage />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppEnrutador;
