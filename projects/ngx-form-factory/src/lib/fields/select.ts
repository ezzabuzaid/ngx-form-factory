import { Observable, of } from 'rxjs';
import { EFieldType } from './base';
import { Field, IFieldOptions } from './field';
import { isNullorUndefined } from '../shared';



/**
 * The select `<option></option>`
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
new SelectOption('',)

interface ISelectFieldOptions<T> extends IFieldOptions<T> {
    options: Observable<SelectOption[]>;
    multiple?: boolean;
}

export class SelectField<T> extends Field<T>   {
    public options: Observable<SelectOption[]> = null;
    public multiple = false;
    constructor(options?: ISelectFieldOptions<T>) {
        super(options);
        this.type = EFieldType.SELECT;
        this.options = options?.options;
        this.multiple = options?.multiple;
    }
}
