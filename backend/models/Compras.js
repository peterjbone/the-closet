const mongoose = require("mongoose");

const CompraSchema = new mongoose.Schema({

    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario' 
    },
    productos: [{
        producto: {
            type: mongoose.Schema.Types.Number,
            ref: 'Producto' 
            
        },
        cantidad: {
            type: Number,
            default: 0
        }
    }],
    },
    {
        timestamps: true

    });

module.exports = mongoose.model("Compra", CompraSchema);