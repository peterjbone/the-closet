const mongoose = require("mongoose");

// Conección con la base de datos "thecloset"
async function connectDB() {
	try {
		//mongoose.connect("mongodb://localhost:27017/thecloset");
		await mongoose.connect("mongodb://localhost:27017/thecloset"); //Con esta uri me conecta a la base de datos.
		console.log("Conexión establecida con la base de datos.");
	} catch (error) {
		console.log("Error al conectarse a la base de datos:", error);
	}
}

//? Insertar documentos necesarios en MongoDB
const todosProductos = require("./utils/todosProductos2.js");
const opcionesProducto = require("./utils/opciones.js");

const Producto = require("./models/Productos.js");
const Opcion = require("./models/Opciones.js");

async function insertarInfo() {
	try {
		await Producto.insertMany(todosProductos);
		//await Opcion.insertMany(opcionesProducto);
		console.log("Documentos insertados correctamente");
	} catch (error) {
		console.log("Error al insertar documentos:", error);
	}
}
//insertarInfo(); 
//insertarInfo();

//? Cambiar el nombre de la propiedad en todos los documentos
//const Producto = require("./models/Productos.js");
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
//cambiarValorPropiedad();

module.exports = { connectDB };
