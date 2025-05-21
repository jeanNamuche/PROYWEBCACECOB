function ListaCursos({ cursos = [], onEditar, onEliminar }) {
  return (
    <div className="p-6 max-w-6xl mx-auto">
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
                    <img src={curso.imagen} alt="img" className="imagen-curso" />
                  )}
                </td>
                <td className="p-3 border">
                  <div className="flex gap-2">
                    <button
                      onClick={() => onEditar && onEditar(curso)}
                      className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => onEliminar && onEliminar(curso.id)}
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