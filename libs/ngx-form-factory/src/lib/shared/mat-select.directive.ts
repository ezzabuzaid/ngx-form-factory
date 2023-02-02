import { AfterViewInit, Directive } from '@angular/core';
import { MatSelect } from '@angular/material/select';

import { SelectField } from '../fields';
import { AbstractFieldFactoryComponent } from './field-factory.abstract';

// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({ selector: 'mat-select', standalone: true })
export class MatSelectDirective implements AfterViewInit {
  constructor(
    private _fieldFactory: AbstractFieldFactoryComponent<SelectField<any>>,
    private _matSelect: MatSelect
  ) {}

  public ngAfterViewInit(): void {
    const placeholder = this._fieldFactory.field.placeholder;
    if (placeholder) {
      this._matSelect.placeholder = placeholder;
    }
  }
}
