const express = require('express');
const router = express.Router();
const Compra = require('../models/Compras');

// Ruta para crear una nueva compra
const postCompra = async (req, res) => {

    try {
      
        const nuevaCompra = new Compra(req.body);
        
        
        const compraGuardada = await nuevaCompra.save();
        
       
        res.status(201).json(compraGuardada);
    } catch (error) {
        
        console.error('Error al crear la compra:', error);
        res.status(500).json({ error: 'Error al crear la compra' });
    }
}


module.exports = postCompra;