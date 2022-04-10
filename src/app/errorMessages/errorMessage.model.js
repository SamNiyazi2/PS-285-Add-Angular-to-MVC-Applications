"use strict";
// 03/11/2021 01:25 pm - SSN
Object.defineProperty(exports, "__esModule", { value: true });
exports.ccl = exports.createErrorMessage = void 0;
function createErrorMessage(key, msg) {
    return { key: key, msg: msg };
}
exports.createErrorMessage = createErrorMessage;
function ccl(msg, color) {
    if (color === void 0) { color = 'cyan'; }
    var d = new Date();
    var t = d.toLocaleTimeString();
    if (typeof (msg) == 'string') {
        if (msg === '') {
            console.log(' ');
        }
        else {
            console.log("%c" + t + ": " + msg, "color:" + color);
        }
    }
    else {
        console.log(msg);
    }
}
exports.ccl = ccl;
//# sourceMappingURL=errorMessage.model.js.map