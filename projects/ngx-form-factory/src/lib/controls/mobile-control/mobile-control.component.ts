import {
  ChangeDetectionStrategy, Component, ElementRef,
  forwardRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IField } from '../../fields';
import { PhoneNumberAssociatedWithCountryValidator } from './phonenumber.validator';

@Component({
  selector: 'ngx-mobile-control',
  templateUrl: './mobile-control.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MobileControlComponent),
    multi: true
  }]
})
export class MobileControlComponent implements OnInit, OnChanges, ControlValueAccessor {
  private intlTelInstance = null;
  @Input() private code: string = null;

  @ViewChild('phoneField', { static: true }) private readonly phoneField: ElementRef<HTMLElement>;
  @Input() public formControl: IField<string> = null;

  onChange: (value: string) => {};
  onTouched: () => {};

  constructor() { }

  get selectedCountryCode() {
    const country = this.intlTelInstance.getSelectedCountryData();
    return country && country.dialCode;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.code && this.intlTelInstance) {
      const country = this.getCountry();
      this.intlTelInstance.setCountry(country.iso2);
    }
  }

  ngOnInit() {
    this.formControl.addValidator(PhoneNumberAssociatedWithCountryValidator(this.formControl.id));
    try {
      this.intlTelInstance = (window as any).intlTelInput(this.phoneField.nativeElement);
      this.ngOnChanges(null);
    } catch (error) { }
  }

  writeValue(value: any) {
    try {
      this.intlTelInstance.setNumber(value);
    } catch (error) {
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  getCountry(code = this.code) {
    return (window as any).intlTelInputGlobals.getCountryData()
      .find(country => {
        const dialCode = country.dialCode.toLowerCase();
        const isoCode = country.iso2.toLowerCase();
        const inputCode = String(code).toLowerCase();
        return dialCode === inputCode || isoCode === inputCode;
      });
  }

  updateModel() {
    this.onChange(this.intlTelInstance?.getNumber());
  }

}

interface IpApi {
  status: string;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  org: string;
  as: string;
  query: string;
}
