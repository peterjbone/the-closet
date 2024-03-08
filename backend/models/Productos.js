const { Schema, model, models } = require("mongoose");

const ProductSchema = new Schema({
	nombre: String,
	marca: String,
	descripcion: String,
	precio: Number,
	oferta: {
		type: Schema.Types.Mixed,
		default: {}
	},
	activo: Boolean,
	productoNuevo: Boolean,
	categoria: String,
	genero: String,
	subcategoria: String,
	imagen: [String],
	tallas: [String],
	colores: [String],
	opcion: {
		type: Schema.Types.Mixed,
		default: []
	}
});

const Producto = models.Producto || model("Producto", ProductSchema);
module.exports = Producto;
