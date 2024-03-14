const Producto = require("../models/Productos.js");

const getProductByName = async (req, res) => {
	const { nombre } = req.params;
	const fixedName = nombre.split("-").join(" ");

	try {
		const producto = await Producto.findOne({ nombre: fixedName });

		if (producto) {
			res.status(200).json(producto);
		} else {
			res.status(404).send("No se encontro el producto");
		}
	} catch (error) {
		console.log(error);
		res.status(500).send("ERROR INTERNO", error.message);
	}
};

module.exports = getProductByName;
