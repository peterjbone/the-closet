const Producto = require('../models/Productos');

const updateStock = async (req, res) => {
    try {
        const { productos } = req.body;

        for (const productoInfo of productos) {
            const { producto: productoId, cantidad, color, talle } = productoInfo;
            if (!productoId) {
                throw new Error(`ID de producto no definido: ${productoId}`);
            }

            const producto = await Producto.findById(productoId);
            if (!producto) {
                throw new Error(`Producto con ID ${productoId} no encontrado`);
            }

            // Buscar la opción correspondiente en el producto
            const opcionIndex = producto.opcion.findIndex(opcion => opcion.color.nombreColor === color && opcion.talles.find(t => t.talla === talle));
            if (opcionIndex === -1) {
                throw new Error(`Opción para el producto con ID ${productoId}, color ${color} y talle ${talle} no encontrada`);
            }

            // Encontrar el talle específico en la opción y restar la cantidad comprada
            const opcion = producto.opcion[opcionIndex];
            const talleIndex = opcion.talles.findIndex(t => t.talla === talle);
            if (talleIndex === -1) {
                throw new Error(`Talle ${talle} no encontrado en la opción del producto con ID ${productoId} y color ${color}`);
            }

            // Restar la cantidad comprada del stock
            producto.opcion[opcionIndex].talles[talleIndex].stock -= cantidad;

            // Guardar el documento actualizado utilizando findByIdAndUpdate
            await Producto.findByIdAndUpdate(productoId, producto, { new: true });
        }

        res.status(200).json({ message: 'Stock actualizado correctamente' });
    } catch (error) {
        console.error('Error al actualizar el stock:', error);
        res.status(500).json({ error: 'Ocurrió un error al actualizar el stock', error });
    }
}

module.exports = updateStock;