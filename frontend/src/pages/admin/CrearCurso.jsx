import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CrearCurso() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState("");
  const [horario, setHorario] = useState("");
  const [mensaje, setMensaje] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoCurso = {
      nombre,
      descripcion,
      imagen,
      horario,
    };

    fetch("http://127.0.0.1:8000/api/cursos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoCurso),
    })
      .then((res) => res.json())
      .then((data) => {
        setMensaje("Curso creado exitosamente");
        // Redirecciona si quieres volver a la lista
        // navigate("/admin/cursos");
        // Limpia campos
        setNombre("");
        setDescripcion("");
        setImagen("");
        setHorario("");
      })
      .catch((error) => {
        console.error("Error al crear el curso:", error);
        setMensaje("Ocurrió un error");
      });
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Crear Curso</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nombre del curso"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className="w-full border p-2 rounded"
        ></textarea>
        <input
          type="text"
          placeholder="Imagen (URL)"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Horario"
          value={horario}
          onChange={(e) => setHorario(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Crear Curso
        </button>
      </form>
      {mensaje && <p className="mt-4 text-center text-green-600">{mensaje}</p>}
    </div>
  );
}

export default CrearCurso;
