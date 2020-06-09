import { Observable } from 'rxjs';
import { EFieldType } from './base';
import { Field, IFieldOptions } from './field';

export class SelectOption {
    constructor(
        public value: string,
        public key: string | number
    ) { }
}

interface ISelectFieldOptions<T> extends IFieldOptions<T> {
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
