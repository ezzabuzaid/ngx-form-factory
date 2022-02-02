import { Field, IField, IFieldOptions } from './field';
import { EFieldType } from './field_type';

type Wrap = 'hard' | 'soft' | 'off';
type Spellcheck = 'true' | 'false' | 'default';

export interface ITextareaFieldOptions
    extends
    Omit<IFieldOptions<string>, 'type'> {
    rows?: number;
    cols?: number;
    wrap?: Wrap;
    autosize?: boolean;
    autosizeMinRows?: number;
    autosizeMaxRows?: number;
    autocomplete?: 'on' | 'off';
    autofocus?: boolean;
    spellcheck?: Spellcheck;
}

export interface ITextareaField extends IField<string> {
    rows?: number;
    cols?: number;
    wrap?: Wrap;
    autosize?: boolean;
    autosizeMinRows?: number;
    autosizeMaxRows?: number;
    autocomplete?: 'on' | 'off';
    autofocus?: boolean;
    spellcheck?: Spellcheck;
}

export class TextareaField extends Field<string> implements ITextareaField {
    rows?: number;
    cols?: number;
    wrap?: Wrap;
    autosize?: boolean;
    autosizeMinRows?: number;
    autosizeMaxRows?: number;
    override autocomplete?: 'on' | 'off';
    autofocus?: boolean;
    spellcheck?: Spellcheck;
    constructor(options?: ITextareaFieldOptions) {
        super(options);
        this.type = EFieldType.TEXTAREA;
        this.rows = options?.rows;
        this.cols = options?.cols;
        this.wrap = options?.wrap;
        this.autosize = options?.autosize;
        this.autosizeMinRows = options?.autosizeMinRows;
        this.autosizeMaxRows = options?.autosizeMaxRows;
        this.autocomplete = options?.autocomplete;
        this.autofocus = options?.autofocus;
        this.spellcheck = options?.spellcheck;
    }

}
