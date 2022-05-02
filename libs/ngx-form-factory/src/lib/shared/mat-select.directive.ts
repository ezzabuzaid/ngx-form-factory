import { AfterViewInit, Directive, NgModule, Optional } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';

import { Field, SelectField } from '../fields';
import { AbstractFieldFactoryComponent } from './field-factory.abstract';

// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({ selector: 'mat-select' })
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

@NgModule({
  declarations: [MatSelectDirective],
  exports: [MatSelectDirective],
})
export class MatSelectDirectiveModule {}
