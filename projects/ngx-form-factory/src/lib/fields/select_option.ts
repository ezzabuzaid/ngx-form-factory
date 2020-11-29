import { isNullorUndefined } from '../shared';

/**
 * The mat-select `<mat-option></mat-option>`
 * 
 * Warning: value represent the label and the key represent the value
 * 
 */
export class SelectOption {
    constructor(
        /**
         * The Label that will be shown in the select option
         */
        public value: string,
        /**
         * The value of the option that will be used as field value
         */
        public key?: string | number
    ) {
        if (isNullorUndefined(this.key)) {
            this.key = this.value;
        }
    }
}