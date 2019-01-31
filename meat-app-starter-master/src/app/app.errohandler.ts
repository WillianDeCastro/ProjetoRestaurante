import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs/Observable';
import { ErrorHandler } from '../../node_modules/@angular/core';

export class ErrorHandlers {

    static handleError(error: HttpErrorResponse | any) {
        let messageError: string

        if (error instanceof HttpErrorResponse) {
            messageError = `Erro ${error.status} ao acessar a url ${error.url} - ${error.statusText}`
        } else {
            messageError = error.toString();
        }

        console.log(messageError)
        return Observable.throw(messageError);
    }
}

