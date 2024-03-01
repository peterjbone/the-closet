const mongoose = require("mongoose");

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

/*
Insertar documentos a la colección "Productos" de MongoDB

const data = require("./utils/todosProductos.js");
const Producto = require("./models/Productos.js");

async function insertarProductos() {
	try {
		await Producto.insertMany(data);
		console.log("Documentos insertados correctamente");
	} catch (error) {
		console.log("Error al insertar documentos:", error);
	}
}
insertarProductos();
 */
