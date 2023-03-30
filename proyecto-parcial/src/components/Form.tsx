import React from "react";
import { useEmpleado } from "../context/EmpleadoContext";
import { useForm } from "../hooks/useForm";
import useLock from "../hooks/useLock";

export const Form = () => {
  const { empleado, setIsLocked } = useEmpleado();
  const { lock, unlock } = useLock(setIsLocked);

  const {
    handleChange,
    handleFechaNacimientoChange,
    handleFotoChange,
    handleSubmit,
    errores,
  } = useForm();

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label className="label" htmlFor="nombre">
            Nombre:
          </label>
          <input
            className="input-style"
            type="text"
            id="nombre"
            name="nombre"
            value={empleado.nombre}
            onChange={handleChange}
          />
          {errores.nombre && <p className="error">{errores.nombre}</p>}
        </div>
        <div>
          <label className="label" htmlFor="fechaNacimiento">
            Fecha de Nacimiento:
          </label>
          <input
            className="input-style"
            type="date"
            id="fechaNacimiento"
            name="fechaNacimiento"
            value={empleado.fechaNacimiento?.toISOString().substr(0, 10)}
            onChange={handleFechaNacimientoChange}
          />
          {errores.fechaNacimiento && (
            <p className="error">{errores.fechaNacimiento}</p>
          )}
        </div>
        <div>
          <label className="label" htmlFor="puesto">
            Puesto:
          </label>
          <select
            className="input-select"
            id="puesto"
            name="puesto"
            value={empleado.puesto}
            onChange={handleChange}
          >
            <option value="">--Seleccione--</option>
            <option value="gerente">Gerente</option>
            <option value="desarrollador jr">Desarrollador JR</option>
            <option value="desarrollador sr">Desarrollador Sr</option>
            <option value="soporte">Soporte</option>
            <option value="líder de proyecto">Líder de Proyecto</option>
          </select>
          {errores.puesto && <p className="error">{errores.puesto}</p>}
        </div>
        <div>
          <label className="label" htmlFor="email">
            Email:
          </label>
          <input
            className="input-style"
            type="email"
            id="email"
            name="email"
            value={empleado.email}
            onChange={handleChange}
          />
          {errores.email && <p className="error">{errores.email}</p>}
        </div>
        <div>
          <label className="label" htmlFor="telefono">
            Teléfono:
          </label>
          <input
            className="input-style"
            type="tel"
            id="telefono"
            name="telefono"
            value={empleado.telefono}
            onChange={handleChange}
          />
          {errores.telefono && <p className="error">{errores.telefono}</p>}
        </div>
        <div>
          <label className="label" htmlFor="foto">
            Foto:
          </label>
          <input
            className="input"
            type="file"
            id="foto"
            name="foto"
            onChange={handleFotoChange}
          />
          {errores.foto && <p className="error">{errores.foto}</p>}
        </div>
        <button className="button" type="submit" onClick={lock}>
          Bloquear Tarjeta
        </button>
        <button className="button" type="submit" onClick={unlock}>
          Desbloquear Tarjeta
        </button>
      </form>
    </div>
  );
};
