const Compras = require('../models/Compras')

const getCompras = async (req, res) => {
    try {
        const { producto, userId } = req.query
        console.log('query', producto, userId);
        
        const compras = await Compras.findOne({
            usuario: userId,
            'productos':{$elemMatch: {producto: producto}}
            
        })
        console.log('compras', compras);
    
        if(compras){
            res.status(200).json({success: true, compras})
        }
        else res.status(403).json({success: false, message: 'El usuario no compro el producto'})
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error interno del servidor', error)
    }
}

module.exports = getCompras