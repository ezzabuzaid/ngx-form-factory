import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IField } from '../../fields';

@Component({
  selector: 'ngx-country-control',
  templateUrl: './country-control.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CountryControlComponent),
    multi: true
  }],
})
export class CountryControlComponent implements OnInit, ControlValueAccessor {
  private _value?: string;
  @Input() public formControl!: IField<string>;
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

  onChange!: (value: any) => {};
  onTouched!: () => {};

  constructor() { }

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
    return this.countries.find(el => el.iso2 === this.formControl.value);
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
