import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../../../pruebaEnrutado/src/pages/HomePage";
import AppLayout from "../components/AppLayout";

function AppEnrutador() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<HomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default AppEnrutador;