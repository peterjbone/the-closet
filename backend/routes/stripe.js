// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
require("dotenv").config();

const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_KEY);

const { Router } = require("express");
const stripeRouter = Router();

//const app = express();
//app.use(express.static("public"));
//const YOUR_DOMAIN = "http://localhost:4242";

stripeRouter.post("/create-checkout-session", async (req, res) => {
	const session = await stripe.checkout.sessions.create({
		line_items: [
			{
				// Provide the exact Price ID (for example, pr_1234) of the product you want to sell
				price: "{{PRICE_ID}}",
				quantity: 1
			}
		],
		mode: "payment",
		success_url: `${process.env.CLIENT_URL}/checkout-success`,
		cancel_url: `${process.env.CLIENT_URL}/cart`
	});

	res.send({ url: session.url });
});

//app.listen(4242, () => console.log("Running on port 4242"));

function handler() {}
stripeRouter.get("/", handler);

module.exports = stripeRouter;
