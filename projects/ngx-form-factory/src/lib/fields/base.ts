
import { AbstractControl, AbstractControlOptions, AsyncValidatorFn, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { generateAlphabeticString } from '../shared';

export type FieldName<T> = keyof T extends string ? keyof T : never;
export type FieldValue<T, name> = { [key in keyof T]: key extends name ? T[key] : never }[keyof T];
export declare type Constructor<T> = new (...args: any[]) => T;

export enum EFieldType {
    TEXT,
    TEXTAREA,
    SELECT,
    PASSWORD,
    EMAIL,
    DATE,
    DATETIME,
    CHECKBOX,
    RADIO,
    NUMBER,
    TEL,
    COUNTRY,
    RAW_FIELD
}

export interface IBaseField<T> extends FormControl {
    id?: string;
    type?: EFieldType;
    value: T;
    section?: number;
    autocomplete?: string;
    addValidator?(...validator: ValidatorFn[]): void;
}

export interface IBaseFieldOptions<T> {
    section?: number;
    value?: T;
    id?: string;
    autocomplete?: string;
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null;
    type?: EFieldType;
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null;
}

export class BaseField<T> extends FormControl implements IBaseField<T> {
    static incremntalSection = -1;
    public type: EFieldType = null;
    public section: number = null;
    public value: T = null;
    public id = null;
    public autocomplete = '';

    constructor(options: IBaseFieldOptions<T>) {
        super(options?.value, options?.validatorOrOpts, options?.asyncValidator);
        this.id = options?.id ?? generateAlphabeticString(5);
        this.autocomplete = options?.autocomplete;
        if (options?.section) {
            this.section = options?.section;
            BaseField.incremntalSection += options?.section;
        } else {
            this.section = ++BaseField.incremntalSection;
        }
    }

    addValidator(...validator: ValidatorFn[]) {
        this.setValidators(Validators.compose([this.validator, ...validator]));
    }

    getElement() {
        return document.getElementById(this.id);
    }

    on(eventName: keyof HTMLElementEventMap) {
        return fromEvent(this.getElement(), eventName);
    }
}

interface IForm<T> extends AbstractControl {
    fields: {
        [key in keyof T]?: BaseField<T[key]> | IForm<T[key]>
    };
    validation?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null;
}
export class Form<T> extends FormGroup implements IForm<T> {
    constructor(
        public fields: {
            [key in keyof T]?: BaseField<T[key]> | IForm<T[key]>
        },
        validation?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
        asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null,
    ) {
        super(fields, validation, asyncValidator);
    }

    get<Key extends keyof T>(name: Key extends string ? Key : never): BaseField<T[Key]> {
        return super.get(name as any) as any;
    }

    getName(name: keyof T) {
        return name;
    }

    hasControlError(name: keyof T, errorName: string) {
        return this.get(name as any).hasError(errorName);
    }

    getControlValue<key extends keyof T>(name: key, defaultValue?: T[key]) {
        return this.get(name as any).value || defaultValue;
    }

}
