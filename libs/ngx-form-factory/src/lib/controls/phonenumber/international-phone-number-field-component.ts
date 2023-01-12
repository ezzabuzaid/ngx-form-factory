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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldDefaultOptions,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { WINDOW } from '@ng-web-apis/common';
import { combineLatest, pipe, startWith, Subject, takeUntil } from 'rxjs';

import { BaseField, EFieldType, Field, IRawFieldComponent } from '../../fields';
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
      [control]="formControlPhonenumberCode"
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
      [control]="formControlPhonenumber"
    ></ngx-phonenumber-field>
  `,
})
export default class InternationalPhoneNumberFieldComponent
  implements
    IRawFieldComponent<string>,
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

  public formControl!: BaseField<string>;
  public formControlPhonenumberCode = new Field({
    type: EFieldType.TEXT,
  });
  public formControlPhonenumber = new Field({
    type: EFieldType.TEXT,
  });
  private _subscription = new Subject();

  constructor(
    @Inject(WINDOW) private _window: Window,
    public elementRef: ElementRef
  ) {}

  ngAfterViewInit(): void {
    combineLatest([
      this.formControlPhonenumber.valueChanges,
      this.formControlPhonenumberCode.valueChanges,
    ])
      .pipe(takeUntil(this._subscription))
      .subscribe(([phonenumber, code]) => {
        console.log('code', code);
        this.formControl.setValue(`${code}${phonenumber}`, {
          emitEvent: false,
        });
      });

    const start = this.formControl.value
      ? pipe(startWith(this.formControl.value))
      : pipe();
    this.formControl.valueChanges
      .pipe(start, takeUntil(this._subscription))
      .subscribe((value) => {
        const intlTelInput = (
          this._window as any
        ).intlTelInputGlobals.getInstance(
          this.formControlPhonenumber.getElement()
        );
        intlTelInput.setNumber(value);
        const { dialCode } = intlTelInput.getSelectedCountryData() ?? {};

        console.log('dialCode', dialCode);

        // this.formControlPhonenumber.setValue(value, {
        //   emitEvent: false,
        // });
        this.formControlPhonenumberCode.setValue(dialCode);

        this.formControl.setValue(value);
      });
  }

  public ngOnDestroy(): void {
    this._subscription.next(null);
    this._subscription.complete();
  }
}
