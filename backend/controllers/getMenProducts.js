const Producto = require("../db");

const getMenProducts = async (req, res) => {
	try {
		const allProducts = await Producto.find({
			genero: "masculino"
		});

		if (allProducts.length) {
			res.status(200).json(allProducts);
		} else {
			res.status(404).send("No se encontraron productos.");
		}
	} catch (error) {
		res.status(500).send("Error interno:", error);
	}
};

module.exports = getMenProducts;
