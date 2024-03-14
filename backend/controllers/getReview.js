const Review = require('../models/Review')
const Usuario = require('../models/Usuarios')

const getReview = async (req, res) => {
    const id = req.params.id
    console.log(id);
    try {
        const review = await Review.find({productoId:id}).populate('usuario');
        console.log(review);
        if (!review) {
            return res.status(404).json({ message: 'No hay reseñas para este producto' });
        }
        
        return res.status(200).send(review);
    } catch (error) {
        console.error('Error al buscar las reseñas del producto. Verifique el ID', error);
        return res.status(500).send('Error al buscar las reseñas del producto. Verifique el ID');
    }
}

module.exports = getReview
