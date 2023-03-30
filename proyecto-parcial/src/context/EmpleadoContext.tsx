import { createContext, useContext, useState } from "react";
import { Empleado } from "../interfaces/Empleado";
import { EmpleadoContextProps } from "../interfaces/EmpleadoContextProps";
import { Props } from "../interfaces/Props";

const defaultEmpleadoContext: EmpleadoContextProps = {
  empleado: {
    nombre: "",
    fechaNacimiento: new Date(),
    puesto: "",
    email: "",
    telefono: "",
    foto: "",
  },
  setEmpleado: () => {},
  isLocked: false,
  setIsLocked: () => {},
};

const EmpleadoContext = createContext(defaultEmpleadoContext);

export const useEmpleado = () => {
  return useContext(EmpleadoContext);
};

export const EmpleadoProvider = ({ children }: Props) => {
  const [empleado, setEmpleado] = useState<Empleado>(
    defaultEmpleadoContext.empleado
  );

  const [isLocked, setIsLocked] = useState<boolean>(
    defaultEmpleadoContext.isLocked
  );

  return (
    <EmpleadoContext.Provider
      value={{ empleado, setEmpleado, isLocked, setIsLocked }}
    >
      {children}
    </EmpleadoContext.Provider>
  );
};
