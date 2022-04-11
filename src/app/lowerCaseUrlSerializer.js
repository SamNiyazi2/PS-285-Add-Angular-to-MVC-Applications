"use strict";
// 03/09/2021 04:56 pm - SSN - [20210309-1631] - [002] - M03-07 - Angular routing
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// https://www.codeproject.com/Questions/1231299/Angular-url-case-insensitive
var router_1 = require("@angular/router");
var LowerCaseUrlSerializer = /** @class */ (function (_super) {
    __extends(LowerCaseUrlSerializer, _super);
    function LowerCaseUrlSerializer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LowerCaseUrlSerializer.prototype.parse = function (url) {
        var path = url.split('?')[0];
        var query = url.split('?')[1] || '';
        var finalUrl = path.toLowerCase() + (query !== '' ? "?" + query : '');
        return _super.prototype.parse.call(this, finalUrl);
    };
    return LowerCaseUrlSerializer;
}(router_1.DefaultUrlSerializer));
exports.LowerCaseUrlSerializer = LowerCaseUrlSerializer;
//# sourceMappingURL=lowerCaseUrlSerializer.js.map