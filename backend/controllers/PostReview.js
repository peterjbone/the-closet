const Review = require('../models/Review')

const postReview = async (req, res) => {

    const {reseña, producto, userId, puntaje} =req.body.review
    

    const review = {
        usuario: userId,
        productoId: producto,
        reseña: reseña,
        puntaje: puntaje

    }
    console.log(review);
    const postReseña = new Review(review)
    const nuevaReseña = await postReseña.save()

    res.status(200).send(nuevaReseña)
}

module.exports = postReview