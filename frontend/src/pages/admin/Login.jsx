import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple prueba con contraseña "admin123"
    if (password === "admin123") {
      localStorage.setItem("auth", "true");
      navigate("/admin/dashboard");
    } else {
      alert("Contraseña incorrecta");
    }
  };

  return (
    <div className="login-container" style={{ padding: "2rem" }}>
      <h2>Login Admin</h2>
      <form onSubmit={handleLogin}>
        <input
          type="password"
          placeholder="Contraseña..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
