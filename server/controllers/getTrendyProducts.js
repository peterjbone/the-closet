const Producto = require("../models/Productos.js");

const getTrendyProducts = async (req, res) => {
	try {
		const allProducts = await Producto.find({
			subcategoria: "Tendencia"
		});

		//? Validando si se encontro productos
		if (allProducts.length) {
			res.status(200).json(allProducts);
		} else {
			res
				.status(404)
				.send("No se encontraron productos en tendencia por el momento.");
		}
	} catch (error) {
		console.log(
			"Error interno de MongoDB al buscar productos Tendencia:",
			error
		);
		res.status(500).send(error);
	}
};

module.exports = getTrendyProducts;
