import { createMask, InputmaskOptions } from "@ngneat/input-mask";
import { Field, IField, IFieldOptions } from './field';
import { EFieldType } from './field_type';


export interface IMaskFieldOptions<T>
    extends
    Omit<IFieldOptions<T>, 'type'> {
    mask?: InputmaskOptions<T>;
}

export interface IMaskField<T> extends IField<T> {
    mask?: InputmaskOptions<T>;
}

export class MaskField<T> extends Field<T> implements IMaskField<T> {
    mask: InputmaskOptions<T>;
    constructor(options?: IMaskFieldOptions<T>) {
        super(options);
        this.type = EFieldType.MASK;
        this.mask = options?.mask ?? createMask({
            alias: 'numeric',
            groupSeparator: ',',
            digits: 2,
            digitsOptional: false,
            prefix: '$ ',
            placeholder: options.placeholder,
        })
    }

}
