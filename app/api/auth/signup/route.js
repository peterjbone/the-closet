import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import Usuario from "@/app/models/Usuarios.js";
import { connectDB } from "@/app/libs/mongodb.js";

export async function POST(request) {
	const { fullname, email, password } = await request.json();
	//console.log(fullname, email, password);

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
					message: "Email already exists"
				},
				{ status: 409 }
			);
		}

		// Encriptando contraseña
		const hashedPassword = await bcrypt.hash(password, 12);

		// Sino existe lo creamos / insertamos en la BD
		const user = new Usuario({
			fullname,
			email,
			password: hashedPassword
		});
		const savedUser = await user.save();
		console.log(savedUser);

		return NextResponse.json(savedUser);
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
