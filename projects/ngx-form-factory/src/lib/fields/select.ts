import { Observable } from 'rxjs';
import { EFieldType, IBaseFieldOptions } from './base';
import { Field } from './field';

export class SelectOption {
    constructor(
        public value: string,
        public key: string | number
    ) { }
}

interface ISelectFieldOptions<T> extends IBaseFieldOptions<T> {
    options: Observable<SelectOption[]>;
    multiple: boolean;
}

export class SelectField<T> extends Field<T>   {
    public options: Observable<SelectOption[]> = null;
    public multiple = false;
    constructor(options: ISelectFieldOptions<T>) {
        super(options);
        this.type = EFieldType.SELECT;
        this.options = options?.options;
        this.multiple = options?.multiple;
    }
}
