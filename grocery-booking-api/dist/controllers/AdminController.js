"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const AdminService_1 = require("../services/AdminService");
class AdminController {
    static handleRequest(req, res) {
        const { method, url } = req;
        if (method === "POST" && url === "/admin/add-item") {
            let body = "";
            req.on("data", chunk => body += chunk);
            req.on("end", () => {
                const { name, price, inventory } = JSON.parse(body);
                const newItem = AdminService_1.AdminService.addGroceryItem(name, price, inventory);
                res.writeHead(201, { "Content-Type": "application/json" });
                res.end(JSON.stringify(newItem));
            });
        }
        else if (method === "GET" && url === "/admin/items") {
            const items = AdminService_1.AdminService.viewGroceryItems();
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(items));
        }
        else if (method === "DELETE" && (url === null || url === void 0 ? void 0 : url.startsWith("/admin/remove-item/"))) {
            const id = parseInt(url.split("/").pop() || "0");
            const success = AdminService_1.AdminService.removeGroceryItem(id);
            res.writeHead(success ? 200 : 404);
            res.end();
        }
        else if (method === "PUT" && (url === null || url === void 0 ? void 0 : url.startsWith("/admin/update-item/"))) {
            const id = parseInt(url.split("/").pop() || "0");
            let body = "";
            req.on("data", chunk => body += chunk);
            req.on("end", () => {
                const { name, price } = JSON.parse(body);
                const success = AdminService_1.AdminService.updateGroceryItem(id, name, price);
                res.writeHead(success ? 200 : 404);
                res.end();
            });
        }
        else if (method === "PATCH" && (url === null || url === void 0 ? void 0 : url.startsWith("/admin/manage-inventory/"))) {
            const id = parseInt(url.split("/").pop() || "0");
            let body = "";
            req.on("data", chunk => body += chunk);
            req.on("end", () => {
                const { inventory } = JSON.parse(body);
                const success = AdminService_1.AdminService.manageInventory(id, inventory);
                res.writeHead(success ? 200 : 404);
                res.end();
            });
        }
        else {
            res.writeHead(404);
            res.end("Not Found");
        }
    }
}
exports.AdminController = AdminController;
