const { Schema, model, models } = require("mongoose");

const UserSchema = new Schema({
	email: {
		type: String,
		unique: true,
		required: true,
		match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email is not valid."]
	},
	password: {
		type: String,
		required: [true, "Password is required"],
		select: false
	},
	fullname: {
		type: String,
		required: [true, "Fullname is required"],
		minLength: [6, "Fullname must be at least 6 characters"],
		maxLength: [35, "Fullname must be at most 35 characters"]
	}
});

// La lógica aqui evita que se cree un nuevo modelo cada vez que una ruta lo llama
// Mongoose pluraliza automáticamente a Usuarios (pero solo se vera reflejado en MongoDB)
const Usuario = models.Usuario || model("Usuario", UserSchema);
module.exports = Usuario;
