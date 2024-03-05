const Producto = require('../db')

const postProduct = async (req, res) => {
    let  {
    name,
    brand,
    description,
    price,
    onSale,
    sale,
    category,
    gender,
    subCategory,
    image,
    size,
    options,
    isActive,
    newArrival

    } = req.body

    let newProduct = new Producto({
        name,
        brand,
        description,
        price,
        onSale,
        sale,
        category,
        gender,
        subCategory,
        image,
        size,
        options,
        isActive,
        newArrival
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