const Producto = require("../db.js");

const getChildrenProducts = async (req, res) => {
  try {
    const allProducts = await Producto.find({
      categoria: "infantes",
      genero: { $in: ["masculino", "femenino"] },
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

module.exports = getChildrenProducts;
