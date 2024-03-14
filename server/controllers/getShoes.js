const Producto = require("../models/Productos.js");

const getShoes = async (req, res) => {
  try {
    const allProducts = await Producto.find({
      subcategoria: {
        $in: [
          "Zapatillas Casuales",
          "Zapatos",
          "Zapatillas de Casa",
          "Zapatillas Deportivas",
          "Botas",
          "Botas Cortas",
          "Botin",
          "Sandalias",
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
module.exports = getShoes;
