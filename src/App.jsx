import React from "react";
import "./App.css";

const App = () => {
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
        <form>
          <div className="title-form">
            <h2>Registro de Defectos</h2>
          </div>
          <fieldset>
            <legend>Datos</legend>
            <label htmlFor="proceso">Proceso que encontró el defecto:</label>
            <select name="proceso" id="proceso" required>
              <option value="">--Proceso que encontró el defecto--</option>
              <option value="prueba-electrica">Prueba Eléctrica</option>
              <option value="inspeccion">Inspección</option>
              <option value="otra">Otra Cosa</option>
            </select>

            <label htmlFor="fecha">Fecha:</label>
            <input type="date" name="fecha" id="fecha" required />

            <label htmlFor="proceso2">Proceso:</label>
            <select name="proceso2" id="proceso2">
              <option value="">--Proceso--</option>
              <option value="alta">FOAM</option>
              <option value="media">Prepa</option>
              <option value="baja">Enmallado</option>
            </select>

            <label htmlFor="descripcion">Descripción del Defecto:</label>
            <textarea name="descripcion" id="descripcion" cols="30" rows="10" required></textarea>

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
