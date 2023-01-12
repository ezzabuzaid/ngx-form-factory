import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  ViewChild,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldDefaultOptions,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { WINDOW } from '@ng-web-apis/common';

import { BaseField, IRawFieldComponent } from '../../fields';
import { assertNotNullOrUndefined } from '../../shared';
import { ProxyDirective } from '../../shared/proxy.directive';
import { PhoneNumberAssociatedWithCountryValidator } from './phonenumber.validator';

@Component({
  selector: 'ngx-phonenumber-field',
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    ProxyDirective,
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
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
        [id]="formControl.id"
        [placeholder]="placeholder!"
        [readonly]="readonly"
        [formControl]="formControl"
        type="tel"
        matInput
        #intlTelInput
      />
      <mat-error *ngIf="formControl.hasError('notAssociated')"
        >The phone number format is not aligned with the selected
        country.</mat-error
      >
    </mat-form-field>
  `,
})
export class PhoneNumberFieldComponent
  implements IRawFieldComponent<string>, AfterViewInit
{
  @ViewChild('intlTelInput') public intlTelInput?: ElementRef<HTMLInputElement>;

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

  @Input('control') public formControl!: BaseField<string>;
  constructor(@Inject(WINDOW) private _window: Window) {}

  public ngAfterViewInit(): void {
    assertNotNullOrUndefined(this.intlTelInput);
    this.formControl.addValidators(
      PhoneNumberAssociatedWithCountryValidator(this.formControl.id)
    );
    (this._window as any).intlTelInput(this.formControl.getElement(), {
      nationalMode: true,
      allowDropdown: false,
    });
  }
}
