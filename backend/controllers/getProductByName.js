const Producto = require("../db");

const getProductByName = async (req, res) => {
	// nombre del producto
	const { nombre } = req.params;
};

module.exports = getProductByName;
