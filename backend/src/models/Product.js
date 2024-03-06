const {Schema, model} = require('mongoose');

const ProductSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true,
        default:'Ninguna'
    },
    descripcion: {
        type: String,
        required: true,
        default:'No tiene'
    },
    precio: {
        type: Number,
        required: true,
        default: 0.0
    },
    oferta: {
        offActiva: {
            type: Boolean,
            default: false
        },
        descuento: {
            type: Number,
            default: 0
        }
    },
    activo: {
        type: Boolean,
        default: true
    },
    productoNuevo: {
        type: Boolean,
        default: true
    },
    // categoria:{},
    // genero:{},
    // subcategoria:{},
    // imagen:[{}],
    // tallas:[{}],
    // colores:[{}],
    // opciones:[{}]

}, {
    timestamps: true
});

module.exports = model('productos', ProductSchema);