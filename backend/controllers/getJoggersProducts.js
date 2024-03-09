const Producto = require("../models/Productos.js");

const getJoggersProducts = async (req, res) => {
  try {
    const allProducts = await Producto.find({
      subcategoria: "Leggings y Pantalones Deportivos",
    });
    allProducts.length
      ? res.status(200).json(allProducts)
      : res.status(404).send("No se encontraron hoodies.");
  } catch (error) {
    res.status(500).send("Error interno:", error);
  }
};
module.exports = getJoggersProducts;
