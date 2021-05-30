
// 05/30/2021 12:21 pm - SSN - [20210530-1151] - [002] - MVC concurrency

import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from "@angular/forms";
import { Directive, forwardRef, OnInit, Input } from "@angular/core";
   

import { IErrorMessage } from "../errorMessages";
import { ccl } from "../errorMessages/errorMessage.model";

 
export const errorchecker = (fieldname: string, errormessages: IErrorMessage[]): ValidatorFn => {



    ccl('errorchecker ')


        return (c: AbstractControl): { [key: string]: string } => {


            ccl('errorchecker -validate 1 ')
             
            ccl(c.value)

            ccl('errormessages:');
            ccl(errormessages);
            ccl('fieldname:');
            ccl(fieldname);



            if (!errormessages) return null;


            ccl('errorchecker -validate 2 ')

            let counter = 0;
//            for (let msg of errormessages.filter(r => r.key == fieldname)) {
            for (let msg of errormessages){
                counter++;
            }


            ccl(`errorchecker -validate 3 [{${counter}]`)

            if (counter == 0) return null;



            ccl(`errorchecker -validate 4 [{${counter}]`)

            let result = null;



            result = {
                checkerrors:   'customerror-20210530-1228'  
            };


            return result;
        }
   
}


@Directive({
    selector: '[errorchecker]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => ErrorcheckerValidatorDirective),
        multi: true
    }]
})
export class ErrorcheckerValidatorDirective implements Validator, OnInit {

    @Input() fieldname: string;
    @Input() errormessages: IErrorMessage[];

    private validator: ValidatorFn;
 

    ngOnInit(): void {
        this.validator = errorchecker(this.fieldname, this.errormessages);

        ccl('validator-custom - ngOnInit:', 'red');
        ccl('fieldname:');
        ccl(this.fieldname);
        ccl('errormessages:');
        ccl(this.errormessages);
    }


    validate(c: AbstractControl ): ValidationErrors {
        return this.validator(c);
    }


}