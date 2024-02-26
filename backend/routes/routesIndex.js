const { Router } = require("express");
const getAllProducts = require("../controllers/getAllProducts");
const getProductByName = require("../controllers/getProductByName");
const postProduct = require("../controllers/postProduct");
const getProductsById = require("../controllers/getProductsById");
const updateProduct = require("../controllers/updateProducts");

const router = Router();

router.post("/producto", postProduct);

router.get("/productos", getAllProducts);
router.get("/producto/:nombre", getProductByName);
router.get("/producto/:id", getProductsById);

router.put("/producto/:id", updateProduct);

module.exports = router;
