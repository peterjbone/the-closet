const {MercadoPagoConfig, Preference} = require('mercadopago')
const {ACCESS_TOKEN, PUBLIC_KEY} = process.env;
console.log(PUBLIC_KEY);
const client = new MercadoPagoConfig({ accessToken: ACCESS_TOKEN })

    const compra = async (req, res) => {
        const {productos} = req.body
      
        try {
            const preference = await new Preference(client)
            
            const producto =  productos.map(prod => ({
                title: prod.nombre,
                quantity: prod.cantidad,
                unit_price: prod.precio
                }))

            const response = await preference.create({
                body: {
                items: producto
                }
    
            })

    
            console.log(preference, response);
            res.status(200).json({preferenceId: response.id})
        } catch (error) {
            console.error('Error al crear la preferencia:', error)
            res.status(500).json({error: 'Error interno'})
        }
    }
    

    module.exports = {compra}