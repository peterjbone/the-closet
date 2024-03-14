import axios from "axios";

function PayButton({ cartItems }) {
	async function handleCheckout() {
		console.log("cart items:", cartItems);
		const response = await axios.post(
			`${process.env.BACK_URL}/preference`,
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
