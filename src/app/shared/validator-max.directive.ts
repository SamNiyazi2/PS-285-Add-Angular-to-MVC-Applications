import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from "@angular/forms";
import { Directive, forwardRef, OnInit, Input } from "@angular/core";

// 03/11/2021 10:30 pm - SSN - [20210311-2229] - [001] - M08-10 - Create the use max validator directive

export const max = (max: number): ValidatorFn => {

    return (c: AbstractControl): { [key: string]: any } => {

        let result = null;

        if (max != undefined && max != null) {

            if (+c.value > +max) {
                result = { max: max };
            }
        }


        return result;

    }
}


@Directive({
    selector: '[max]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => MaxValidatorDirective),
        multi: true
    }]
})
export class MaxValidatorDirective implements Validator, OnInit {

    @Input() max: number;

    private validator: ValidatorFn;


    ngOnInit(): void {
        this.validator = max(this.max);
    }


    validate(c: AbstractControl): ValidationErrors {
        return this.validator(c);
    }


}