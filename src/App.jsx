import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    proceso: "",
    fecha: "",
    proceso2: "",
    descripcion: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación simple
    if (!formData.proceso || !formData.fecha || !formData.descripcion) {
      alert("Por favor completa todos los campos requeridos");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/defectos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Defecto registrado correctamente");
        setFormData({
          proceso: "",
          fecha: "",
          proceso2: "",
          descripcion: "",
        });
      } else {
        console.error("Error al enviar los datos al backend");
        alert("Hubo un error al registrar el defecto");
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      alert("No se pudo conectar con el servidor");
    }
  };

  return (
    <div className="contenedor">
      {/* Navbar */}
      <nav>
        <h1>Proyect Quality #Estacion</h1>
        <ul>
          <li>
            <a href="#logout">Logout</a>
          </li>
        </ul>
      </nav>

      {/* Formulario de registro */}
      <section>
        <form onSubmit={handleSubmit}>
          <div className="title-form">
            <h2>Registro de Defectos</h2>
          </div>
          <fieldset>
            <legend>Datos</legend>
            <label htmlFor="proceso">Proceso que encontró el defecto:</label>
            <select
              name="proceso"
              id="proceso"
              value={formData.proceso}
              onChange={handleInputChange}
              required
            >
              <option value="">--Proceso que encontró el defecto--</option>
              <option value="prueba-electrica">Prueba Eléctrica</option>
              <option value="inspeccion">Inspección</option>
              <option value="otra">Otra Cosa</option>
            </select>

            <label htmlFor="fecha">Fecha:</label>
            <input
              type="date"
              name="fecha"
              id="fecha"
              value={formData.fecha}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="proceso2">Proceso:</label>
            <select
              name="proceso2"
              id="proceso2"
              value={formData.proceso2}
              onChange={handleInputChange}
            >
              <option value="">--Proceso--</option>
              <option value="alta">FOAM</option>
              <option value="media">Prepa</option>
              <option value="baja">Enmallado</option>
            </select>

            <label htmlFor="descripcion">Descripción del Defecto:</label>
            <textarea
              name="descripcion"
              id="descripcion"
              cols="30"
              rows="10"
              value={formData.descripcion}
              onChange={handleInputChange}
              required
            ></textarea>

            <button type="submit">Enviar</button>
          </fieldset>
        </form>
      </section>

      {/* Datos guardados */}
      <section>
        <div className="datos-contenedor">
          <div className="datos-guardados">
            <h1>Datos Guardados</h1>
            <div className="datos">
              <div className="div1">
                <label>Fecha:</label>
                <span>XX/XX/XXXX</span>
              </div>
              <div className="div2">
                <label>Hora:</label>
                <span>XX:XX</span>
              </div>
              <div className="div3">
                <label>Proceso:</label>
                <span>Inspección</span>
              </div>
              <div className="div4">
                <label>Descripción:</label>
                <span>Defecto encontrado en la sección del cable...</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>Alanis J.</p>
      </footer>
    </div>
  );
};

export default App;
