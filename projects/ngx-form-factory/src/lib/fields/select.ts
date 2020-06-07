import { Observable } from 'rxjs';
import { Options, EFieldType } from './base';
import { Field } from './field';

export class SelectOption {
    constructor(
        public value: string,
        public key: string | number
    ) { }
}

export class SelectField<T> extends Field<T>   {
    public options: Observable<SelectOption[]> = null;
    public multiple = false;
    constructor(options: Options<SelectField<T>> = {}) {
        super(options);
        this.type = EFieldType.SELECT;
        this.options = options.options;
        this.multiple = options.multiple;
    }
}
