import { Pipe, PipeTransform } from "@angular/core";
import { IErrorMessage } from "./errorMessage.model";

// 03/11/2021 01:42 pm - SSN 

// https://medium.com/@ghoul.ahmed5/pure-vs-impure-pipe-in-angular-2152cf073e4d

@Pipe({
    name: 'errorMessageFilter',
    pure: true
})
export class ErrorMessageFilterPipe implements PipeTransform {

    transform(errorMessages: IErrorMessage[], key: string) {

        if (!errorMessages || !key) {
            return errorMessages;
        }

        return errorMessages.filter(r => r.key === key);

    }

}