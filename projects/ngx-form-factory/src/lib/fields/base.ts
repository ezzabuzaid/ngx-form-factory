
import { Type } from '@angular/core';
import { AbstractControlOptions, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { isNullorUndefined, generateAlphabeticString } from '../shared';

export type FieldName<T> = keyof T extends string ? keyof T : never;
export type FieldValue<T, name> = { [key in keyof T]: key extends name ? T[key] : never }[keyof T];

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
    type: EFieldType;
    value: T;
    section?: number;
    validation?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null;
    autocomplete?: string;
    addValidator?(...validator: ValidatorFn[]): void;
}

export type Options<T> = Partial<IBaseField<T[keyof T]> & T>;

export class BaseField<T> extends FormControl implements IBaseField<T> {
    static incremntalSection = -1;
    public type: EFieldType = null;
    public section: number = null;
    public value: T = null;
    public id = null;
    public autocomplete = '';

    constructor(options: Options<IBaseField<T>> = {}) {
        super(options.value, options.validation ?? {
            validators: [],
            asyncValidators: [],
            updateOn: 'change'
        });
        this.id = options.id ?? generateAlphabeticString(5);
        this.autocomplete = options.autocomplete;
        if (options.section) {
            this.section = options.section;
            BaseField.incremntalSection += options.section;
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


export class Form<T> extends FormGroup {
    public name: string;
    constructor(
        public fields: { [key in keyof T]?: BaseField<T[key]> },
        validation?: AbstractControlOptions,
    ) {
        super(fields, validation);
    }

    withName(name: string) {
        this.name = name;
        return this;
    }

    getComponent<Y>(component: Type<Y>): Y {
        return null as Y;
    }

    // // @ts-ignore
    // get<Key extends keyof T>(name: Key) {
    //     return super.get(name as any) as BaseField<T[Key]>;
    // }

    getName(name: keyof T) {
        return name;
    }

    // hasControlError(name: keyof T, errorName: string) {
    //     return this.get(name).hasError(errorName);
    // }

    // getControlValue(name: keyof T, defaultValue?: T[keyof T]) {
    //     return this.get(name).value || defaultValue;
    // }

}

