import { useEffect, useState } from "react";
import "./Cursos.css"; // opcional si prefieres un archivo separado

function Cursos() {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/cursos")
      .then((res) => res.json())
      .then((data) => setCursos(data))
      .catch((error) => console.error("Error al cargar cursos:", error));
  }, []);

  return (
    <div className="cursos-container">
      <h1>Cursos Disponibles</h1>
      <div className="cursos-lista">
        {cursos.map((curso) => (
          <div className="curso-card" key={curso.id}>
            <img src={curso.imagen} alt={curso.nombre} className="curso-img" />
            <div className="curso-info">
              <h2>{curso.nombre}</h2>
              <p>{curso.descripcion}</p>
              <p><strong>Horario:</strong> {curso.horario}</p>
              <button>Más Información</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cursos;
