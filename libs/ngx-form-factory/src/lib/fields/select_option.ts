import { isNullOrUndefined } from '../shared';

/**
 * The mat-select `<mat-option></mat-option>`
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
    public label?: string
  ) {
    if (isNullOrUndefined(this.label)) {
      this.label = `${this.value}`;
    }
  }
}
