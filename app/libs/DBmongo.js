import { MongoClient } from "mongodb";

let client; // Variable para almacenar la instancia del cliente de MongoDB

// Función para conectar a la base de datos
export async function connectToDatabase() {
	// Si ya hay una conexión establecida, devolverla directamente
	if (client && client.isConnected) {
		return { client, db: client.db(process.env.DB_NAME) };
	}

	// De lo contrario, crea una nueva conexión
	client = await MongoClient.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	});

	return { client, db: client.db(process.env.DB_NAME) };
}
