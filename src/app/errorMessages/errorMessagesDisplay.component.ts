import { Component, Input, OnInit, OnChanges } from "@angular/core";
import { IErrorMessage } from "./errorMessage.model";


// 03/11/2021 02:12 pm - SSN 

@Component({
    selector: 'error-messages-display',
    templateUrl: './errorMessagesDisplay.component.html',

})
export class ErrorMessagesDisplayComponent implements OnChanges {

    @Input() errorMessages: IErrorMessage[];
    @Input() keyname: string;

    applicableErrorMessage: IErrorMessage[] = [];


    ngOnChanges(): void {

        this.applicableErrorMessage = this.errorMessages.filter(r => r.key === ((this.keyname === "-") ? '' : this.keyname) || (r.key && (r.key + "--").startsWith(this.keyname)));
    }

}