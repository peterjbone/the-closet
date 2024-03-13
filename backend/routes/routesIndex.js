const { Router } = require("express");

//* Controllers
const getAllProducts = require("../controllers/getAllProducts");
const getMenProducts = require("../controllers/getMenProducts");
const getWomenProducts = require("../controllers/getWomenProducts");
const getChildrenProducts = require("../controllers/getChildrenProducts");
const getNewProducts = require("../controllers/getNewProducts");
const getProductByName = require("../controllers/getProductByName");
const getHoodiesProducts = require("../controllers/getHoddiesProducts");
const getTshirtsProducts = require("../controllers/getTshirtsProducts");
const getJoggersProducts = require("../controllers/getJoggersProducts");
const getShoes = require("../controllers/getShoes");
const getJeans = require("../controllers/getJeans");
const getShorts = require("../controllers/getShorts");
const getFeaturedProducts = require("../controllers/getFeaturedProducts");
const getTrendyProducts = require("../controllers/getTrendyProducts");

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
router.get("/zapatos", getShoes);
router.get("/jeans", getJeans);
router.get("/shorts", getShorts);
router.get("/destacados", getFeaturedProducts);
router.get("/tendencia", getTrendyProducts);

module.exports = router;
