import { useState, useEffect } from "react";

function CrearCurso({ cursoEditar, onCursoGuardado, cancelarEdicion }) {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState("");
  const [horario, setHorario] = useState("");

  useEffect(() => {
    if (cursoEditar) {
      setNombre(cursoEditar.nombre);
      setDescripcion(cursoEditar.descripcion);
      setImagen(cursoEditar.imagen);
      setHorario(cursoEditar.horario);
    } else {
      setNombre("");
      setDescripcion("");
      setImagen("");
      setHorario("");
    }
  }, [cursoEditar]);

  const manejarSubmit = async (e) => {
    e.preventDefault();

    const datos = {
      nombre,
      descripcion,
      imagen,
      horario,
    };

    const url = cursoEditar
      ? `http://127.0.0.1:8000/api/cursos/${cursoEditar.id}`
      : "http://127.0.0.1:8000/api/cursos";

    const metodo = cursoEditar ? "PUT" : "POST";

    try {
      const respuesta = await fetch(url, {
        method: metodo,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      });

      if (respuesta.ok) {
        onCursoGuardado();
        if (!cursoEditar) {
          setNombre("");
          setDescripcion("");
          setImagen("");
          setHorario("");
        }
      } else {
        alert("Error al guardar el curso");
      }
    } catch (error) {
      console.error("Error al enviar:", error);
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg border max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-petroleo mb-4">
        {cursoEditar ? "Editar Curso" : "Crear Curso"}
      </h2>

      <form onSubmit={manejarSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nombre del curso"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-petroleo"
        />
        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-petroleo"
        ></textarea>
        <input
          type="text"
          placeholder="Imagen (URL)"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-petroleo"
        />
        <input
          type="text"
          placeholder="Horario"
          value={horario}
          onChange={(e) => setHorario(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-petroleo"
        />

        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-petroleo hover:bg-vino text-white px-4 py-2 rounded transition"
          >
            {cursoEditar ? "Guardar Cambios" : "Crear Curso"}
          </button>
          {cursoEditar && (
            <button
              type="button"
              onClick={cancelarEdicion}
              className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CrearCurso;
