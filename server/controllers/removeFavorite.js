const Usuario = require("../models/Usuarios.js");

const removeFavorite = async (req, res) => {
	const { userid, productid } = req.query;

	try {
		//? Buscando al usuario
		const user = await Usuario.findOne({ _id: userid });

		//? Eliminando producto de favoritos
		const currentFavorites = user.favorites;
		const updatedFavorites = currentFavorites.filter(
			(item) => item._id !== productid
		);
		const updatedUser = await Usuario.findOneAndUpdate(
			{ _id: userid },
			{ $set: { favorites: [...updatedFavorites] } },
			{ new: true }
		);

		//? Devolviendo al usuario actualizado
		//console.log(updatedUser);
		res.status(200).json(updatedUser);
	} catch (error) {
		console.log(
			"Error interno de Mongoose, en controlador 'remoteFavorite' (backend):",
			error
		);
		res.status(500).send(error.message);
	}
};

module.exports = removeFavorite;
