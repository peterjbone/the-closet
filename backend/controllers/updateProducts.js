const Producto = require('../db')

const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id
        const updateInfo = req.body
        console.log(productId, updateInfo);
    
        const updatedProduct = await Producto.findByIdAndUpdate(productId, updateInfo, {new: true})
    
        if(!updatedProduct){
            res.status(404).send('Producto no encontrado')
        }
        res.status(200).send(updatedProduct)
        
    } catch (error) {
        res.status(500).send('Error al actualizar el producto')
        
    }
}

module.exports = updateProduct