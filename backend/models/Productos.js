const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	nombre: String,
	marca: String,
	description: String,
	precio: Number,
	oferta: {
		type: mongoose.Schema.Types.Mixed,
		default: {}
	},
	Activo: Boolean,
	productoNuevo: Boolean,
	categoria: String,
	genero: String,
	subcategoria: String,
	imagen: [String],
	tallas: [String],
	colores: [String],
	opcion: {
		type: mongoose.Schema.Types.Mixed,
		default: []
	}
});

module.exports = mongoose.model("Producto", ProductSchema);
