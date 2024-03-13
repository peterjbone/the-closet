// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
require("dotenv").config();

const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_KEY);

//* STRIPE ROUTER
const { Router } = require("express");
const stripeRouter = Router();

stripeRouter.post("/create-checkout-session", async (req, res) => {
	const session = await stripe.checkout.sessions.create({
		line_items: [
			{
				price_data: {
					currency: "usd",
					product_data: {
						name: "T-shirt"
					},
					unit_amount: 4000
				},
				quantity: 2
			},
			{
				price_data: {
					currency: "usd",
					product_data: {
						name: "Phone"
					},
					unit_amount: 2000
				},
				quantity: 2
			}
		],
		mode: "payment",
		success_url: `${process.env.CLIENT_URL}/checkout-success`,
		cancel_url: `${process.env.CLIENT_URL}/cart`
	});

	res.send({ url: session.url });
});

module.exports = stripeRouter;
