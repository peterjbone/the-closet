const express = require("express");
const server = express();
const morgan = require("morgan");
//? Importando routers
const indexRouter = require("./routes/routesIndex.js");

//* MIDDLEWARES
server.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
	next();
});
server.use(morgan("dev"));
server.use(express.json());

//* ROUTES AND ROUTERS
server.use("/", indexRouter);

module.exports = server;
