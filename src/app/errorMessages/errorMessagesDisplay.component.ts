import { Component, Input, OnInit, OnChanges } from "@angular/core";
import { IErrorMessage, createErrorMessage, ccl } from "./errorMessage.model";
import { FormControl } from "@angular/forms";



// 03/11/2021 02:12 pm - SSN 
// 05/29/2021 12:16 am - SSN - [20210528-1458] - [004] - Angular validations - New product

@Component({
    selector: 'error-messages-display',
    templateUrl: './errorMessagesDisplay.component.html?v=7'
})
export class ErrorMessagesDisplayComponent implements OnChanges {

    @Input() errorMessages: IErrorMessage[];
    @Input() keyvalue: any;
    @Input() keyname: string;
    @Input() control: FormControl;
    @Input() mouseOverSave: boolean;

    applicableErrorMessage: IErrorMessage[] = [];


    ngOnChanges(): void {


        this.applicableErrorMessage.splice(0, this.applicableErrorMessage.length);


        if (this.control && this.control.errors) {

            let dbErrorNo = 0;

            for (let error2 of this.errorMessages.filter(r => r.key.toLocaleLowerCase() == this.keyname.toLocaleLowerCase())) {

                if (this.control.errors) {
                    this.control.errors[`dbError${dbErrorNo++}`] = error2.msg;
                }
            };

            if (!this.control.pristine || this.mouseOverSave) {

                for (let error1 in this.control.errors) {
                    this.applicableErrorMessage.push(createErrorMessage(this.keyname, error1 + ": " + JSON.stringify(this.control.errors[error1])));
                };

            }

        }

        let dbErrorNo = 0;

        for (let error3 of this.errorMessages.filter(r => r.key.toLocaleLowerCase() == this.keyname.toLocaleLowerCase() || (r.key.toLocaleLowerCase() + '--').startsWith(this.keyname.toLocaleLowerCase()))) {
            ccl('dberror');
            ccl(error3);
            this.applicableErrorMessage.push(createErrorMessage(this.keyname, error3.msg));

        };


    }

}