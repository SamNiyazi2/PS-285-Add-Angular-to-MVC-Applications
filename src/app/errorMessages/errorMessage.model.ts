
// 03/11/2021 01:25 pm - SSN

export interface IErrorMessage {
    key: string,
    msg: string
}

export function createErrorMessage(key: string, msg: string): IErrorMessage {

    return { key, msg };
}

export function ccl(msg: any, color: string = 'cyan') {

    let d = new Date();
    let t = d.toLocaleTimeString();

    if (typeof (msg) == 'string') {
        if (msg === '') {
            console.log(' ');
        } else {
            console.log(`%c${t}: ${msg}`, `color:${color}`);
        }
    } else {
        console.log(msg);

    }

}