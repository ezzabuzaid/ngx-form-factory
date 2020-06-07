

export type OmitProperties<T, P> = Pick<T, { [key in keyof T]: T[key] extends P ? never : key }[keyof T]>;
export type Properties<T> = OmitProperties<T, (...args: any[]) => any>;

export function generateAlphabeticString(length = 5): string {
    let randomString = '';
    let randomAscii: number;
    const asciiLow = 65;
    const asciiHigh = 90;
    for (let i = 0; i < length; i++) {
        randomAscii = Math.floor((Math.random() * (asciiHigh - asciiLow)) + asciiLow);
        randomString += String.fromCharCode(randomAscii);
    }
    return randomString;
}

export function isNullorUndefined(value: any) {
    return value === null || value === undefined;
}
