const { Router } = require("express");

/* const getProductByName = require("../controllers/getProductByName");
const getProductsById = require("../controllers/getProductsById");
const updateProduct = require("../controllers/updateProducts");
const postProduct = require("../controllers/postProduct"); */

const getAllProducts = require("../controllers/getAllProducts");
const getMenProducts = require("../controllers/getMenProducts");
const getWomenProducts = require("../controllers/getWomenProducts");
const getChildrenProducts = require("../controllers/getChildrenProducts");
const getNewProducts = require("../controllers/getNewProducts");

const router = Router();

router.get("/allproducts", getAllProducts);
router.get("/menproducts", getMenProducts);
router.get("/womenproducts", getWomenProducts);
router.get("/childrenproducts", getChildrenProducts);
router.get("/newproducts", getNewProducts);

/* 
router.post("/producto", postProduct);
router.get("/producto/:nombre", getProductByName);
router.get("/producto/:id", getProductsById);
router.put("/producto/:id", updateProduct); 
*/

module.exports = router;
