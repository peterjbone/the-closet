const {MercadoPagoConfig, Payment} = require('mercadopago')
const {ACCESS_TOKEN} = process.env;
const { v4: uuidv4 } = require('uuid')
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
        console.log('metadata', payment.metadata,'info', payment.additional_info.items );
        const talle = payment.metadata.tallas.map(talla => talla)
        const color = payment.metadata.colores.map(color => color)
        console.log(talle, color)

        const nuevaCompra = await new Compras({
        
            usuario: payment.metadata.payer_id[0], 
            productos: payment.additional_info.items.map((item, index) => ({
                producto: item.id, 
                precio_unitario: item.unit_price,
                cantidad: item.quantity,
                talle: talle[index],
                color: color[index]
            }))
        });
        console.log('Compra creada', nuevaCompra);

        await nuevaCompra.save();
        
        res.status(200).send('Compra realizada con exito!')
    } catch (error) {
        console.log('error', error)
    }





}

module.exports = paymentControl