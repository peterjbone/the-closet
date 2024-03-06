const { Router } = require('express');
const router = Router();

const {renderProducts, renderProdForm, createNewProd, renderEditForm, updateProd, actDesProd, borrarProd, } = require('../controllers/produd.controller');

// Todos los Productos
router.get('/products', renderProducts)

// Crear Producto
router.get('/products/add', renderProdForm);

router.post('/products/nuev-prod', createNewProd);

// Editar Producto
router.get('/products/edit/:id', renderEditForm);
router.put('/products/edit/:id', updateProd);

// Desactivar Producto
router.put('/products/acDes/:id', actDesProd);

// Borrar Producto
router.delete('/products/delete/:id', borrarProd);



module.exports = router;