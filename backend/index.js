require('dotenv').config()
const server = require("./server.js");
const PORT = 3001;
const { connectDB } = require("./db.js");

server.listen(PORT, () => {
	console.log(`Servidor levantado en el puerto: ${PORT}`);
	connectDB();
});
