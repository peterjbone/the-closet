const { Router } = require("express");

//* Controllers
const getAllProducts = require("../controllers/getAllProducts");
const getMenProducts = require("../controllers/getMenProducts");
const getWomenProducts = require("../controllers/getWomenProducts");
const getChildrenProducts = require("../controllers/getChildrenProducts");
const getNewProducts = require("../controllers/getNewProducts");
const getProductByName = require("../controllers/getProductByName");
const postCompra = require('../controllers/PostCompra')
const simuCompra = require('../controllers/simulacionCompra')
const getHoodiesProducts = require("../controllers/getHoddiesProducts");
const getTshirtsProducts = require("../controllers/getTshirtsProducts");
const getJoggersProducts = require("../controllers/getJoggersProducts");
const getMpPreference = require('../controllers/getMpPreference')
const paymentControl = require('../controllers/mpPayment')
const getShoes = require("../controllers/getShoes");
const getJeans = require("../controllers/getJeans");
const getShorts = require("../controllers/getShorts");
const getCompras = require('../controllers/getCompras')
const postReview = require('../controllers/PostReview')
const getReview = require('../controllers/getReview')
const updateStock = require('../controllers/updateStock')

//* Index router
const router = Router();

//* Routes
router.get("/allproducts", getAllProducts);
router.get("/menproducts", getMenProducts);
router.get("/womenproducts", getWomenProducts);
router.get("/childrenproducts", getChildrenProducts);
router.get("/newproducts", getNewProducts);
router.get("/product/:nombre", getProductByName);
router.get("/hoodies", getHoodiesProducts);
router.get("/t-shirts", getTshirtsProducts);
router.get("/joggers", getJoggersProducts);
router.get("/preference", getMpPreference)
router.get('/compras', getCompras)
router.get('/review/:id', getReview)

router.post("/preference", getMpPreference)
router.post('/payment', paymentControl )
router.post('/review', postReview)

router.put('/stock', updateStock)

router.get("/zapatos", getShoes);
router.get("/jeans", getJeans);
router.get("/shorts", getShorts);

module.exports = router;
