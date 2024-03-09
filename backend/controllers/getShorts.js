const Producto = require("../models/Productos.js");

const getShorts = async (req, res) => {
  try {
    const allProducts = await Producto.find({
      subcategoria: {
        $in: ["Short", "Shorts", "Faldas", "Pantalones Cortos de Ciclismo"],
      },
    });
    allProducts.length
      ? res.status(200).json(allProducts)
      : res.status(404).send("No se encontraron zapatos.");
  } catch (error) {
    res.status(500).send("Error interno:", error);
  }
};
module.exports = getShorts;
