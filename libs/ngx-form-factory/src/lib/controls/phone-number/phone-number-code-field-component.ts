import { AsyncPipe, CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ControlValueAccessor, ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldDefaultOptions,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Subject } from 'rxjs';

import { BaseField } from '../../fields';
import { ProxyDirective } from '../../shared/proxy.directive';
import flags from './flags';
import { MatSelectFitContentDirective } from './mat-select-change-origin.directive';

@Component({
  selector: 'ngx-phonenumber-code-field',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    ProxyDirective,
    MatSelectFitContentDirective,
    AsyncPipe,
  ],
  template: `
    <mat-form-field
      [appearance]="appearance!"
      [hideRequiredMarker]="hideRequiredMarker"
      [floatLabel]="floatLabel!"
      [subscriptSizing]="subscriptSizing!"
      [color]="color"
      style="max-width: inherit;"
      [class.selected]="!!currentCountry"
    >
      <mat-select
        [id]="formControl.id"
        [disableRipple]="true"
        [formControl]="formControl"
        (selectionChange)="setSelectedCountry($event.value)"
      >
        <mat-select-trigger>
          <div class="iti__flag-box">
            <div
              class="iti__flag iti__{{ currentCountry?.iso2?.toLowerCase() }}"
            ></div>
          </div>
          {{ currentCountry?.name }}
        </mat-select-trigger>
        <mat-option
          *ngFor="let item of countries"
          [attr.aria-label]="item.name"
          ngxProxy
          propertyName="textContent"
          [propertyDescriptor]="matOptionTextContent"
          [value]="item.dialCode"
        >
          <div class="iti__flag-box">
            <div class="iti__flag iti__{{ item.iso2.toLowerCase() }}"></div>
          </div>
          {{ item.name }}
        </mat-option>
        <mat-select-trigger>
          <div class="iti__flag-box">
            <div
              class="iti__flag iti__{{ currentCountry?.iso2?.toLowerCase() }}"
            ></div>
          </div>
          {{ currentCountry?.name }}
        </mat-select-trigger>
        <mat-option *ngFor="let country of countries" [value]="country.iso2">
          <div class="iti__flag-box">
            <div class="iti__flag iti__{{ country.iso2.toLowerCase() }}"></div>
          </div>
          {{ country.name }}
        </mat-option>
      </mat-select>
    </mat-form-field>
  `,
})
export class PhoneNumberCodeFieldComponent
  implements ControlValueAccessor, OnInit, OnDestroy
{
  @Input() appearance?: MatFormFieldDefaultOptions['appearance'];
  @Input()
  hideRequiredMarker?: MatFormFieldDefaultOptions['hideRequiredMarker'];
  @Input() color?: MatFormFieldDefaultOptions['color'];
  @Input() floatLabel?: MatFormFieldDefaultOptions['floatLabel'];
  @Input() subscriptSizing?: MatFormFieldDefaultOptions['subscriptSizing'];
  private _subscription = new Subject();

  @Input('control') public formControl!: BaseField<string>;
  public countryiesDialCodes = flags;

  public countries: any[] = [];
  public currentCountry?: any;

  public matOptionTextContent: PropertyDescriptor = {
    get() {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const self: HTMLElement = this as HTMLElement;
      return self.getAttribute('aria-label');
    },
  };
  #onChange = (value: any) => {
    //
  };
  public getCountry() {
    return this.countries.find((el) => el.iso2 === this.formControl.value);
  }
  writeValue(obj: any): void {
    this.currentCountry = this.getCountry();
  }
  registerOnChange(fn: any): void {
    this.#onChange = fn;
  }
  registerOnTouched(fn: any): void {
    // TODO
  }
  setDisabledState?(isDisabled: boolean): void {
    // TODO
  }
  ngOnInit() {
    this.countries = (window as any)['intlTelInputGlobals'].getCountryData();
  }

  public setSelectedCountry(dialCode: string): void {
    this.currentCountry = flags.find((flag) => flag.dialCode === dialCode);
    this.formControl.setValue(this.currentCountry?.dialCode);
  }

  public ngOnDestroy(): void {
    this._subscription.next(null);
    this._subscription.complete();
  }
}
