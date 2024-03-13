import axios from "axios";
import { useSession } from "next-auth/react";
const URL = "http://localhost:3001/api";

function PayButton({ cartItems }) {
	const { data: session } = useSession();
	// console.log("FROM PAYBUTTON");
	// console.log(session);

	function handleCheckout() {
		//console.log(cartItems);
		axios
			.post(`${URL}/stripe/create-checkout-session`, {
				cartItems,
				userId: session?.user._id
			})
			.then((res) => {
				if (res.data.url) {
					window.location.href = res.data.url;
				}
			})
			.catch((error) => console.log(error));
	}

	/* prettier-ignore */
	return (  
    <>
      <button onClick={()=> handleCheckout()}>Checkout Out</button>
    </>
  );
}

export default PayButton;
