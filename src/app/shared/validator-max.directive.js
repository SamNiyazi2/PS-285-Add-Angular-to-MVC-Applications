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
// 03/11/2021 10:30 pm - SSN - [20210311-2229] - [001] - M08-10 - Create the use max validator directive
exports.max = function (max) {
    return function (c) {
        var result = null;
        if (max != undefined && max != null) {
            if (+c.value > +max) {
                result = { max: max };
            }
        }
        return result;
    };
};
var MaxValidatorDirective = /** @class */ (function () {
    function MaxValidatorDirective() {
    }
    MaxValidatorDirective_1 = MaxValidatorDirective;
    MaxValidatorDirective.prototype.ngOnInit = function () {
        this.validator = exports.max(this.max);
    };
    MaxValidatorDirective.prototype.validate = function (c) {
        return this.validator(c);
    };
    var MaxValidatorDirective_1;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], MaxValidatorDirective.prototype, "max", void 0);
    MaxValidatorDirective = MaxValidatorDirective_1 = __decorate([
        core_1.Directive({
            selector: '[max]',
            providers: [{
                    provide: forms_1.NG_VALIDATORS,
                    useExisting: core_1.forwardRef(function () { return MaxValidatorDirective_1; }),
                    multi: true
                }]
        })
    ], MaxValidatorDirective);
    return MaxValidatorDirective;
}());
exports.MaxValidatorDirective = MaxValidatorDirective;
//# sourceMappingURL=validator-max.directive.js.map