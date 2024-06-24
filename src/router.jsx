import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Reposirorio from './pages/Repositorio'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/repositorio/:repositorio" element={<Reposirorio />} />
            </Routes>
        </BrowserRouter>
    )
}