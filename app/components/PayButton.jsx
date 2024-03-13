import axios from "axios";
import { useSession } from "next-auth/react";
import { useCartStore } from "../hooks/cartStore";
const URL_API = "http://localhost:3000/api";

function PayButton({ cartItems }) {
	async function handleCheckout() {
		console.log(cartItems);
		const response = await axios.post(
			"http://localhost:3001/preference",
			cartItems
		);
		console.log(response);
		window.location.href = response.data.redirectUrl;
	}

	/* prettier-ignore */
	return (  
    <>
      <button onClick={()=> handleCheckout()}>Comprar</button>
    </>
  );
}

export default PayButton;
