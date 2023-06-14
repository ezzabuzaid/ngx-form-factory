import { AbstractControl, ValidatorFn } from '@angular/forms';

/**
 *
 * @param id The id refer to input id
 */
export function PhoneNumberAssociatedWithCountryValidator(
  id: string | HTMLInputElement
): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const input = typeof id === 'string' ? document.getElementById(id) : id;
    if (input) {
      const inst = (window as any).intlTelInputGlobals.getInstance(input);
      if (inst) {
        return inst.isValidNumber() ? null : { notAssociated: true };
      }
    }
    return null;
  };
}
