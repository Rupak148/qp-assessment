"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const AdminService_1 = require("./AdminService");
class UserService {
    static viewAvailableGroceryItems() {
        return AdminService_1.AdminService.viewGroceryItems().filter(item => item.inventory > 0);
    }
    static bookGroceryItems(itemIds) {
        const items = AdminService_1.AdminService.viewGroceryItems();
        for (const id of itemIds) {
            const item = items.find(item => item.id === id);
            if (!item || item.inventory === 0) {
                return false;
            }
            item.inventory -= 1;
        }
        return true;
    }
}
exports.UserService = UserService;
