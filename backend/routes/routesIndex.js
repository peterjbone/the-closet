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
const postCompra = require('../controllers/PostCompra')
const simuCompra = require('../controllers/simulacionCompra')
const getHoodiesProducts = require("../controllers/getHoddiesProducts");
const getTshirtsProducts = require("../controllers/getTshirtsProducts");
const getJoggersProducts = require("../controllers/getJoggersProducts");
const getMpPreference = require('../controllers/getMpPreference')
const paymentControl = require('../controllers/mpPayment')

const router = Router();

router.get("/allproducts", getAllProducts);
router.get("/menproducts", getMenProducts);
router.get("/womenproducts", getWomenProducts);
router.get("/childrenproducts", getChildrenProducts);
router.get("/newproducts", getNewProducts);
router.get("/hoodies", getHoodiesProducts);
router.get("/t-shirts", getTshirtsProducts);
router.get("/joggers", getJoggersProducts);
router.get("/preference", getMpPreference)

router.post("/preference", getMpPreference)
router.post('/payment', paymentControl )



/* 
router.post("/producto", postProduct);
router.get("/producto/:nombre", getProductByName);
router.get("/producto/:id", getProductsById);
router.put("/producto/:id", updateProduct); 
*/

module.exports = router;
