const {MercadoPagoConfig, Preference} = require('mercadopago')
const {ACCESS_TOKEN} = process.env;
const client = new MercadoPagoConfig({ accessToken: ACCESS_TOKEN })

    const getMpPreference = async (req, res) => {
        const productos = req.body
        console.log(productos);
        try {
            const preference = await new Preference(client)
            
            const producto =  productos.map(prod => ({
                id: prod.id,
                title: prod.nombre,
                quantity: prod.cantidad,
                unit_price: prod.precio,
                currency_id: "USD"
                }))
            const talla = productos.map(prod => prod.talla)
            const color = productos.map(prod => prod.color)
            
            const metadata = {
                tallas: talla,
                colores: color
            }

            const response = await preference.create({
                body: {
                items: producto,
                metadata: metadata,
            //     payer: {
            //         name: "Juan",
            //         surname: "Lopez",
            //         email: "user@email.com",
    
            //     },
            //     address: {
            //         street_name: "Street",
            //         street_number: 123,
            // }
        }})

    
            console.log('respuesta', response);
            res.status(200).json({preferenceId: response.id})
        } catch (error) {
            console.error('Error al crear la preferencia:', error)
            res.status(500).json({error: 'Error interno'})
        }
    }
    

    module.exports = getMpPreference