const Producto = require('../db')

const getAllProducts = async (req, res) => {
    try {
        const allProducts = await Producto.find()

        if(allProducts.length){
            const formattedProducts = allProducts.map(product =>({
                id:product.id,
                name: product.name,
                image: product.image,
                size: product.size,
                price: product.price,
                onSale: product.inSale,
                sale: product.sale,
                newArrival: product.newArrival
                
                
                
            }))

            res.status(200).send(formattedProducts) 
        }   else {res.status(404).send('No se encuentra el producto seleccionado')
            }

        
    } catch (error) {
        res.status(500).send('Error!')
        
    }

}


module.exports = getAllProducts