const Producto = require("../models/Productos.js");
//Incluye jeans y pantalones
const getJeans = async (req, res) => {
  try {
    const allProducts = await Producto.find({
      subcategoria: {
        $in: [
          "Jeans",
          "Pantalones",
          "Pantalones Formales",
          "Pantalones de Pijama",
        ],
      },
    });
    allProducts.length
      ? res.status(200).json(allProducts)
      : res.status(404).send("No se encontraron zapatos.");
  } catch (error) {
    res.status(500).send("Error interno:", error);
  }
};
module.exports = getJeans;
