const Usuario = require("../models/Usuarios.js");

const getFavorites = async (req, res) => {
	const { userid } = req.query;

	try {
		//? Buscando al usuario (el usuario siempre deberia existir)
		const user = await Usuario.findOne({ _id: userid });

		//? Devolviendo los favoritos del usuario (no importa si esta vacío)
		const existedFavorites = user.favorites;
		return res.status(200).json(existedFavorites);
	} catch (error) {
		console.log(
			"Error interno de Mongoose, en controlador 'getFavorites' (backend):",
			error
		);
		return res.status(500).send(error.message);
	}
};

module.exports = getFavorites;
