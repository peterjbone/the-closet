const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    productoId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Producto' 
        },
    reseña : {
        type: String
    },
    puntaje : {
        type: Number
    }
    
    
})
module.exports = mongoose.model("Review", ReviewSchema);