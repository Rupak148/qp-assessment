import { createServer } from "http";
import { handleRequest } from "./routes";

const server = createServer(handleRequest);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});