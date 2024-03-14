const Producto = require("../models/Productos.js");

const getTshirtsProducts = async (req, res) => {
  try {
    const allProducts = await Producto.find({
      subcategoria: { $in: ["Camisetas y Polos", "Camisetas de Deporte"] },
    });
    allProducts.length
      ? res.status(200).json(allProducts)
      : res.status(404).send("No se encontraron hoodies.");
  } catch (error) {
    res.status(500).send("Error interno:", error);
  }
};
module.exports = getTshirtsProducts;
