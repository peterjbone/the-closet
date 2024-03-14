const Producto = require('../db')

const getProductsById = async (req, res) => {
    const id = req.params.id
    
    try {
        const product = await Producto.findById(id)
        if(!product){
            res.status(404).json({message: 'No hay un producto con esa ID'})
        }
        
        res.status(200).send(product)
    } catch (error) {
        res.status(500).send('Error al buscar el producto. Verifique el ID')
        
    }
}

module.exports = getProductsById