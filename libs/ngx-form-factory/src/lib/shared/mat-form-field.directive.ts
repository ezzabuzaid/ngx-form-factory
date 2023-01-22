import { coerceArray } from '@angular/cdk/coercion';
import {
  AfterViewInit,
  Directive,
  Inject,
  NgModule,
  Optional,
  Renderer2,
} from '@angular/core';
import {
  FloatLabelType,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormField,
  MatFormFieldAppearance,
  MatFormFieldDefaultOptions,
  SubscriptSizing,
} from '@angular/material/form-field';

import { Field } from '../fields';
import { AbstractFieldFactoryComponent } from './field-factory.abstract';

// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({ selector: 'mat-form-field' })
export class MatFormFieldDirective implements AfterViewInit {
  constructor(
    private _matFormField: MatFormField,
    private _fieldFactory: AbstractFieldFactoryComponent<Field<any>>,
    private _renderer: Renderer2,
    @Optional()
    @Inject(MAT_FORM_FIELD_DEFAULT_OPTIONS)
    private _matFormFieldDefaultOptions: MatFormFieldDefaultOptions
  ) {}

  public ngAfterViewInit(): void {
    this._matFormField.hideRequiredMarker =
      this._fieldFactory.field.hideRequiredMarker;

    this._matFormField.floatLabel = (this._fieldFactory.field.floatLabel ??
      this._matFormFieldDefaultOptions?.floatLabel) as FloatLabelType;

    this._matFormField.appearance = (this._fieldFactory.field.appearance ??
      this._matFormFieldDefaultOptions?.appearance) as MatFormFieldAppearance;

    this._matFormField.subscriptSizing = (this._fieldFactory.field
      .subscriptSizing ??
      this._matFormFieldDefaultOptions?.subscriptSizing) as SubscriptSizing;

    this._addClasses(
      this._fieldFactory.field.class
        ? coerceArray(this._fieldFactory.field.class)
        : []
    );
  }

  private _addClasses(classes: string[]) {
    for (const cssClass of classes) {
      this._renderer.addClass(
        this._matFormField._elementRef.nativeElement,
        cssClass
      );
    }
  }
}

@NgModule({
  declarations: [MatFormFieldDirective],
  exports: [MatFormFieldDirective],
})
export class MatFormFieldDirectiveModule {}
