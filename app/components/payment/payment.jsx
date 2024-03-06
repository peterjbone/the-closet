"use client"

import { initMercadoPago, Wallet } from "@mercadopago/sdk-react"


initMercadoPago('TEST-aaf6addf-8825-47b9-b75c-547fe0bf6533')

export default  Payment = () => {
    <div id ='wallet_container'>
        <Wallet initialization={{ preferenceId: '<PREFERENCE_ID>' }} customization={{ texts:{ valueProp: 'smart_option'}}} />



    </div>
}

