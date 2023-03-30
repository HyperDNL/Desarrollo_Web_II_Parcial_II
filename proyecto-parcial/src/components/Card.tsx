import React from "react";
import { useEmpleado } from "../context/EmpleadoContext";

export const Card = () => {
  const { empleado, isLocked } = useEmpleado();
  const { nombre, puesto, email, telefono, fechaNacimiento, foto } = empleado;

  return (
    <div className="card-container">
      <div className="card-header">
        <h2 className="card-title">{nombre}</h2>
        <img className="card-image" src={foto} alt={nombre} />
      </div>
      <div className="card-body">
        <p className="card-text">Puesto: {puesto}</p>
        <p className="card-text">E-Mail: {email}</p>
        <p className="card-text">Teléfono: {telefono}</p>
        <p className="card-text">
          Fecha de nacimiento: {fechaNacimiento.toLocaleDateString()}
        </p>
        <p className="card-text">
          Tarjeta: {isLocked ? "Bloqueada" : "Desbloqueada"}
        </p>
      </div>
    </div>
  );
};
