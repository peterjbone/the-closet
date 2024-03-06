//! Esto es solo para el SIGNUP CON CREDENCIALES

import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import { connectDB } from "../../../libs/mongodb.js";
import Usuario from "../../../models/Usuarios.js";

export async function POST(request) {
	const { name, email, password } = await request.json();

	//? Inicio de los procesos asíncronos en MongoDB
	try {
		//? Conectado a la BD
		await connectDB();

		//? Buscando si el email ya existe
		const userFound = await Usuario.findOne({ email });
		if (userFound) {
			return NextResponse.json(
				{
					message: "El email ya existe."
				},
				{ status: 409 }
			);
		}

		//? Encriptando contraseña
		const hashedPassword = await bcrypt.hash(password, 12);

		//? Se inserta el usuario en la BD
		const user = new Usuario({
			name,
			email,
			password: hashedPassword
		});
		const savedUser = await user.save();

		//? Devolviendo al Usuario si se creo en la base de datos
		return NextResponse.json({
			id: savedUser._id,
			name: savedUser.name,
			email: savedUser.email
		});
	} catch (error) {
		return NextResponse.json(
			{
				message: error.message
			},
			{ status: 400 }
		);
	}
}
