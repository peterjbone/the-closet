import axios from "axios";
import { useCartStore } from "../hooks/cartStore";
const URL_API = "http://localhost:3000/api";

function PayButton({ cartItems }) {
	function handleCheckout() {
		console.log(cartItems);
	}

	/* prettier-ignore */
	return (  
    <>
      <button onClick={()=> handleCheckout()}>Checkout Out</button>
    </>
  );
}

export default PayButton;
