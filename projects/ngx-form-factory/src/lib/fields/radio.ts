import { Observable } from 'rxjs';
import { Field, IFieldOptions } from './field';
import { EFieldType } from './field_type';
import { SelectOption } from './select_option';



interface IRadioFieldOptions<T> extends IFieldOptions<T> {
    /**
     * An Observable that will return List of SelectOption
     *
     * Observable made specifically for a use cases where the options will come from an API rather than hardcoded
     */
    options: Observable<SelectOption[]>;
}

export class RadioField<T> extends Field<T>   {
    public options: Observable<SelectOption[]>;
    constructor(options: IRadioFieldOptions<T>) {
        super(options);
        this.type = EFieldType.RADIO;
        this.options = options?.options;
    }
}
