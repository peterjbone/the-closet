//! Esto es para:
//! LOGIN CON CREDENCIALES
//! LOGIN CON GOOGLE
//! SIGNUP CON GOOGLE

import NextAuth from "next-auth";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import { connectDB } from "../../../app/libs/mongodb.js";
import Usuario from "../../../app/models/Usuarios.js";
import Cuenta from "../../../app/models/Cuentas.js";

//import { connectToDatabase } from "../../../app/libs/DBmongo.js";
import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;

export const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET
		}),
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
	database: process.env.MONGODB_URI,
	callbacks: {
		jwt({ token, user }) {
			if (user) token.user = user;
			return token;
		},
		session({ session, token, user, account, profile }) {
			session.user = token.user;
			return token;
		},
		async signIn({ user, account, profile }) {
			try {
				// console.log("USER");
				// console.log(user);
				// console.log("ACCOUNT");
				// console.log(account);
				// console.log("PROFILE");
				// console.log(profile);

				await connectDB(); // Conecta a la base de datos

				// Verifica si el usuario ya existe en la base de datos
				const existingUser = await Usuario.findOne({
					email: user.email
				});

				const USER_ID = new ObjectId();
				const ACCOUNT_ID = new ObjectId();

				if (!existingUser) {
					// Si el usuario no existe, guárdalo en la base de datos
					const newUser = new Usuario({
						_id: USER_ID,
						name: user.name,
						email: user.email,
						emailVerified: profile.email_verified,
						image: user.image
						//? password: no aplica en este caso
						//? createdAt: se crea solo
						//? updatedAt: se crea solo
					});
					await newUser.save();
					console.log(newUser);
					const newAccount = new Cuenta({
						_id: ACCOUNT_ID,
						userId: USER_ID,
						type: account.type,
						provider: account.provider,
						providerAccountId: account.providerAccountId,
						access_token: account.access_token,
						expires_at: account.expires_at,
						token_type: account.token_type,
						scope: account.scope,
						id_token: account.id_token
						//? refresh_token: no se usa
						//? session_state: no se usa
					});
					await newAccount.save();
					console.log(newAccount);
				}
			} catch (error) {
				console.log(error);
			}
			return true; // Devuelve true para permitir el inicio de sesión
		}
	},
	pages: {
		signIn: "/login"
	},
	debug: process.env.NODE_ENV === "development",
	session: {
		strategy: "jwt"
	},
	secret: process.env.NEXTAUTH_SECRET
};

export { authOptions as GET, authOptions as POST };

export default NextAuth(authOptions);
