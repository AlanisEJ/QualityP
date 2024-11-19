const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configuración de la base de datos
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "quality_p", // Cambia esto al nombre de tu base de datos
});

// Conexión a la base de datos
db.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
    return;
  }
  console.log("Conexión exitosa a la base de datos");
});

// Endpoint para guardar datos
app.post("/api/defectos", (req, res) => {
  const { fecha, hora, proceso, descripcion } = req.body;
  const sql = "INSERT INTO defectos (fecha, proceso, descripcion) VALUES (?, ?, ?)";
  db.query(sql, [fecha,  proceso, descripcion], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Error al guardar el defecto" });
    } else {
      res.status(200).json({ message: "Defecto guardado correctamente" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
