import { AfterViewInit, Directive, NgModule, Optional } from '@angular/core';
import { MatInput } from '@angular/material/input';

import { Field } from '../fields';
import { AbstractFieldFactoryComponent } from './field-factory.abstract';

// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({ selector: '[matInput]' })
export class MatInputDirective implements AfterViewInit {
  constructor(
    private _fieldFactory: AbstractFieldFactoryComponent<Field<any>>,
    @Optional() private _matInput: MatInput
  ) {}

  public ngAfterViewInit(): void {
    const placeholder = this._fieldFactory.field.placeholder;
    if (placeholder) {
      this._matInput.placeholder = placeholder;
    }

    const readonly = this._fieldFactory.field.readonly;
    if (readonly) {
      this._matInput.readonly = readonly;
    }
  }
}

@NgModule({
  declarations: [MatInputDirective],
  exports: [MatInputDirective],
})
export class MatInputDirectiveModule {}
