"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// 03/11/2021 01:42 pm - SSN 
// https://medium.com/@ghoul.ahmed5/pure-vs-impure-pipe-in-angular-2152cf073e4d
var ErrorMessageFilterPipe = /** @class */ (function () {
    function ErrorMessageFilterPipe() {
    }
    ErrorMessageFilterPipe.prototype.transform = function (errorMessages, key) {
        if (!errorMessages || !key) {
            return errorMessages;
        }
        return errorMessages.filter(function (r) { return r.key === key; });
    };
    ErrorMessageFilterPipe = __decorate([
        core_1.Pipe({
            name: 'errorMessageFilter',
            pure: true
        })
    ], ErrorMessageFilterPipe);
    return ErrorMessageFilterPipe;
}());
exports.ErrorMessageFilterPipe = ErrorMessageFilterPipe;
//# sourceMappingURL=errorMessagesFilter.pipe.js.map