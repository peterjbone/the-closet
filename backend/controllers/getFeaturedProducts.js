const Producto = require("../models/Productos.js");

const getFeaturedProducts = async (req, res) => {
  try {
    const allProducts = await Producto.find({
      subcategoria: "Destacado",
    });
    console.log(allProducts);

    if (allProducts.length) {
      res.status(200).json(allProducts);
    } else {
      res
        .status(404)
        .send("No se encontraron productos destacados por el momento.");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = getFeaturedProducts;
