const {MercadoPagoConfig, Payment} = require('mercadopago')
const {ACCESS_TOKEN} = process.env;
const Compras =  require('../models/Compras')

const client = new MercadoPagoConfig({ accessToken: ACCESS_TOKEN })

const paymentControl = async (req, res) => {
    try {
        const pay = req.body
        console.log('pay 1');
        console.log(pay);
        console.log('pay2');
        
        const payment = await new Payment(client).get({
            
            id: pay.data.id,
        })
                const talle = payment.metadata.tallas[0]; 
        const color = payment.metadata.colores[0]; 

        
        const nuevaCompra = await new Compras({
            usuario: payment.metadata.payer_id[0], 
            productos: payment.additional_info.items.map(item => ({
                producto: parseInt(item.id), 
                precio: item.unit_price,
                cantidad: item.quantity,
                talle: talle,
                color: color 
            }))
        });
        console.log('separador 1')
        console.log('Compra creada', nuevaCompra);
        console.log('separador 2')

        await nuevaCompra.save();
        
        res.status(200).send('llego bien')
    } catch (error) {
        console.log('error', error)
    }





}

module.exports = paymentControl