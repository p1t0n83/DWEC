import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import EscaparatePage from "../pages/EscaparatePage";
import CochePage from "../pages/CochePage";
import CochesPage from "../pages/CochesPage";
import LoginPage from "../pages/LoginPage";
import NoPage from "../pages/NoPage";
function AppEnrutador() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<EscaparatePage />} />
                    <Route path="coches" element={<CochesPage />} />
                    <Route path="coches/detalles/:id" element={<CochePage />} />
                    <Route path="coches/crear" element={<CochePage />} />
                    <Route path="coches/actualizar/:id" element={<CochePage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}


export default AppEnrutador;