export type Omit<T, P> = Pick<
  T,
  { [key in keyof T]: T[key] extends P ? never : key }[keyof T]
>;
export type Properties<T> = Omit<T, (...args: any[]) => any>;
export type UserOutputs = Record<string, (event: any) => void>;
export type UserInputs = Record<string, any>;

export const generateAlphabeticString = (length = 5): string => {
  let randomString = '';
  let randomAscii: number;
  const asciiLow = 65;
  const asciiHigh = 90;
  for (let i = 0; i < length; i++) {
    randomAscii = Math.floor(Math.random() * (asciiHigh - asciiLow) + asciiLow);
    randomString += String.fromCharCode(randomAscii);
  }
  return randomString;
};

export const isNullOrUndefined = (value: any): value is undefined | null =>
  value === undefined || value === null;
export const notNullOrUndefined = <T>(
  value: T
): value is Exclude<T, null | undefined> => !isNullOrUndefined(value);
export function assertNotNullOrUndefined<T>(
  value: T,
  debubLabel?: string
): asserts value is NonNullable<T> {
  if (value === null || value === undefined) {
    throw new Error(
      `${debubLabel ? debubLabel : ''} cannot be undefined or null.`
    );
  }
}
