import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  Input,
  ViewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  MatFormFieldDefaultOptions,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { WINDOW } from '@ng-web-apis/common';

import { assertNotNullOrUndefined } from '../../shared';
import { ProxyDirective } from '../../shared/proxy.directive';
import { PhoneNumberAssociatedWithCountryValidator } from './phonenumber.validator';

@Component({
  selector: 'ngx-phonenumber-field',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    ProxyDirective,
    ReactiveFormsModule,
  ],
  template: `
    <mat-form-field
      [appearance]="appearance!"
      [hideRequiredMarker]="hideRequiredMarker"
      [floatLabel]="floatLabel!"
      [subscriptSizing]="subscriptSizing!"
      [color]="color"
    >
      <mat-label *ngIf="label">{{ label }}</mat-label>
      <mat-hint *ngIf="hint">{{ hint }}</mat-hint>
      <input
        [id]="id!"
        [placeholder]="placeholder!"
        [readonly]="readonly"
        type="tel"
        matInput
        #intlTelInput
        [formControl]="control"
      />
      <mat-error *ngIf="control.hasError('notAssociated')"
        >The phone number format is not aligned with the selected
        country.</mat-error
      >
    </mat-form-field>
  `,
})
export class PhoneNumberFieldComponent
  implements ControlValueAccessor, AfterViewInit
{
  @ViewChild('intlTelInput', { static: true })
  public intlTelInput?: ElementRef<HTMLInputElement>;

  @Input() id?: string;
  @Input() class?: string;
  @Input() hint?: string;
  @Input() readonly?: boolean;
  @Input() label?: string;
  @Input() placeholder?: string;

  @Input() appearance?: MatFormFieldDefaultOptions['appearance'];
  @Input()
  hideRequiredMarker?: MatFormFieldDefaultOptions['hideRequiredMarker'];
  @Input() color?: MatFormFieldDefaultOptions['color'];
  @Input() floatLabel?: MatFormFieldDefaultOptions['floatLabel'];
  @Input() subscriptSizing?: MatFormFieldDefaultOptions['subscriptSizing'];
  control = new FormControl();

  private _window = inject(WINDOW);

  #onChange = (value: any) => {
    //
  };
  registerOnChange(fn: any): void {
    this.#onChange = fn;
  }
  writeValue(obj: any): void {
    this.control.setValue(obj);
  }
  registerOnTouched(fn: any): void {
    // TODO
  }
  setDisabledState?(isDisabled: boolean): void {
    // TODO
  }
  public ngAfterViewInit(): void {
    assertNotNullOrUndefined(this.intlTelInput);
    (this._window as any).intlTelInput(this.intlTelInput.nativeElement, {
      nationalMode: true,
      allowDropdown: false,
    });
    this.control.addValidators(
      PhoneNumberAssociatedWithCountryValidator(this.intlTelInput.nativeElement)
    );
  }
}
