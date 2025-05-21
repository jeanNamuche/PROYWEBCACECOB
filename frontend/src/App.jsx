import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import CrearCurso from "./pages/admin/AdminCursos";
import AdminCursos from "./pages/admin/AdminCursos";

import Home from "./pages/Home";
import Cursos from "./pages/Cursos";
import Talleres from "./pages/Talleres";
import Nosotros from "./pages/Nosotros";
import Examenes from "./pages/Examenes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/cursos" element={<AdminCursos />} />
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/talleres" element={<Talleres />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/examenes" element={<Examenes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
