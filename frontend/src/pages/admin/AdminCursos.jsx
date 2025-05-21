import { useEffect, useState } from "react";
import CursoForm from "../../components/CrearCurso";
import ListaCursos from "../../components/ListaCursos";

function AdminCursos() {
  const [cursos, setCursos] = useState([]);
  const [editando, setEditando] = useState(false);
  const [cursoActual, setCursoActual] = useState({
    id: null,
    nombre: "",
    descripcion: "",
    imagen: "",
    horario: "",
  });

  // Cargar cursos
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

  // Handlers para campos del formulario
  const setNombre = (nombre) => setCursoActual((c) => ({ ...c, nombre }));
  const setDescripcion = (descripcion) => setCursoActual((c) => ({ ...c, descripcion }));
  const setImagen = (imagen) => setCursoActual((c) => ({ ...c, imagen }));
  const setHorario = (horario) => setCursoActual((c) => ({ ...c, horario }));

  // Crear o editar curso
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editando) {
      // Editar
      await fetch(`http://127.0.0.1:8000/api/cursos/${cursoActual.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: cursoActual.nombre,
          descripcion: cursoActual.descripcion,
          imagen: cursoActual.imagen,
          horario: cursoActual.horario,
        }),
      });
    } else {
      // Crear
      await fetch("http://127.0.0.1:8000/api/cursos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: cursoActual.nombre,
          descripcion: cursoActual.descripcion,
          imagen: cursoActual.imagen,
          horario: cursoActual.horario,
        }),
      });
    }
    setCursoActual({ id: null, nombre: "", descripcion: "", imagen: "", horario: "" });
    setEditando(false);
    fetchCursos();
  };

  // Editar curso desde la tabla
  const handleEditar = (curso) => {
    setCursoActual(curso);
    setEditando(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Eliminar curso desde la tabla
  const handleEliminar = async (id) => {
    if (!window.confirm("¿Eliminar este curso?")) return;
    await fetch(`http://127.0.0.1:8000/api/cursos/${id}`, { method: "DELETE" });
    fetchCursos();
  };

  // Cancelar edición
  const handleCancel = () => {
    setEditando(false);
    setCursoActual({ id: null, nombre: "", descripcion: "", imagen: "", horario: "" });
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <CursoForm
        titulo={editando ? "Editar Curso" : "Crear Curso"}
        nombre={cursoActual.nombre}
        descripcion={cursoActual.descripcion}
        imagen={cursoActual.imagen}
        horario={cursoActual.horario}
        setNombre={setNombre}
        setDescripcion={setDescripcion}
        setImagen={setImagen}
        setHorario={setHorario}
        onSubmit={handleSubmit}
        onCancel={editando ? handleCancel : undefined}
        textoBoton={editando ? "Guardar Cambios" : "Crear Curso"}
      />
      <ListaCursos
        cursos={cursos}
        onEditar={handleEditar}
        onEliminar={handleEliminar}
      />
    </div>
  );
}

export default AdminCursos;