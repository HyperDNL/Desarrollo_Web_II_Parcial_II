import { Dispatch, SetStateAction } from "react";
import { Empleado } from "./Empleado";

export type EmpleadoContextProps = {
  empleado: Empleado;
  setEmpleado: Dispatch<SetStateAction<Empleado>>;
  isLocked: boolean;
  setIsLocked: Dispatch<React.SetStateAction<boolean>>;
};
