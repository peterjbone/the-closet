import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import Usuario from "../../../models/Usuarios.js";
import { connectDB } from "../../../libs/mongodb.js";

export async function POST(request) {
	const { fullname, email, password } = await request.json();

	// Validando password
	if (!password || password.length < 6) {
		return NextResponse.json(
			{
				message: "The password must be at least 6 characters long."
			},
			{ status: 400 }
		);
	}

	// Inicio de los procesos asíncronos en MongoDB
	try {
		//Conectado a la BD
		await connectDB();

		// Buscando si el email ya existe
		const userFound = await Usuario.findOne({ email });
		if (userFound) {
			return NextResponse.json(
				{
					message: "El email ya existe."
				},
				{ status: 409 }
			);
		}

		// Encriptando contraseña
		const hashedPassword = await bcrypt.hash(password, 12);

		// Se inserta el usuario en la BD
		const user = new Usuario({
			fullname,
			email,
			password: hashedPassword
		});
		const savedUser = await user.save();

		return NextResponse.json({
			id: savedUser._id,
			fullname: savedUser.fullname,
			email: savedUser.email
		});
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{
				message: error.message
			},
			{ status: 400 }
		);
	}
}
