import React from "react";

function CrearCurso({
  titulo,
  nombre,
  descripcion,
  imagen,
  horario,
  setNombre,
  setDescripcion,
  setImagen,
  setHorario,
  onSubmit,
  onCancel,
  textoBoton = "Guardar",
}) {
  return (
    <form onSubmit={onSubmit} className="crear-curso-form">
      {titulo && <h3 className="crear-curso-titulo">{titulo}</h3>}
      <div className="form-group">
        <label htmlFor="nombre">Nombre del curso *</label>
        <input
          type="text"
          id="nombre"
          placeholder="Nombre del curso"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="descripcion">Descripción *</label>
        <textarea
          id="descripcion"
          placeholder="Descripción del curso"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="imagen">Imagen (URL) *</label>
        <input
          type="text"
          id="imagen"
          placeholder="URL de la imagen"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="horario">Horario *</label>
        <input
          type="text"
          id="horario"
          placeholder="Ejemplo: 10:00 - 12:00"
          value={horario}
          onChange={(e) => setHorario(e.target.value)}
          required
        />
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button type="submit" className="btn-crear-curso">
          {textoBoton}
        </button>
        {onCancel && (
          <button type="button" className="btn-cancelar-curso" onClick={onCancel}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}

export default CrearCurso;