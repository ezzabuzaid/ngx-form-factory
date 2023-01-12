import { Directive, inject } from '@angular/core';
import { MatSelect } from '@angular/material/select';

import InternationalPhoneNumberFieldComponent from './international-phone-number-field-component';

@Directive({
  standalone: true,
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'mat-select',
})
export class MatSelectFitContentDirective {
  private _matSelect = inject(MatSelect, { self: true });
  private _parent = inject(InternationalPhoneNumberFieldComponent);
  constructor() {
    Promise.resolve().then(() => {
      this._matSelect._preferredOverlayOrigin = this._parent.elementRef;
    });
  }
}
