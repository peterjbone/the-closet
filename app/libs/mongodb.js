import mongoose from "mongoose";

if (!process.env.MONGODB_URL) {
	throw new Error("MONGODB_URL debe estar definido (frontend)");
}

//? Conección con la base de datos "thecloset"
export async function connectDB() {
	try {
		const { connection } = await mongoose.connect(`${process.env.MONGODB_URL}`);
		if (connection.readyState === 1) {
			console.log(
				"Conexión establecida con la base de datos 'thecloset' (frontend)"
			);
			return Promise.resolve(true);
		}
	} catch (error) {
		console.log(
			"Error al conectarse a la base de datos 'thecloset' (frontend):",
			error.message
		);
		return Promise.reject(false);
	}
}
