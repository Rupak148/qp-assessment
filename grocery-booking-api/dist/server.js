"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const routes_1 = require("./routes");
const server = (0, http_1.createServer)(routes_1.handleRequest);
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
