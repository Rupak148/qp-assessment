import { GroceryItem } from "../models/GroceryItem";

let groceryItems: GroceryItem[] = [];
let idCounter = 1;

export class AdminService {
  static addGroceryItem(name: string, price: number, inventory: number): GroceryItem {
    const newItem: GroceryItem = { id: idCounter++, name, price, inventory };
    groceryItems.push(newItem);
    return newItem;
  }

  static viewGroceryItems(): GroceryItem[] {
    return groceryItems;
  }

  static removeGroceryItem(id: number): boolean {
    const initialLength = groceryItems.length;
    groceryItems = groceryItems.filter(item => item.id !== id);
    return groceryItems.length !== initialLength;
  }

  static updateGroceryItem(id: number, name: string, price: number): boolean {
    const item = groceryItems.find(item => item.id === id);
    if (item) {
      item.name = name;
      item.price = price;
      return true;
    }
    return false;
  }

  static manageInventory(id: number, inventory: number): boolean {
    const item = groceryItems.find(item => item.id === id);
    if (item) {
      item.inventory = inventory;
      return true;
    }
    return false;
  }
}