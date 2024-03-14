/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		domains: [
			"avatars.githubusercontent.com",
			"lh3.googleusercontent.com",
			"res.cloudinary.com"
		]
	},
	env: {
		FRONT_URL: process.env.FRONT_URL,
		BACK_URL: process.env.BACK_URL,
		MONGODB_URL: process.env.MONGODB_URL,
		NEXTAUTH_URL: process.env.NEXTAUTH_URL,
		NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
		GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
		GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
		SMTP_PASSWORD: process.env.SMTP_PASSWORD,
		SMTP_EMAIL: process.env.SMTP_EMAIL
	},
	output: "standalone"
};

export default nextConfig;
