"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
// 03/11/2021 08:42 pm - SSN - [20210311-2041] - [001] - M08-05 - Create the NotLowerCase validator
function notLowerCaseValidate(c) {
    var result = null;
    var value = c.value;
    if (value) {
        if (value.toString().trim() === value.toString().toLowerCase().trim()) {
            result = { validateNotLowercase: { value: value } };
        }
    }
    return result;
}
var NotLowerCaseValidatorDirective = /** @class */ (function () {
    function NotLowerCaseValidatorDirective() {
        this.validator = notLowerCaseValidate;
    }
    NotLowerCaseValidatorDirective_1 = NotLowerCaseValidatorDirective;
    // ValidationErrors  =??? { [key:string]: any }
    NotLowerCaseValidatorDirective.prototype.validate = function (c) {
        return this.validator(c);
    };
    var NotLowerCaseValidatorDirective_1;
    NotLowerCaseValidatorDirective = NotLowerCaseValidatorDirective_1 = __decorate([
        core_1.Directive({
            selector: '[validateNoLowercase]',
            providers: [{
                    provide: forms_1.NG_VALIDATORS,
                    useExisting: core_1.forwardRef(function () { return NotLowerCaseValidatorDirective_1; }),
                    multi: true
                }]
        }),
        __metadata("design:paramtypes", [])
    ], NotLowerCaseValidatorDirective);
    return NotLowerCaseValidatorDirective;
}());
exports.NotLowerCaseValidatorDirective = NotLowerCaseValidatorDirective;
//# sourceMappingURL=validator-notlowercase.js.map