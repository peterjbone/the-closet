const preferenciaDePago = require('./mpPreference')
const Producto = require('../models/Productos')

const simuCompra = async () => {
    try {
        const productos = await Producto.find({}); // Obtener todos los productos
        
        // Verificar si hay productos en la base de datos
        if (!productos || productos.length === 0) {
            console.log('No hay productos en la base de datos.');
            return;
        }
        
        // Generar un ID de compra simulado
        const compraId = 'ID_DE_COMPRA_GENERADO';
        
        // Crear preferencia de pago
        const preferenceId = await preferenciaDePago(productos, compraId);

        console.log('Preferencia de pago creada con los productos de la base de datos:', preferenceId);
        
    } catch (error) {
        console.error('Error en la simulación de compra:', error);
    }

}

module.exports = simuCompra
