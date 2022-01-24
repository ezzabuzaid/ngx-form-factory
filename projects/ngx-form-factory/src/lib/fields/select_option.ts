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
         * The value of the option that will be used as field value
         */
        public value: string | number | boolean,
        /**
         * The Label that will be shown in the select option
         */
        public label?: string,
    ) {
        if (isNullorUndefined(this.label)) {
            this.label = `${this.value}`;
        }
    }
}
