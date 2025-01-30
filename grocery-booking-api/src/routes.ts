import { IncomingMessage, ServerResponse } from "http";
import { AdminController } from "./controllers/AdminController";
import { UserController } from "./controllers/UserController";

export const handleRequest = (req: IncomingMessage, res: ServerResponse) => {
  const { url } = req;

  if (url?.startsWith("/admin")) {
    AdminController.handleRequest(req, res);
  } else if (url?.startsWith("/user")) {
    UserController.handleRequest(req, res);
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
};