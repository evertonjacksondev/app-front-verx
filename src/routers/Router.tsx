import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { NavBar } from "../components/template/NavBar";


export const Router = () => {

    return (
        <BrowserRouter >
            <Routes>
                <Route element={<NavBar />}>
                    <Route path="*" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter >
    )
}