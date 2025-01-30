import { IncomingMessage, ServerResponse } from "http";
import { UserService } from "../services/UserService";

export class UserController {
  static handleRequest(req: IncomingMessage, res: ServerResponse) {
    const { method, url } = req;

    if (method === "GET" && url === "/user/items") {
      const items = UserService.viewAvailableGroceryItems();
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(items));
    } else if (method === "POST" && url === "/user/book-items") {
      let body = "";
      req.on("data", chunk => body += chunk);
      req.on("end", () => {
        const { itemIds } = JSON.parse(body);
        const success = UserService.bookGroceryItems(itemIds);
        res.writeHead(success ? 200 : 400);
        res.end();
      });
    } else {
      res.writeHead(404);
      res.end("Not Found");
    }
  }
}