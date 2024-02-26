const mongoose = require("mongoose");
//const data = require("./utils/data.js");

// Conección con la base de datos "thecloset"
async function connectToDatabase() {
	try {
		mongoose.connect("mongodb://localhost:27017/thecloset");
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

module.exports = ModeloProducto;
