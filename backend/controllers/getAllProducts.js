const Producto = require("../db");

const getAllProducts = async (req, res) => {
	try {
		const allProducts = await Producto.find();

		if (allProducts.length) {
			res.status(200).json(allProducts);
		} else {
			res.status(404).send("No hay productos.");
		}
	} catch (error) {
		res.status(500).send("Error interno:", error);
	}
};

module.exports = getAllProducts;
