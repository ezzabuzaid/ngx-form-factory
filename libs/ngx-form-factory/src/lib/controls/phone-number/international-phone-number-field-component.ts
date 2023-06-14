import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Inject,
  Input,
  OnDestroy,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  MatFormFieldDefaultOptions,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { WINDOW } from '@ng-web-apis/common';
import { combineLatest, Subject, takeUntil } from 'rxjs';

import { EFieldType, Field } from '../../fields';
import { ProxyDirective } from '../../shared/proxy.directive';
import { PhoneNumberCodeFieldComponent } from './phone-number-code-field-component';
import { PhoneNumberFieldComponent } from './phone-number-field-component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    ProxyDirective,
    PhoneNumberFieldComponent,
    PhoneNumberCodeFieldComponent,
  ],
  styles: [
    `
      :host-context(.inline) {
        --mdc-shape-small: 0px;
        height: 56px;
        display: flex;
      }
      ngx-phonenumber-code-field .mdc-notched-outline__trailing {
        border-right: 0 !important;
      }
    `,
  ],
  template: `
    <ngx-phonenumber-code-field
      style="max-width: 5rem"
      [appearance]="appearance"
      [hideRequiredMarker]="hideRequiredMarker"
      [floatLabel]="floatLabel"
      [subscriptSizing]="subscriptSizing"
      [color]="color"
      [formControl]="formControlPhonenumberCode"
    ></ngx-phonenumber-code-field>
    <ngx-phonenumber-field
      [appearance]="appearance"
      [hideRequiredMarker]="hideRequiredMarker"
      [floatLabel]="floatLabel"
      [subscriptSizing]="subscriptSizing"
      [color]="color"
      [readonly]="readonly"
      [class]="class"
      [label]="label"
      [placeholder]="placeholder"
      [formControl]="formControlPhonenumber"
    ></ngx-phonenumber-field>
  `,
})
export class InternationalPhoneNumberFieldComponent
  implements
    ControlValueAccessor,
    AfterViewInit,
    OnDestroy,
    MatFormFieldDefaultOptions
{
  @Input() id?: string;
  @Input() class?: string;
  @Input() hint?: string;
  @Input() readonly?: boolean;
  @Input() placeholder?: string;
  @Input() label?: string;

  @Input() appearance?: MatFormFieldDefaultOptions['appearance'];
  @Input()
  hideRequiredMarker?: MatFormFieldDefaultOptions['hideRequiredMarker'];
  @Input() color?: MatFormFieldDefaultOptions['color'];
  @Input() floatLabel?: MatFormFieldDefaultOptions['floatLabel'];
  @Input() subscriptSizing?: MatFormFieldDefaultOptions['subscriptSizing'];

  @Input()
  @HostBinding('class.inline')
  inline?: boolean;

  public formControlPhonenumberCode = new Field({
    type: EFieldType.TEXT,
  });
  public formControlPhonenumber = new Field({
    type: EFieldType.TEXT,
  });
  private _subscription = new Subject();
  #onChange = (value: any) => {
    //
  };
  constructor(
    @Inject(WINDOW) private _window: Window,
    public elementRef: ElementRef
  ) {}

  writeValue(value: any): void {
    const intlTelInput = (this._window as any).intlTelInputGlobals.getInstance(
      this.formControlPhonenumber.getElement()
    );
    intlTelInput.setNumber(value);
    const { dialCode } = intlTelInput.getSelectedCountryData() ?? {};

    console.log('dialCode', dialCode);

    // this.formControlPhonenumber.setValue(value, {
    //   emitEvent: false,
    // });
    this.formControlPhonenumberCode.setValue(dialCode);
  }
  registerOnChange(fn: any): void {
    this.#onChange = fn;
  }

  registerOnTouched(fn: any): void {
    // TODO: implement
  }

  setDisabledState?(isDisabled: boolean): void {
    // TODO: implement
  }

  ngAfterViewInit(): void {
    combineLatest([
      this.formControlPhonenumber.valueChanges,
      this.formControlPhonenumberCode.valueChanges,
    ])
      .pipe(takeUntil(this._subscription))
      .subscribe(([phonenumber, code]) => {
        console.log('code', code);
        this.#onChange(`${code}${phonenumber}`);
      });
  }

  public ngOnDestroy(): void {
    this._subscription.next(null);
    this._subscription.complete();
  }
}
