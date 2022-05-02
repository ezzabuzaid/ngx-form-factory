import { CommonModule } from '@angular/common';
import { Component, forwardRef, NgModule, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { IField } from '../../fields';
import {
  AbstractFieldFactoryComponent,
  IdDirectiveModule,
  MatFormFieldDirectiveModule,
  MatSelectDirectiveModule,
} from '../../shared';
import { MatInputDirectiveModule } from '../../shared/mat-input.directive';

@Component({
  selector: 'ngx-country-control',
  templateUrl: './country-control.component.html',
  providers: [
    {
      provide: AbstractFieldFactoryComponent,
      useExisting: forwardRef(() => CountryControlComponent),
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CountryControlComponent),
      multi: true,
    },
  ],
})
export class CountryControlComponent
  extends AbstractFieldFactoryComponent<IField<string>>
  implements OnInit, ControlValueAccessor
{
  private _value?: string;
  public countries: any[] = [];
  public currentCountry?: any;

  set value(value) {
    this._value = value;
    this.currentCountry = this.getCountry();
    this.notifyValueChange();
  }

  get value() {
    return this._value;
  }

  onChange!: (value: any) => void;
  onTouched!: () => void;

  notifyValueChange() {
    if (this.onChange) {
      this.onChange(this.value);
    }
  }

  ngOnInit() {
    this.countries = (window as any)['intlTelInputGlobals'].getCountryData();
  }

  public updateModel(value: string) {
    this.value = value;
  }

  public getCountry() {
    return this.countries.find((el) => el.iso2 === this.field.value);
  }

  writeValue(value: string) {
    if (value) {
      this.value = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
@NgModule({
  declarations: [CountryControlComponent],
  exports: [CountryControlComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    IdDirectiveModule,
    MatFormFieldDirectiveModule,
    MatInputDirectiveModule,
    MatSelectDirectiveModule,
  ],
})
export class CountryControlComponentModule {}
