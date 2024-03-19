require("dotenv").config();
const mongoose = require("mongoose");

//? Validando que existe una URL de MongoDB
if (!process.env.MONGODB_URL) {
	throw new Error("MONGODB_URL debe estar definido (backend)");
}

//? Conección con la base de datos "thecloset"
async function connectDB() {
	try {
		await mongoose.connect(process.env.MONGODB_URL);
		console.log(
			"Conexión establecida con la base de datos 'thecloset' (backend)"
		);
	} catch (error) {
		console.log(
			"Error al conectarse a la base de datos 'thecloset' (desde el backend):",
			error.message
		);
	}
}
module.exports = { connectDB };

//* Insertar documentos necesarios en MongoDB
// Info cruda
const todosProductos = require("./utils/todosProductos2.js");

// Modelos de MongoDB - Mongoose
const Producto = require("./models/Productos.js");

async function insertarInfo() {
	try {
		await Producto.insertMany(todosProductos);

		console.log("Documentos insertados correctamente");
	} catch (error) {
		console.log("Error al insertar documentos:", error);
	}
}
//insertarInfo();
