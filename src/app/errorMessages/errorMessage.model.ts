
// 03/11/2021 01:25 pm - SSN

export interface IErrorMessage {
    key: string,
    msg:string
}

export function createErrorMessage(key: string, msg: string) : IErrorMessage{

    return { key, msg };
}