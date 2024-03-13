const Producto = require("../models/Productos.js");

const getTrendyProducts = async (req, res) => {
  try {
    const allProducts = await Producto.find({
      subcategoria: "Tendencia",
    });
    console.log(allProducts);

    if (allProducts.length) {
      res.status(200).json(allProducts);
    } else {
      res.status(404).send("Por el momento no hay productos en tendencia.");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = getTrendyProducts;
