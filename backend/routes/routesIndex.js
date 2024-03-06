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
const compra = require('../controllers/mpPreference')
const getHoodiesProducts = require("../controllers/getHoddiesProducts");
const getTshirtsProducts = require("../controllers/getTshirtsProducts");
const getJoggersProducts = require("../controllers/getJoggersProducts");

const router = Router();

router.get("/allproducts", getAllProducts);
router.get("/menproducts", getMenProducts);
router.get("/womenproducts", getWomenProducts);
router.get("/childrenproducts", getChildrenProducts);
router.get("/newproducts", getNewProducts);
router.get("/hoodies", getHoodiesProducts);
router.get("/t-shirts", getTshirtsProducts);
router.get("/joggers", getJoggersProducts);

router.get('/simular', simuCompra )

// const productos = [
   
//     {nombre: 'Remera', precio: 2, cantidad: 1}

// ]
// const compraId = 'compra1'
router.post("/compra", compra.compra)

/* 
router.post("/producto", postProduct);
router.get("/producto/:nombre", getProductByName);
router.get("/producto/:id", getProductsById);
router.put("/producto/:id", updateProduct); 
*/

module.exports = router;
