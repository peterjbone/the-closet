const {MercadoPagoConfig, Payment} = require('mercadopago')
const {ACCESS_TOKEN} = process.env;

const client = new MercadoPagoConfig({ accessToken: ACCESS_TOKEN })

const paymentControl = async (req, res) => {
    const pay = req.body
    
    const payment = await new Payment(client).get({
        id: pay.data.id,
    })
    console.log(payment);
    const receipt = {
        id: payment.id,
        precio: payment.transaction_amount,
        
    }

    res.status(200).send('llego bien')


}

module.exports = paymentControl