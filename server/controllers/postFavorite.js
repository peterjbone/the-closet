const Usuario = require("../models/Usuarios.js");

const postFavorite = async (req, res) => {
	const { _id, product } = req.body;

	try {
		//? Buscando al usuario
		const user = await Usuario.findOne({ _id: _id });

		//? Recogiendo existentes y Agregando el nuevo favorito
		const existedFavorites = user.favorites;
		const updatedFavorites = [...existedFavorites, product];

		const updatedUser = await Usuario.findOneAndUpdate(
			{ _id: _id },
			{ $set: { favorites: updatedFavorites } },
			{ new: true }
		);

		//? Devolviendo e Imprimiendo al usuario actualizado
		//console.log(updatedUser);
		res.status(200).json(updatedUser);
	} catch (error) {
		console.log(
			"Error interno de Mongoose, en controlador 'postFavorite' (backend):",
			error
		);
		res.status(500).send(error.message);
	}
};

module.exports = postFavorite;
