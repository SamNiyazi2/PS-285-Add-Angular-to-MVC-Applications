"use strict";
// 03/11/2021 09:45 am - SSN 
// https://netbasal.com/autofocus-that-works-anytime-in-angular-apps-68cb89a3f057
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
exports.AutoFocusDirective = void 0;
var core_1 = require("@angular/core");
var AutoFocusDirective = /** @class */ (function () {
    function AutoFocusDirective(host) {
        this.host = host;
    }
    AutoFocusDirective.prototype.ngAfterViewInit = function () {
        if (this.host.nativeElement) {
            this.host.nativeElement.focus();
            this.host.nativeElement.classList.add('testClass');
        }
    };
    AutoFocusDirective = __decorate([
        core_1.Directive({
            selector: '[autofocus-v2]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], AutoFocusDirective);
    return AutoFocusDirective;
}());
exports.AutoFocusDirective = AutoFocusDirective;
//# sourceMappingURL=AutoFocusDirective.js.map