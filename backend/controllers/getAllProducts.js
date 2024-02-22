const Producto = require('../db')

const getAllProducts = async (req, res) => {
    try {
        const allProducts = await Producto.find()

        if(allProducts.length){
            const formattedProducts = allProducts.map(product =>({
                id:product.id,
                nombre: product.nombre,
                marca: product.marca,
                descripcion: product.descripcion,
                precio: product.precio,
                inOferta: product.inOferta,
                oferta: product.oferta,
                genero: product.genero,
                categoria: product.categoria,
                subcategoria:product.subcategoria,
                imagen: product.imagen,
                tallas: product.tallas,
                colores: product.colores,
                stock: product.stock,
            }))

            res.status(200).send(formattedProducts) 
        }   else {res.status(404).send('No se encuentra el producto seleccionado')
            }

        
    } catch (error) {
        res.status(500).send('Error!')
        
    }

}


module.exports = getAllProducts