import { BrowserRouter, Route, Routes } from "react-router-dom";
import InicioPage from "../pages/InicioPage";
import AppLayout from "../components/AppLayout";


function AppEnrutador() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<InicioPage />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>);
}

export default AppEnrutador;