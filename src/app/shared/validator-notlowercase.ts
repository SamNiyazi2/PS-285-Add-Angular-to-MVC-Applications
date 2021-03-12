import { AbstractControl, ValidatorFn, NG_VALIDATORS, Validator, ValidationErrors } from "@angular/forms";
import { Directive, forwardRef } from "@angular/core";

// 03/11/2021 08:42 pm - SSN - [20210311-2041] - [001] - M08-05 - Create the NotLowerCase validator


function notLowerCaseValidate(c: AbstractControl): ValidatorFn {

    let result: any = null;

    const value = c.value;

    if (value) {

        if (value.toString().trim() === value.toString().toLowerCase().trim()) {
            result = { validateNotLowercase: { value } };
        }
    }

    return result;
}

@Directive({

    selector: '[validateNoLowercase]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => NotLowerCaseValidatorDirective),
        multi: true
    }]
})
export class NotLowerCaseValidatorDirective implements Validator {
    private validator: ValidatorFn;

    constructor() {
        this.validator = notLowerCaseValidate;
    }

    // ValidationErrors  =??? { [key:string]: any }
    validate(c: AbstractControl): ValidationErrors {
        return this.validator(c);
    }


}