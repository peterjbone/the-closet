const {Router} = require('express')
const getAllProducts = require('../controllers/getAllProducts')
const getProductByName = require('../controllers/getProductByName')
const postProduct = require('../controllers/postProduct')


const router = Router()

router.get('/', getAllProducts)
router.get('/product/:nombre', getProductByName)
router.post('/product/', postProduct)


module.exports = router