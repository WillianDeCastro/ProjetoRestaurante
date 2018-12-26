import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";
import { Injectable } from "@angular/core";
import { NotificationService } from "app/shared/messages/notification.service";


@Injectable()
export class ShoppingCartService {

    constructor(private notficationService: NotificationService) {
    }

    items: CartItem[] = [];

    clear() {
        this.items = [];
    }

    addItem(item: MenuItem) {
        let foundItem = this.items.find((mItm) => mItm.menuItem.id === item.id);

        if (foundItem) {
            this.increaseQty(foundItem);
        }
        else {
            this.items.push(new CartItem(item));
        }

        this.notficationService.notify(`Você adicionou o item ${item.name}`);
    }

    increaseQty(item: CartItem) {
        item.quantity++;
    }

    decreaseQty(item: CartItem) {
        item.quantity--;

        if (item.quantity === 0) {
            this.removeItem(item);
        }
    }

    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1);
        this.notficationService.notify(`Você removeu o item ${item.menuItem.name}`);
    }

    total(): number {
        return this.items.map(item => item.value()).reduce((prev, value) => prev + value, 0);
    }


}