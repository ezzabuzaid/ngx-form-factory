import { MatFormFieldDefaultOptions } from '@angular/material/form-field';

import { Field, IField, IFieldOptions, ITextOptions } from './field';
import { EFieldType } from './field_type';
import { ILengthOptions } from './length_options.interface';

type Wrap = 'hard' | 'soft' | 'off';
type Spellcheck = 'true' | 'false' | 'default';

export interface ITextareaFieldOptions
  extends IFieldOptions<string>,
    ILengthOptions,
    MatFormFieldDefaultOptions,
    ITextOptions {
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
  public rows?: number;
  public cols?: number;
  public wrap?: Wrap;
  public autosize?: boolean;
  public autosizeMinRows?: number;
  public autosizeMaxRows?: number;
  public override autocomplete?: 'on' | 'off';
  public autofocus?: boolean;
  public spellcheck?: Spellcheck;
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
