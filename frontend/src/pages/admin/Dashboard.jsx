import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem("auth");
    if (!isAuth) navigate("/admin");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Panel Administrativo</h2>
      <div style={{ marginBottom: "1rem" }}>
        <Link to="/admin/Cursos" style={{ marginRight: "1rem" }}>Crear Cursos</Link>
        <Link to="/admin/crear" style={{ marginRight: "1rem" }} className="btn">Crear Taller</Link>
        <Link to="/admin/talleres"style={{ marginRight: "1rem" }}>Talleres</Link>
      </div>
      
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}

export default Dashboard;
