const { Schema, model, models } = require("mongoose");

const contentSchema = new Schema({
	id: String,
	nombre: String
});

const optionsSchema = new Schema({
	nombre: String,
	contenido: [contentSchema]
});

const Opcion = models.Opcion || model("Opciones", optionsSchema);
module.exports = Opcion;
