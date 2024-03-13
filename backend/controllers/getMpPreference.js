const {MercadoPagoConfig, Preference} = require('mercadopago')
const {ACCESS_TOKEN} = process.env;
const client = new MercadoPagoConfig({ accessToken: ACCESS_TOKEN })

    const getMpPreference = async (req, res) => {
        const productos = req.body
        console.log(productos);
        try {
            const preference = await new Preference(client)
            
            const producto =  productos.map(prod => ({
                id: prod._id,
                title: prod.nombre,
                quantity: prod.cartQuantity,
                unit_price: prod.precio,
                
                }))
            const talla = productos.map(prod => prod.talla)
            const color = productos.map(prod => prod.color)
            const payerName = productos.map(prod => prod.userName)
            const email = productos.map(prod => prod.userEmail)
            const payerId = productos.map(prod => prod.userId)
            
            const metadata = {
                tallas: talla,
                colores: color,
                payerId: payerId
            }

            const response = await preference.create({
                body: {
                items: producto,
                metadata: metadata,
                payer: {
                    name: payerName,
                    email: email,
                },
                
                
                back_urls:{
                    success: 'http://localhost:3001/'
                },
                auto_return: "approved",
            },
            })
            console.log('sepa 1')
            console.log('response', response);
            console.log('sepa 2');
            res.status(200).json({ redirectUrl: response.sandbox_init_point });
        } catch (error) {
            console.error('Error al crear la preferencia:', error)
            res.status(500).json({error: 'Error interno'})
        }
    }
    

    module.exports = getMpPreference