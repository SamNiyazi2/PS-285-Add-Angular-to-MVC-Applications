
// 03/11/2021 09:39 pm - SSN - [20210311-2139] - [001] - M08-08 - Create the min validator

import { Directive, forwardRef, OnInit, Input, SimpleChange } from "@angular/core";
import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from "@angular/forms";

export const min = (min: number): ValidatorFn => {

    return (c: AbstractControl): { [key: string]: number } => {

        let result: any = null;

        if (min != undefined && min !== null) {

            let value: number = +c.value;

            if (value < +min) {
                result = { min: min }
            }
        }

        return result;

    }
}


@Directive({
    selector: '[min]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => MinValidatorDirective),
        multi: true
    }]
})
export class MinValidatorDirective implements Validator, OnInit {

    @Input() min: number;

    private validator: ValidatorFn;

    ngOnInit(): void {

        this.validator = min(this.min);
    }

    validate(c: AbstractControl): ValidationErrors {
        return this.validator(c);
    }


    //private onChange: () => void;

    //ngOnChange(changes: SimpleChange) {

    //    for (let key in changes) {

    //        if (key === 'min') {

    //            this.validator = min(changes[key].currentValue);
    //            if (this.onChange) {
    //                this.onChange();
    //            }
    //        }
    //    }
    //}


    //registerOnValidatorChange(fn: () => void): void {
    //    this.onChange = fn;
    //}

}