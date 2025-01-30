"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleRequest = void 0;
const AdminController_1 = require("./controllers/AdminController");
const UserController_1 = require("./controllers/UserController");
const handleRequest = (req, res) => {
    const { url } = req;
    if (url === null || url === void 0 ? void 0 : url.startsWith("/admin")) {
        AdminController_1.AdminController.handleRequest(req, res);
    }
    else if (url === null || url === void 0 ? void 0 : url.startsWith("/user")) {
        UserController_1.UserController.handleRequest(req, res);
    }
    else {
        res.writeHead(404);
        res.end("Not Found");
    }
};
exports.handleRequest = handleRequest;
