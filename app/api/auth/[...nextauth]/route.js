import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "../../../libs/mongodb.js";
import Usuario from "../../../models/Usuarios.js";
import bcrypt from "bcrypt";

export const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: "credentials",
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" }
			},
			async authorize(credentials, req) {
				await connectDB();

				const userFound = await Usuario.findOne({
					email: credentials.email
				}).select("+password");

				if (!userFound) throw new Error("Email no encontrado.");

				const passwordMatch = await bcrypt.compare(
					credentials.password,
					userFound.password
				);
				if (!passwordMatch) throw new Error("Contraseña incorrecta.");

				return userFound;
			}
		})
	],
	callbacks: {
		jwt({ account, token, user, profile, session }) {
			if (user) token.user = user;
			return token;
		},
		session({ session, token }) {
			session.user = token.user;
			return token;
		}
	},
	pages: {
		signIn: "/login"
	}
});

export { handler as GET, handler as POST };
