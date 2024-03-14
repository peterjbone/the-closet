"use client";

import styled from "styled-components";
import { useEffect } from "react";
import { useCartStore } from "../hooks/cartStore.js";

const CheckoutSuccess = () => {
	//? Obteniendo las "actions"
	const clearCart = useCartStore((state) => state.clearCart);
	const getTotals = useCartStore((state) => state.getTotals);

	useEffect(() => {
		clearCart();
	}, []);

	useEffect(() => {
		getTotals();
	}, []);

	return (
		<div
			className="
      min-h-[80vh]
      w-full
      max-w-[800px]
      mx-auto
      flex
      flex-col
      items-center
      justify-center
      text-2xl
    ">
			<h2 className="text-green-500 mb-2 font-bold text-3xl">
				Checkout Successful
			</h2>
			<p>Your order might take some time to process. ⌛</p>
			<p>Check your order status at your profile after about 10mins. 👀</p>
			<p>
				Incase of any inqueries contact the support at{" "}
				<strong>thecloset@shop.com</strong>
			</p>
		</div>
	);
};

export default CheckoutSuccess;
