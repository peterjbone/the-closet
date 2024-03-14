const mongoose = require("mongoose");

const CompraSchema = new mongoose.Schema({
    
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    productos: [{
        producto: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Producto' 

            
        },
        precio_unitario:{
            type:Number,
        },
       
        cantidad: {
            type: Number,
            default: 1
        },
        talle: {
            type: String,

        },
        color:{
            type: String,
        }
    }], 
    // precio_total:{
    //     type:Number
    // }
    },
    {
        timestamps: true

    });

module.exports = mongoose.model("Compra", CompraSchema);