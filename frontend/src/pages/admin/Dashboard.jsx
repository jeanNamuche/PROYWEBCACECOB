import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
        <Link to="/admin/cursos" style={{ marginRight: "1rem" }}>Cursos</Link>
        <Link to="/admin/crear" className="btn">Crear Curso</Link>
        <Link to="/admin/talleres">Talleres</Link>
      </div>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}

export default Dashboard;
