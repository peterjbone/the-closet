const {MercadoPagoConfig, Payment} = require('mercadopago')
const {ACCESS_TOKEN} = process.env;

const client = new MercadoPagoConfig({ accessToken: ACCESS_TOKEN })

const paymentControl = (req, res) => {
    const pay = req.body
    const payment = new Payment(client)

    payment.get({
        id: pay.data.id,
        amount: pay.amount        
    })




}