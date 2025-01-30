"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserService_1 = require("../services/UserService");
class UserController {
    static handleRequest(req, res) {
        const { method, url } = req;
        if (method === "GET" && url === "/user/items") {
            const items = UserService_1.UserService.viewAvailableGroceryItems();
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(items));
        }
        else if (method === "POST" && url === "/user/book-items") {
            let body = "";
            req.on("data", chunk => body += chunk);
            req.on("end", () => {
                const { itemIds } = JSON.parse(body);
                const success = UserService_1.UserService.bookGroceryItems(itemIds);
                res.writeHead(success ? 200 : 400);
                res.end();
            });
        }
        else {
            res.writeHead(404);
            res.end("Not Found");
        }
    }
}
exports.UserController = UserController;
