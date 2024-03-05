const Producto = require("../models/Productos.js");

const getChildrenProducts = async (req, res) => {
	try {
		const allProducts = await Producto.find({
			categoria: "infante",
			genero: { $in: ["masculino", "femenino"] }
		});

		if (allProducts.length) {
			res.status(200).json(allProducts);
		} else {
			res.status(404).send("No se encontraron productos.");
		}
	} catch (error) {
		res.status(500).send(error);
	}
};

module.exports = getChildrenProducts;
