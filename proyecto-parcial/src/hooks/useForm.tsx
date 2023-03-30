import React, { useState } from "react";
import { useEmpleado } from "../context/EmpleadoContext";
import { Errores } from "../interfaces/Errores";

export const useForm = () => {
  const { empleado, setEmpleado, isLocked } = useEmpleado();

  const [errores, setErrores] = useState<Errores>({
    nombre: "",
    fechaNacimiento: "",
    puesto: "",
    email: "",
    telefono: "",
    foto: "",
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    if (!isLocked) {
      setEmpleado((prevEmpleado) => ({ ...prevEmpleado, [name]: value }));
    }
  };

  const handleFechaNacimientoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    if (!isLocked) {
      setEmpleado((prevEmpleado) => ({
        ...prevEmpleado,
        fechaNacimiento: new Date(value),
      }));
    }
  };

  const handleFotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (!isLocked) {
          setEmpleado((prevEmpleado) => ({
            ...prevEmpleado,
            foto: e.target?.result as string,
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errores: Errores = {
      nombre: "",
      fechaNacimiento: "",
      puesto: "",
      email: "",
      telefono: "",
      foto: "",
    };
    let hayErrores = false;

    if (!empleado.nombre) {
      errores.nombre = "El nombre es obligatorio";
      hayErrores = true;
    }

    if (!empleado.fechaNacimiento) {
      errores.fechaNacimiento = "La fecha de nacimiento es obligatoria";
      hayErrores = true;
    }

    if (!empleado.foto) {
      errores.foto = "La foto es obligatoria";
      hayErrores = true;
    }

    if (!empleado.puesto) {
      errores.puesto = "El puesto es obligatorio";
      hayErrores = true;
    }

    if (!empleado.email) {
      errores.email = "El email es obligatorio";
      hayErrores = true;
    } else if (!/^\S+@\S+\.\S+$/.test(empleado.email)) {
      errores.email = "El email no es válido";
      hayErrores = true;
    }

    if (!empleado.telefono) {
      errores.telefono = "El teléfono es obligatorio";
      hayErrores = true;
    } else if (!/^\d{10}$/.test(empleado.telefono)) {
      errores.telefono = "El teléfono debe tener 10 dígitos";
      hayErrores = true;
    }

    if (hayErrores) {
      setErrores(errores);
      return;
    }

    setErrores({
      nombre: "",
      fechaNacimiento: "",
      puesto: "",
      email: "",
      telefono: "",
      foto: "",
    });
  };

  return {
    handleChange,
    handleFechaNacimientoChange,
    handleFotoChange,
    handleSubmit,
    errores,
  };
};
