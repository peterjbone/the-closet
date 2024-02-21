const server = require("./server.js");
const PORT = 3001;
require("./db");

server.listen(PORT, () => console.log(`Server raised on port: ${PORT}`));
