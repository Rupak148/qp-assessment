"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
let groceryItems = [];
let idCounter = 1;
class AdminService {
    static addGroceryItem(name, price, inventory) {
        const newItem = { id: idCounter++, name, price, inventory };
        groceryItems.push(newItem);
        return newItem;
    }
    static viewGroceryItems() {
        return groceryItems;
    }
    static removeGroceryItem(id) {
        const initialLength = groceryItems.length;
        groceryItems = groceryItems.filter(item => item.id !== id);
        return groceryItems.length !== initialLength;
    }
    static updateGroceryItem(id, name, price) {
        const item = groceryItems.find(item => item.id === id);
        if (item) {
            item.name = name;
            item.price = price;
            return true;
        }
        return false;
    }
    static manageInventory(id, inventory) {
        const item = groceryItems.find(item => item.id === id);
        if (item) {
            item.inventory = inventory;
            return true;
        }
        return false;
    }
}
exports.AdminService = AdminService;
