import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  Input,
  NgModule,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { IField } from '../../fields';
import {
  AbstractFieldFactoryComponent,
  IdDirectiveModule,
  MatFormFieldDirectiveModule,
} from '../../shared';
import { MatInputDirectiveModule } from '../../shared/mat-input.directive';
import { PhoneNumberAssociatedWithCountryValidator } from './phonenumber.validator';

@Component({
  selector: 'ngx-mobile-control',
  templateUrl: './mobile-control.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: AbstractFieldFactoryComponent,
      useExisting: forwardRef(() => MobileControlComponent),
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MobileControlComponent),
      multi: true,
    },
  ],
})
export class MobileControlComponent
  extends AbstractFieldFactoryComponent<IField<string>>
  implements OnInit, OnChanges, ControlValueAccessor
{
  private intlTelInstance?: any;
  @Input() private code?: string;

  @ViewChild('phoneField', { static: true })
  private readonly phoneField?: ElementRef<HTMLElement>;

  onChange!: (value: string) => void;
  onTouched!: () => void;

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
    this.field.addValidators(
      PhoneNumberAssociatedWithCountryValidator(this.field.id)
    );
    try {
      this.intlTelInstance = (window as any).intlTelInput(
        this.phoneField?.nativeElement
      );
      this.ngOnChanges({});
    } catch (error) {
      // Throw error if intlTelInstance is not ready
    }
  }

  writeValue(value: any) {
    try {
      this.intlTelInstance.setNumber(value);
    } catch (error) {
      // Throw error if intlTelInstance is not ready
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  getCountry(code = this.code) {
    return (window as any).intlTelInputGlobals
      .getCountryData()
      .find((country: any) => {
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

@NgModule({
  declarations: [MobileControlComponent],
  exports: [MobileControlComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldDirectiveModule,
    IdDirectiveModule,
    MatInputDirectiveModule,
  ],
})
export class MobileControlComponentModule {}
