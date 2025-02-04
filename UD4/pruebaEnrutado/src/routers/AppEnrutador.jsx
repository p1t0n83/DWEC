import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
//import AppLayout from "../components/AppLayout";
const AppLayout = lazy(() => import("../components/AppLayout"));
const HomePage = lazy(() => import("../pages/HomePage"));
const ListaPage = lazy(() => import("../pages/ListaPage"));
const DetallesPage = lazy(() => import("../pages/DetallesPage"));
const AdministracionPage = lazy(() =>
    import("../pages/AdministracionPage"));
const NoPage = lazy(() => import("../pages/NoPage"));
function AppEnrutador() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Estamos en ello manin...</div>}>
                <Routes>
                    <Route path="/" element={<AppLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path="lista" element={<ListaPage />} />
                        <Route path="detalles/:id" element={<DetallesPage />} />
                        <Route path="administracion" element={<AdministracionPage />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}
export default AppEnrutador;