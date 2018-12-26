import { EventEmitter } from "@angular/core";

export class NotificationService {
    myNotifier = new EventEmitter<string>();

    notify(message: string) {
        this.myNotifier.emit(message);
    }
}
