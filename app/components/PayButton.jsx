import axios from "axios";

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
