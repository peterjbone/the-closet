const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  nombre: String,
  marca: String,
  descripcion: String, // Cambiado a minúsculas pq no se insertó a la base de datos.
  precio: Number,
  oferta: {
    type: mongoose.Schema.Types.Mixed,
    default: {},
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
    type: mongoose.Schema.Types.Mixed,
    default: [],
  },
});

module.exports = mongoose.model("Producto", ProductSchema);
