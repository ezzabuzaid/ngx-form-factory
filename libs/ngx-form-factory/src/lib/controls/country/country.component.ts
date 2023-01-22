import { CommonModule } from '@angular/common';
import { Component, forwardRef, NgModule } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { Field } from '../../fields';
import {
  AbstractFieldFactoryComponent,
  IdDirectiveModule,
  MatFormFieldDirectiveModule,
  MatSelectDirectiveModule,
} from '../../shared';
import flags from '../../shared/flags';
import { MatInputDirectiveModule } from '../../shared/mat-input.directive';
import { ProxyDirective } from '../../shared/proxy.directive';

@Component({
  selector: 'ngx-country',
  templateUrl: './country.component.html',
  styles: [
    `
      .country-display {
        display: flex;
        align-items: center;
        justify-between: center;
      }
      .country-flag {
        font-size: 2rem;
      }
      .country-name {
        margin: 0 0.75rem;
      }
    `,
  ],
  providers: [
    {
      provide: AbstractFieldFactoryComponent,
      useExisting: forwardRef(() => CountryComponent),
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CountryComponent),
      multi: true,
    },
  ],
})
export class CountryComponent
  extends AbstractFieldFactoryComponent<Field<string>>
  implements ControlValueAccessor
{
  private _value?: string;
  public currentCountry?: any;

  public countries = flags;

  set value(value) {
    this._value = value;
    this.currentCountry = this.getCountry();
    this.notifyValueChange();
  }

  get value() {
    return this._value;
  }
  public matOptionTextContent: PropertyDescriptor = {
    get() {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const self: HTMLElement = this as HTMLElement;
      return self.getAttribute('aria-label');
    },
  };

  onChange!: (value: any) => void;
  onTouched!: () => void;

  notifyValueChange() {
    if (this.onChange) {
      this.onChange(this.value);
    }
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
  declarations: [CountryComponent],
  exports: [CountryComponent],
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
    ProxyDirective,
  ],
})
export class CountryComponentModule {}
