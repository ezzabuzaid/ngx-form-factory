import { Observable, of } from 'rxjs';
import { EFieldType } from './base';
import { Field, IFieldOptions } from './field';
import { isNullorUndefined } from '../shared';
import { SelectOption } from './select_option';


interface ISelectFieldOptions<T> extends IFieldOptions<T> {
    /**
     * An Observable that will return List of SelectOption
     * 
     * Observable made specifically for a use cases where the options will come from an API rather than hardcoded
     */
    options: Observable<SelectOption[]>;
    /**
     * Indicates if the select field is multiple select 
     */
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
