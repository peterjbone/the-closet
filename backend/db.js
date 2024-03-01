const mongoose = require("mongoose");
//const data = require("./utils/todosProductos.js");

// Conección con la base de datos "thecloset"
async function connectToDatabase() {
  try {
    //mongoose.connect("mongodb://localhost:27017/thecloset");
    mongoose.connect("mongodb://127.0.0.1:27017/thecloset"); //Con esta uri me conecta a la base de datos.
    console.log("Conección establecida con la base de datos.");
  } catch (error) {
    console.log("Error al conectarse a la base de datos:", error);
  }
}
connectToDatabase();

// Importando la colección "Productos" de MongoDB
const ModeloProducto = require("./models/Productos.js");

// Insertar documentos a la colección "Productos" de MongoDB
/* 
async function insertarProductos() {
	try {
		await ModeloProducto.insertMany(data);
		console.log("Documentos insertados correctamente");
	} catch (error) {
		console.log("Error al insertar documentos:", error);
	}
}
insertarProductos();
 */
const Producto = require("./models/Productos.js");

// Cambiar el nombre de la propiedad en todos los documentos
async function cambiarValorPropiedad() {
  try {
    await Producto.updateMany(
      { categoria: "niño" }, // Filtro para seleccionar los documentos con categoria "niño"
      { $set: { categoria: "infantes" } } // Cambiar categoria "niño" por "infantes"
    );
    console.log("Se cambió el valor.");
  } catch (error) {
    console.log("Error al cambiar el valor:", error);
  }
}
cambiarValorPropiedad();

module.exports = ModeloProducto;
