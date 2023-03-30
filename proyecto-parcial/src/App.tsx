import React from "react";
import { HomePage } from "./pages/HomePage";
import { EmpleadoProvider } from "./context/EmpleadoContext";

function App() {
  return (
    <EmpleadoProvider>
      <div className="children">
        <HomePage />
      </div>
    </EmpleadoProvider>
  );
}

export default App;
