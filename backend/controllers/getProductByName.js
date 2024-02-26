const Producto = require('../db')

const getProductByName = async (req, res) => {
   
    const {nombre} = req.params

    const productName = await Producto.find({ nombre: { $regex: new RegExp(`${nombre}`, 'i') } })
    productName.length ? 
    res.status(200).send(productName) :
    res.status(404).send('No hay un producto con ese nombre')
}

module.exports = getProductByName