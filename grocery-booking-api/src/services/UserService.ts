import { GroceryItem } from "../models/GroceryItem";
import { AdminService } from "./AdminService";

export class UserService {
  static viewAvailableGroceryItems(): GroceryItem[] {
    return AdminService.viewGroceryItems().filter(item => item.inventory > 0);
  }

  static bookGroceryItems(itemIds: number[]): boolean {
    const items = AdminService.viewGroceryItems();
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