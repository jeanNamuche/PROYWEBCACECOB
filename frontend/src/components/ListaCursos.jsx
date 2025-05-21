import { useEffect, useState } from "react";
import CrearCurso from "./CrearCurso";

function ListaCursos() {
  const [cursos, setCursos] = useState([]);
  const [cursoEditar, setCursoEditar] = useState(null);

  const fetchCursos = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/cursos");
      const data = await res.json();
      setCursos(data);
    } catch (err) {
      console.error("Error al cargar cursos:", err);
    }
  };

  useEffect(() => {
    fetchCursos();
  }, []);

  const eliminarCurso = async (id) => {
    if (!confirm("¿Eliminar este curso?")) return;

    try {
      const res = await fetch(`http://127.0.0.1:8000/api/cursos/${id}`, {
        method: "DELETE",
      });
      if (res.ok) fetchCursos();
    } catch (err) {
      console.error("Error al eliminar curso:", err);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <CrearCurso
        cursoEditar={cursoEditar}
        onCursoGuardado={() => {
          setCursoEditar(null);
          fetchCursos();
        }}
        cancelarEdicion={() => setCursoEditar(null)}
      />

      <h2 className="text-xl font-bold mt-10 mb-4 text-petroleo">Lista de Cursos</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow border border-gray-200 text-sm">
          <thead className="bg-petroleo text-white">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Nombre</th>
              <th className="p-3">Descripción</th>
              <th className="p-3">Horario</th>
              <th className="p-3">Imagen</th>
              <th className="p-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cursos.map((curso) => (
              <tr key={curso.id} className="hover:bg-grisclaro transition">
                <td className="p-3 border">{curso.id}</td>
                <td className="p-3 border">{curso.nombre}</td>
                <td className="p-3 border">{curso.descripcion}</td>
                <td className="p-3 border">{curso.horario}</td>
                <td className="p-3 border">
                  {curso.imagen && (
                    <img src={curso.imagen} alt="img" className="h-12" />
                  )}
                </td>
                <td className="p-3 border">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCursoEditar(curso)}
                      className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => eliminarCurso(curso.id)}
                      className="bg-vino hover:bg-petroleo text-white text-xs px-3 py-1 rounded"
                    >
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {cursos.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  No hay cursos registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListaCursos;
