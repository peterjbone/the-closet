const Producto = require('../db')

const postProduct = async (req, res) => {
    let  {
    nombre,
    marca,
    descripcion,
    precio,
    inOferta,
    oferta,
    categoria,
    genero,
    subcategoriag,
    imagen,
    tallas,
    colores,
    stock
    } = req.body

    let newProduct = new Producto({
    nombre,
    marca,
    descripcion,
    precio,
    inOferta,
    oferta,
    categoria,
    genero,
    subcategoriag,
    imagen,
    tallas,
    colores,
    stock
    })

    try {
        await newProduct.save()
        console.log('Se guardo el producto', newProduct);
        res.status(200).json(newProduct)
        
    } catch (error) {
        res.status(500).json({error: 'Error al guardar el producto'})
        
    }

    console.log(newProduct)



}
module.exports = postProduct